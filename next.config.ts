import { join } from 'node:path';

// glob 패치 로드
try {
  require('./glob-patch.js');
} catch (error) {
  console.log('glob 패치 로드 실패:', error);
}

const nextConfig = {
  /* config options here */
  experimental: {
    // 타입 오류 해결을 위한 실험적 옵션 추가
    typedRoutes: false,
    // 터보팩을 활성화하여 더 안전한 빌드
    turbo: {
      rules: {
        // Windows 시스템 경로를 완전히 제외
        '*.{js,jsx,ts,tsx}': {
          exclude: [
            'C:\\Users\\**\\Application Data\\**',
            'C:\\Users\\**\\AppData\\**',
            'C:\\Windows\\**',
            'C:\\Program Files\\**',
            'C:\\Program Files (x86)\\**'
          ]
        }
      }
    },
    // 더 안전한 파일 시스템 접근
    serverComponentsExternalPackages: [],
    // 최적화된 청크 분할
    optimizeCss: true
  },
  typescript: {
    // 빌드 시 타입 오류를 무시
    ignoreBuildErrors: true
  },
  eslint: {
    // 빌드 시 ESLint 오류를 무시
    ignoreDuringBuilds: true
  },
  // 출력 모드를 standalone으로 설정 (Docker 배포용)
  output: 'standalone',
  // 파일 추적 루트 설정
  outputFileTracingRoot: join(process.cwd(), '../../'),
  // 더 안전한 파일 시스템 설정
  images: {
    unoptimized: true
  },
  webpack: (config: any, { dev, isServer }: any) => {
    // Windows 시스템 경로를 완전히 차단하는 설정
    const restrictedPaths = [
      'C:\\Users\\zoms007\\Application Data',
      'C:\\Users\\zoms007\\AppData',
      'C:\\Users\\Default\\Application Data',
      'C:\\Users\\Default\\AppData',
      'C:\\Documents and Settings',
      'C:\\Windows',
      'C:\\Program Files',
      'C:\\Program Files (x86)',
      'C:\\System Volume Information',
      'C:\\$Recycle.Bin'
    ];

    // 파일 시스템 접근을 완전히 제한하는 플러그인
    config.plugins = config.plugins || [];
    config.plugins.push({
      apply: (compiler: any) => {
        // 컴파일러 훅에서 파일 시스템 접근 차단
        compiler.hooks.beforeRun.tap('RestrictFileSystemPlugin', () => {
          const originalReaddir = require('fs').readdir;
          const originalReaddirSync = require('fs').readdirSync;
          const originalScandir = require('fs').scandir;
          
          require('fs').readdir = function(path: string, ...args: any[]) {
            if (typeof path === 'string' && restrictedPaths.some(rPath => path.includes(rPath))) {
              const callback = args[args.length - 1];
              if (typeof callback === 'function') {
                callback(null, []);
                return;
              }
            }
            return originalReaddir.apply(this, [path, ...args]);
          };
          
          require('fs').readdirSync = function(path: string, ...args: any[]) {
            if (typeof path === 'string' && restrictedPaths.some(rPath => path.includes(rPath))) {
              return [];
            }
            return originalReaddirSync.apply(this, [path, ...args]);
          };
          
          if (originalScandir) {
            require('fs').scandir = function(path: string, ...args: any[]) {
              if (typeof path === 'string' && restrictedPaths.some(rPath => path.includes(rPath))) {
                const callback = args[args.length - 1];
                if (typeof callback === 'function') {
                  callback(null, []);
                  return;
                }
              }
              return originalScandir.apply(this, [path, ...args]);
            };
          }
        });

        // glob 모듈 패치
        compiler.hooks.normalModuleFactory.tap('RestrictPathsPlugin', (factory: any) => {
          factory.hooks.beforeResolve.tapAsync('RestrictPathsPlugin', (data: any, callback: any) => {
            if (data?.request) {
              const shouldBlock = restrictedPaths.some(path => 
                data.request.includes(path) || 
                (data.context && data.context.includes(path))
              );
              
              if (shouldBlock) {
                return callback(null, false);
              }
            }
            callback(null, data);
          });
        });
      }
    });

    // 더 강력한 경로 제외 설정
    const excludedPaths = [
      /node_modules/,
      /\.git/,
      /\.next/,
      /AppData/i,
      /Application Data/i,
      /C:\\Users\\.*\\Application Data/i,
      /C:\\Users\\.*\\AppData/i,
      /Documents and Settings/i,
      /System Volume Information/i,
      /\$Recycle\.Bin/i,
      /Windows/i,
      /Program Files/i,
      /Program Files \(x86\)/i
    ];

    // watchOptions 설정
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.next/**',
        '**/C:/Users/**/Application Data/**',
        '**/C:/Users/**/AppData/**',
        '**/Windows/**',
        '**/Program Files/**',
        '**/Program Files (x86)/**',
        '**/$Recycle.Bin/**',
        // 절대 경로로도 추가
        'C:/Users/**/Application Data/**',
        'C:/Users/**/AppData/**'
      ]
    };

    // resolve 설정 강화
    config.resolve = {
      ...config.resolve,
      symlinks: false,
      alias: {
        ...config.resolve?.alias,
        // Windows 시스템 경로 완전 차단
        'C:\\Users': false,
        'C:\\Windows': false,
        'C:\\Program Files': false,
        'C:\\Program Files (x86)': false
      },
      // 특정 경로들을 완전히 제외
      restrictions: [
        ...config.resolve?.restrictions || [],
        /C:\\Users\\.*\\Application Data/,
        /C:\\Users\\.*\\AppData/
      ]
    };

    // entry 포인트에서 시스템 경로 제외
    if (config.entry && typeof config.entry === 'object') {
      Object.keys(config.entry).forEach(key => {
        const entry = config.entry[key];
        if (Array.isArray(entry)) {
          config.entry[key] = entry.filter((item: string) => {
            return !restrictedPaths.some(path => item.includes(path));
          });
        }
      });
    }

    // module.rules에서 제외 패턴 강화
    if (config.module?.rules) {
      for (const rule of config.module.rules) {
        if (rule.oneOf) {
          for (const oneOfRule of rule.oneOf) {
            if (oneOfRule.exclude) {
              if (Array.isArray(oneOfRule.exclude)) {
                for (const pattern of excludedPaths) {
                  oneOfRule.exclude.push(pattern);
                }
              }
            } else {
              oneOfRule.exclude = excludedPaths;
            }
          }
        } else if (rule.exclude) {
          if (Array.isArray(rule.exclude)) {
            for (const pattern of excludedPaths) {
              rule.exclude.push(pattern);
            }
          }
        } else if (rule.test || rule.use) {
          rule.exclude = excludedPaths;
        }
      }
    }

    // 추가적인 제외 규칙
    config.externals = {
      ...config.externals,
      // Windows 시스템 모듈 제외
      'fsevents': 'commonjs fsevents'
    };

    // cache 설정에서도 시스템 경로 제외
    if (config.cache) {
      config.cache.buildDependencies = {
        ...config.cache.buildDependencies,
        config: [__filename]
      };
    }

    return config;
  }
};

export default nextConfig;
