const fs = require('fs');
const path = require('path');

// glob 패키지의 경로
const globPath = path.join(__dirname, 'node_modules', 'glob', 'dist', 'cjs', 'index.js');

// 패치할 내용
const patchContent = `
// Windows 제한 경로 목록
const restrictedPaths = [
  'C:\\\\Users\\\\zoms007\\\\Application Data',
  'C:\\\\Users\\\\zoms007\\\\AppData',
  'C:\\\\Users\\\\Default\\\\Application Data',
  'C:\\\\Users\\\\Default\\\\AppData',
  'C:\\\\Windows',
  'C:\\\\Program Files',
  'C:\\\\Program Files (x86)'
];

// 원본 scandir 함수 저장
const originalScandir = fs.scandir;
const originalScandirSync = fs.scandirSync;
const originalReaddir = fs.readdir;
const originalReaddirSync = fs.readdirSync;

// scandir 함수 패치
if (originalScandir) {
  fs.scandir = function(path, ...args) {
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

// scandirSync 함수 패치
if (originalScandirSync) {
  fs.scandirSync = function(path, ...args) {
    if (typeof path === 'string' && restrictedPaths.some(rPath => path.includes(rPath))) {
      return [];
    }
    return originalScandirSync.apply(this, [path, ...args]);
  };
}

// readdir 함수 패치
fs.readdir = function(path, ...args) {
  if (typeof path === 'string' && restrictedPaths.some(rPath => path.includes(rPath))) {
    const callback = args[args.length - 1];
    if (typeof callback === 'function') {
      callback(null, []);
      return;
    }
  }
  return originalReaddir.apply(this, [path, ...args]);
};

// readdirSync 함수 패치
fs.readdirSync = function(path, ...args) {
  if (typeof path === 'string' && restrictedPaths.some(rPath => path.includes(rPath))) {
    return [];
  }
  return originalReaddirSync.apply(this, [path, ...args]);
};

console.log('Glob 패치가 적용되었습니다.');
`;

try {
  // 패치 파일 작성
  fs.writeFileSync('glob-patch.js', patchContent);
  console.log('glob-patch.js 파일이 생성되었습니다.');
} catch (error) {
  console.error('패치 파일 생성 실패:', error);
} 