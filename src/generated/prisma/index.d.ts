
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PersonalityTypes
 * 
 */
export type PersonalityTypes = $Result.DefaultSelection<Prisma.$PersonalityTypesPayload>
/**
 * Model Questions
 * 
 */
export type Questions = $Result.DefaultSelection<Prisma.$QuestionsPayload>
/**
 * Model TestAttempts
 * 
 */
export type TestAttempts = $Result.DefaultSelection<Prisma.$TestAttemptsPayload>
/**
 * Model UserAnswers
 * 
 */
export type UserAnswers = $Result.DefaultSelection<Prisma.$UserAnswersPayload>
/**
 * Model TestResults
 * 
 */
export type TestResults = $Result.DefaultSelection<Prisma.$TestResultsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PersonalityTypes
 * const personalityTypes = await prisma.personalityTypes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PersonalityTypes
   * const personalityTypes = await prisma.personalityTypes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.personalityTypes`: Exposes CRUD operations for the **PersonalityTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalityTypes
    * const personalityTypes = await prisma.personalityTypes.findMany()
    * ```
    */
  get personalityTypes(): Prisma.PersonalityTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **Questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.QuestionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testAttempts`: Exposes CRUD operations for the **TestAttempts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestAttempts
    * const testAttempts = await prisma.testAttempts.findMany()
    * ```
    */
  get testAttempts(): Prisma.TestAttemptsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAnswers`: Exposes CRUD operations for the **UserAnswers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAnswers
    * const userAnswers = await prisma.userAnswers.findMany()
    * ```
    */
  get userAnswers(): Prisma.UserAnswersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testResults`: Exposes CRUD operations for the **TestResults** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestResults
    * const testResults = await prisma.testResults.findMany()
    * ```
    */
  get testResults(): Prisma.TestResultsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PersonalityTypes: 'PersonalityTypes',
    Questions: 'Questions',
    TestAttempts: 'TestAttempts',
    UserAnswers: 'UserAnswers',
    TestResults: 'TestResults'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "personalityTypes" | "questions" | "testAttempts" | "userAnswers" | "testResults"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PersonalityTypes: {
        payload: Prisma.$PersonalityTypesPayload<ExtArgs>
        fields: Prisma.PersonalityTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalityTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalityTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload>
          }
          findFirst: {
            args: Prisma.PersonalityTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalityTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload>
          }
          findMany: {
            args: Prisma.PersonalityTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload>[]
          }
          create: {
            args: Prisma.PersonalityTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload>
          }
          createMany: {
            args: Prisma.PersonalityTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalityTypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload>[]
          }
          delete: {
            args: Prisma.PersonalityTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload>
          }
          update: {
            args: Prisma.PersonalityTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload>
          }
          deleteMany: {
            args: Prisma.PersonalityTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalityTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalityTypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload>[]
          }
          upsert: {
            args: Prisma.PersonalityTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalityTypesPayload>
          }
          aggregate: {
            args: Prisma.PersonalityTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalityTypes>
          }
          groupBy: {
            args: Prisma.PersonalityTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalityTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalityTypesCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalityTypesCountAggregateOutputType> | number
          }
        }
      }
      Questions: {
        payload: Prisma.$QuestionsPayload<ExtArgs>
        fields: Prisma.QuestionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findFirst: {
            args: Prisma.QuestionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findMany: {
            args: Prisma.QuestionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          create: {
            args: Prisma.QuestionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          createMany: {
            args: Prisma.QuestionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          delete: {
            args: Prisma.QuestionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          update: {
            args: Prisma.QuestionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          deleteMany: {
            args: Prisma.QuestionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          upsert: {
            args: Prisma.QuestionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.QuestionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      TestAttempts: {
        payload: Prisma.$TestAttemptsPayload<ExtArgs>
        fields: Prisma.TestAttemptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestAttemptsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestAttemptsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload>
          }
          findFirst: {
            args: Prisma.TestAttemptsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestAttemptsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload>
          }
          findMany: {
            args: Prisma.TestAttemptsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload>[]
          }
          create: {
            args: Prisma.TestAttemptsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload>
          }
          createMany: {
            args: Prisma.TestAttemptsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestAttemptsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload>[]
          }
          delete: {
            args: Prisma.TestAttemptsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload>
          }
          update: {
            args: Prisma.TestAttemptsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload>
          }
          deleteMany: {
            args: Prisma.TestAttemptsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestAttemptsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestAttemptsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload>[]
          }
          upsert: {
            args: Prisma.TestAttemptsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestAttemptsPayload>
          }
          aggregate: {
            args: Prisma.TestAttemptsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestAttempts>
          }
          groupBy: {
            args: Prisma.TestAttemptsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestAttemptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestAttemptsCountArgs<ExtArgs>
            result: $Utils.Optional<TestAttemptsCountAggregateOutputType> | number
          }
        }
      }
      UserAnswers: {
        payload: Prisma.$UserAnswersPayload<ExtArgs>
        fields: Prisma.UserAnswersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAnswersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAnswersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          findFirst: {
            args: Prisma.UserAnswersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAnswersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          findMany: {
            args: Prisma.UserAnswersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>[]
          }
          create: {
            args: Prisma.UserAnswersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          createMany: {
            args: Prisma.UserAnswersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAnswersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>[]
          }
          delete: {
            args: Prisma.UserAnswersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          update: {
            args: Prisma.UserAnswersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          deleteMany: {
            args: Prisma.UserAnswersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAnswersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAnswersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>[]
          }
          upsert: {
            args: Prisma.UserAnswersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswersPayload>
          }
          aggregate: {
            args: Prisma.UserAnswersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAnswers>
          }
          groupBy: {
            args: Prisma.UserAnswersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAnswersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAnswersCountArgs<ExtArgs>
            result: $Utils.Optional<UserAnswersCountAggregateOutputType> | number
          }
        }
      }
      TestResults: {
        payload: Prisma.$TestResultsPayload<ExtArgs>
        fields: Prisma.TestResultsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestResultsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestResultsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload>
          }
          findFirst: {
            args: Prisma.TestResultsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestResultsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload>
          }
          findMany: {
            args: Prisma.TestResultsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload>[]
          }
          create: {
            args: Prisma.TestResultsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload>
          }
          createMany: {
            args: Prisma.TestResultsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestResultsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload>[]
          }
          delete: {
            args: Prisma.TestResultsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload>
          }
          update: {
            args: Prisma.TestResultsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload>
          }
          deleteMany: {
            args: Prisma.TestResultsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestResultsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestResultsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload>[]
          }
          upsert: {
            args: Prisma.TestResultsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultsPayload>
          }
          aggregate: {
            args: Prisma.TestResultsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestResults>
          }
          groupBy: {
            args: Prisma.TestResultsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestResultsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestResultsCountArgs<ExtArgs>
            result: $Utils.Optional<TestResultsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    personalityTypes?: PersonalityTypesOmit
    questions?: QuestionsOmit
    testAttempts?: TestAttemptsOmit
    userAnswers?: UserAnswersOmit
    testResults?: TestResultsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonalityTypesCountOutputType
   */

  export type PersonalityTypesCountOutputType = {
    questions: number
    test_results_primary: number
  }

  export type PersonalityTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | PersonalityTypesCountOutputTypeCountQuestionsArgs
    test_results_primary?: boolean | PersonalityTypesCountOutputTypeCountTest_results_primaryArgs
  }

  // Custom InputTypes
  /**
   * PersonalityTypesCountOutputType without action
   */
  export type PersonalityTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypesCountOutputType
     */
    select?: PersonalityTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonalityTypesCountOutputType without action
   */
  export type PersonalityTypesCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
  }

  /**
   * PersonalityTypesCountOutputType without action
   */
  export type PersonalityTypesCountOutputTypeCountTest_results_primaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestResultsWhereInput
  }


  /**
   * Count Type QuestionsCountOutputType
   */

  export type QuestionsCountOutputType = {
    user_answers: number
  }

  export type QuestionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_answers?: boolean | QuestionsCountOutputTypeCountUser_answersArgs
  }

  // Custom InputTypes
  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionsCountOutputType
     */
    select?: QuestionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountUser_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswersWhereInput
  }


  /**
   * Count Type TestAttemptsCountOutputType
   */

  export type TestAttemptsCountOutputType = {
    user_answers: number
  }

  export type TestAttemptsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_answers?: boolean | TestAttemptsCountOutputTypeCountUser_answersArgs
  }

  // Custom InputTypes
  /**
   * TestAttemptsCountOutputType without action
   */
  export type TestAttemptsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttemptsCountOutputType
     */
    select?: TestAttemptsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestAttemptsCountOutputType without action
   */
  export type TestAttemptsCountOutputTypeCountUser_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PersonalityTypes
   */

  export type AggregatePersonalityTypes = {
    _count: PersonalityTypesCountAggregateOutputType | null
    _min: PersonalityTypesMinAggregateOutputType | null
    _max: PersonalityTypesMaxAggregateOutputType | null
  }

  export type PersonalityTypesMinAggregateOutputType = {
    id: string | null
    type_code: string | null
    type_name: string | null
    title: string | null
    theme_sentence: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PersonalityTypesMaxAggregateOutputType = {
    id: string | null
    type_code: string | null
    type_name: string | null
    title: string | null
    theme_sentence: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PersonalityTypesCountAggregateOutputType = {
    id: number
    type_code: number
    type_name: number
    title: number
    theme_sentence: number
    description: number
    description_points: number
    strength_keywords: number
    weakness_keywords: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PersonalityTypesMinAggregateInputType = {
    id?: true
    type_code?: true
    type_name?: true
    title?: true
    theme_sentence?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type PersonalityTypesMaxAggregateInputType = {
    id?: true
    type_code?: true
    type_name?: true
    title?: true
    theme_sentence?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type PersonalityTypesCountAggregateInputType = {
    id?: true
    type_code?: true
    type_name?: true
    title?: true
    theme_sentence?: true
    description?: true
    description_points?: true
    strength_keywords?: true
    weakness_keywords?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PersonalityTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalityTypes to aggregate.
     */
    where?: PersonalityTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalityTypes to fetch.
     */
    orderBy?: PersonalityTypesOrderByWithRelationInput | PersonalityTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalityTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalityTypes
    **/
    _count?: true | PersonalityTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalityTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalityTypesMaxAggregateInputType
  }

  export type GetPersonalityTypesAggregateType<T extends PersonalityTypesAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalityTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalityTypes[P]>
      : GetScalarType<T[P], AggregatePersonalityTypes[P]>
  }




  export type PersonalityTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalityTypesWhereInput
    orderBy?: PersonalityTypesOrderByWithAggregationInput | PersonalityTypesOrderByWithAggregationInput[]
    by: PersonalityTypesScalarFieldEnum[] | PersonalityTypesScalarFieldEnum
    having?: PersonalityTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalityTypesCountAggregateInputType | true
    _min?: PersonalityTypesMinAggregateInputType
    _max?: PersonalityTypesMaxAggregateInputType
  }

  export type PersonalityTypesGroupByOutputType = {
    id: string
    type_code: string
    type_name: string
    title: string
    theme_sentence: string
    description: string
    description_points: JsonValue
    strength_keywords: JsonValue
    weakness_keywords: JsonValue
    created_at: Date
    updated_at: Date
    _count: PersonalityTypesCountAggregateOutputType | null
    _min: PersonalityTypesMinAggregateOutputType | null
    _max: PersonalityTypesMaxAggregateOutputType | null
  }

  type GetPersonalityTypesGroupByPayload<T extends PersonalityTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalityTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalityTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalityTypesGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalityTypesGroupByOutputType[P]>
        }
      >
    >


  export type PersonalityTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_code?: boolean
    type_name?: boolean
    title?: boolean
    theme_sentence?: boolean
    description?: boolean
    description_points?: boolean
    strength_keywords?: boolean
    weakness_keywords?: boolean
    created_at?: boolean
    updated_at?: boolean
    questions?: boolean | PersonalityTypes$questionsArgs<ExtArgs>
    test_results_primary?: boolean | PersonalityTypes$test_results_primaryArgs<ExtArgs>
    _count?: boolean | PersonalityTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalityTypes"]>

  export type PersonalityTypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_code?: boolean
    type_name?: boolean
    title?: boolean
    theme_sentence?: boolean
    description?: boolean
    description_points?: boolean
    strength_keywords?: boolean
    weakness_keywords?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["personalityTypes"]>

  export type PersonalityTypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_code?: boolean
    type_name?: boolean
    title?: boolean
    theme_sentence?: boolean
    description?: boolean
    description_points?: boolean
    strength_keywords?: boolean
    weakness_keywords?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["personalityTypes"]>

  export type PersonalityTypesSelectScalar = {
    id?: boolean
    type_code?: boolean
    type_name?: boolean
    title?: boolean
    theme_sentence?: boolean
    description?: boolean
    description_points?: boolean
    strength_keywords?: boolean
    weakness_keywords?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PersonalityTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type_code" | "type_name" | "title" | "theme_sentence" | "description" | "description_points" | "strength_keywords" | "weakness_keywords" | "created_at" | "updated_at", ExtArgs["result"]["personalityTypes"]>
  export type PersonalityTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | PersonalityTypes$questionsArgs<ExtArgs>
    test_results_primary?: boolean | PersonalityTypes$test_results_primaryArgs<ExtArgs>
    _count?: boolean | PersonalityTypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonalityTypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonalityTypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonalityTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalityTypes"
    objects: {
      questions: Prisma.$QuestionsPayload<ExtArgs>[]
      test_results_primary: Prisma.$TestResultsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type_code: string
      type_name: string
      title: string
      theme_sentence: string
      description: string
      description_points: Prisma.JsonValue
      strength_keywords: Prisma.JsonValue
      weakness_keywords: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["personalityTypes"]>
    composites: {}
  }

  type PersonalityTypesGetPayload<S extends boolean | null | undefined | PersonalityTypesDefaultArgs> = $Result.GetResult<Prisma.$PersonalityTypesPayload, S>

  type PersonalityTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalityTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalityTypesCountAggregateInputType | true
    }

  export interface PersonalityTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalityTypes'], meta: { name: 'PersonalityTypes' } }
    /**
     * Find zero or one PersonalityTypes that matches the filter.
     * @param {PersonalityTypesFindUniqueArgs} args - Arguments to find a PersonalityTypes
     * @example
     * // Get one PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalityTypesFindUniqueArgs>(args: SelectSubset<T, PersonalityTypesFindUniqueArgs<ExtArgs>>): Prisma__PersonalityTypesClient<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalityTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalityTypesFindUniqueOrThrowArgs} args - Arguments to find a PersonalityTypes
     * @example
     * // Get one PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalityTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalityTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalityTypesClient<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalityTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityTypesFindFirstArgs} args - Arguments to find a PersonalityTypes
     * @example
     * // Get one PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalityTypesFindFirstArgs>(args?: SelectSubset<T, PersonalityTypesFindFirstArgs<ExtArgs>>): Prisma__PersonalityTypesClient<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalityTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityTypesFindFirstOrThrowArgs} args - Arguments to find a PersonalityTypes
     * @example
     * // Get one PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalityTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalityTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalityTypesClient<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalityTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.findMany()
     * 
     * // Get first 10 PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalityTypesWithIdOnly = await prisma.personalityTypes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalityTypesFindManyArgs>(args?: SelectSubset<T, PersonalityTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalityTypes.
     * @param {PersonalityTypesCreateArgs} args - Arguments to create a PersonalityTypes.
     * @example
     * // Create one PersonalityTypes
     * const PersonalityTypes = await prisma.personalityTypes.create({
     *   data: {
     *     // ... data to create a PersonalityTypes
     *   }
     * })
     * 
     */
    create<T extends PersonalityTypesCreateArgs>(args: SelectSubset<T, PersonalityTypesCreateArgs<ExtArgs>>): Prisma__PersonalityTypesClient<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalityTypes.
     * @param {PersonalityTypesCreateManyArgs} args - Arguments to create many PersonalityTypes.
     * @example
     * // Create many PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalityTypesCreateManyArgs>(args?: SelectSubset<T, PersonalityTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalityTypes and returns the data saved in the database.
     * @param {PersonalityTypesCreateManyAndReturnArgs} args - Arguments to create many PersonalityTypes.
     * @example
     * // Create many PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalityTypes and only return the `id`
     * const personalityTypesWithIdOnly = await prisma.personalityTypes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalityTypesCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalityTypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalityTypes.
     * @param {PersonalityTypesDeleteArgs} args - Arguments to delete one PersonalityTypes.
     * @example
     * // Delete one PersonalityTypes
     * const PersonalityTypes = await prisma.personalityTypes.delete({
     *   where: {
     *     // ... filter to delete one PersonalityTypes
     *   }
     * })
     * 
     */
    delete<T extends PersonalityTypesDeleteArgs>(args: SelectSubset<T, PersonalityTypesDeleteArgs<ExtArgs>>): Prisma__PersonalityTypesClient<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalityTypes.
     * @param {PersonalityTypesUpdateArgs} args - Arguments to update one PersonalityTypes.
     * @example
     * // Update one PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalityTypesUpdateArgs>(args: SelectSubset<T, PersonalityTypesUpdateArgs<ExtArgs>>): Prisma__PersonalityTypesClient<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalityTypes.
     * @param {PersonalityTypesDeleteManyArgs} args - Arguments to filter PersonalityTypes to delete.
     * @example
     * // Delete a few PersonalityTypes
     * const { count } = await prisma.personalityTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalityTypesDeleteManyArgs>(args?: SelectSubset<T, PersonalityTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalityTypesUpdateManyArgs>(args: SelectSubset<T, PersonalityTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalityTypes and returns the data updated in the database.
     * @param {PersonalityTypesUpdateManyAndReturnArgs} args - Arguments to update many PersonalityTypes.
     * @example
     * // Update many PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalityTypes and only return the `id`
     * const personalityTypesWithIdOnly = await prisma.personalityTypes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalityTypesUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalityTypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalityTypes.
     * @param {PersonalityTypesUpsertArgs} args - Arguments to update or create a PersonalityTypes.
     * @example
     * // Update or create a PersonalityTypes
     * const personalityTypes = await prisma.personalityTypes.upsert({
     *   create: {
     *     // ... data to create a PersonalityTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalityTypes we want to update
     *   }
     * })
     */
    upsert<T extends PersonalityTypesUpsertArgs>(args: SelectSubset<T, PersonalityTypesUpsertArgs<ExtArgs>>): Prisma__PersonalityTypesClient<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityTypesCountArgs} args - Arguments to filter PersonalityTypes to count.
     * @example
     * // Count the number of PersonalityTypes
     * const count = await prisma.personalityTypes.count({
     *   where: {
     *     // ... the filter for the PersonalityTypes we want to count
     *   }
     * })
    **/
    count<T extends PersonalityTypesCountArgs>(
      args?: Subset<T, PersonalityTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalityTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalityTypesAggregateArgs>(args: Subset<T, PersonalityTypesAggregateArgs>): Prisma.PrismaPromise<GetPersonalityTypesAggregateType<T>>

    /**
     * Group by PersonalityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalityTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalityTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalityTypesGroupByArgs['orderBy'] }
        : { orderBy?: PersonalityTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalityTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalityTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalityTypes model
   */
  readonly fields: PersonalityTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalityTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalityTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends PersonalityTypes$questionsArgs<ExtArgs> = {}>(args?: Subset<T, PersonalityTypes$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    test_results_primary<T extends PersonalityTypes$test_results_primaryArgs<ExtArgs> = {}>(args?: Subset<T, PersonalityTypes$test_results_primaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalityTypes model
   */
  interface PersonalityTypesFieldRefs {
    readonly id: FieldRef<"PersonalityTypes", 'String'>
    readonly type_code: FieldRef<"PersonalityTypes", 'String'>
    readonly type_name: FieldRef<"PersonalityTypes", 'String'>
    readonly title: FieldRef<"PersonalityTypes", 'String'>
    readonly theme_sentence: FieldRef<"PersonalityTypes", 'String'>
    readonly description: FieldRef<"PersonalityTypes", 'String'>
    readonly description_points: FieldRef<"PersonalityTypes", 'Json'>
    readonly strength_keywords: FieldRef<"PersonalityTypes", 'Json'>
    readonly weakness_keywords: FieldRef<"PersonalityTypes", 'Json'>
    readonly created_at: FieldRef<"PersonalityTypes", 'DateTime'>
    readonly updated_at: FieldRef<"PersonalityTypes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PersonalityTypes findUnique
   */
  export type PersonalityTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
    /**
     * Filter, which PersonalityTypes to fetch.
     */
    where: PersonalityTypesWhereUniqueInput
  }

  /**
   * PersonalityTypes findUniqueOrThrow
   */
  export type PersonalityTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
    /**
     * Filter, which PersonalityTypes to fetch.
     */
    where: PersonalityTypesWhereUniqueInput
  }

  /**
   * PersonalityTypes findFirst
   */
  export type PersonalityTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
    /**
     * Filter, which PersonalityTypes to fetch.
     */
    where?: PersonalityTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalityTypes to fetch.
     */
    orderBy?: PersonalityTypesOrderByWithRelationInput | PersonalityTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalityTypes.
     */
    cursor?: PersonalityTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalityTypes.
     */
    distinct?: PersonalityTypesScalarFieldEnum | PersonalityTypesScalarFieldEnum[]
  }

  /**
   * PersonalityTypes findFirstOrThrow
   */
  export type PersonalityTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
    /**
     * Filter, which PersonalityTypes to fetch.
     */
    where?: PersonalityTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalityTypes to fetch.
     */
    orderBy?: PersonalityTypesOrderByWithRelationInput | PersonalityTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalityTypes.
     */
    cursor?: PersonalityTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalityTypes.
     */
    distinct?: PersonalityTypesScalarFieldEnum | PersonalityTypesScalarFieldEnum[]
  }

  /**
   * PersonalityTypes findMany
   */
  export type PersonalityTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
    /**
     * Filter, which PersonalityTypes to fetch.
     */
    where?: PersonalityTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalityTypes to fetch.
     */
    orderBy?: PersonalityTypesOrderByWithRelationInput | PersonalityTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalityTypes.
     */
    cursor?: PersonalityTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalityTypes.
     */
    skip?: number
    distinct?: PersonalityTypesScalarFieldEnum | PersonalityTypesScalarFieldEnum[]
  }

  /**
   * PersonalityTypes create
   */
  export type PersonalityTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalityTypes.
     */
    data: XOR<PersonalityTypesCreateInput, PersonalityTypesUncheckedCreateInput>
  }

  /**
   * PersonalityTypes createMany
   */
  export type PersonalityTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalityTypes.
     */
    data: PersonalityTypesCreateManyInput | PersonalityTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalityTypes createManyAndReturn
   */
  export type PersonalityTypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalityTypes.
     */
    data: PersonalityTypesCreateManyInput | PersonalityTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalityTypes update
   */
  export type PersonalityTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalityTypes.
     */
    data: XOR<PersonalityTypesUpdateInput, PersonalityTypesUncheckedUpdateInput>
    /**
     * Choose, which PersonalityTypes to update.
     */
    where: PersonalityTypesWhereUniqueInput
  }

  /**
   * PersonalityTypes updateMany
   */
  export type PersonalityTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalityTypes.
     */
    data: XOR<PersonalityTypesUpdateManyMutationInput, PersonalityTypesUncheckedUpdateManyInput>
    /**
     * Filter which PersonalityTypes to update
     */
    where?: PersonalityTypesWhereInput
    /**
     * Limit how many PersonalityTypes to update.
     */
    limit?: number
  }

  /**
   * PersonalityTypes updateManyAndReturn
   */
  export type PersonalityTypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * The data used to update PersonalityTypes.
     */
    data: XOR<PersonalityTypesUpdateManyMutationInput, PersonalityTypesUncheckedUpdateManyInput>
    /**
     * Filter which PersonalityTypes to update
     */
    where?: PersonalityTypesWhereInput
    /**
     * Limit how many PersonalityTypes to update.
     */
    limit?: number
  }

  /**
   * PersonalityTypes upsert
   */
  export type PersonalityTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalityTypes to update in case it exists.
     */
    where: PersonalityTypesWhereUniqueInput
    /**
     * In case the PersonalityTypes found by the `where` argument doesn't exist, create a new PersonalityTypes with this data.
     */
    create: XOR<PersonalityTypesCreateInput, PersonalityTypesUncheckedCreateInput>
    /**
     * In case the PersonalityTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalityTypesUpdateInput, PersonalityTypesUncheckedUpdateInput>
  }

  /**
   * PersonalityTypes delete
   */
  export type PersonalityTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
    /**
     * Filter which PersonalityTypes to delete.
     */
    where: PersonalityTypesWhereUniqueInput
  }

  /**
   * PersonalityTypes deleteMany
   */
  export type PersonalityTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalityTypes to delete
     */
    where?: PersonalityTypesWhereInput
    /**
     * Limit how many PersonalityTypes to delete.
     */
    limit?: number
  }

  /**
   * PersonalityTypes.questions
   */
  export type PersonalityTypes$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    cursor?: QuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * PersonalityTypes.test_results_primary
   */
  export type PersonalityTypes$test_results_primaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    where?: TestResultsWhereInput
    orderBy?: TestResultsOrderByWithRelationInput | TestResultsOrderByWithRelationInput[]
    cursor?: TestResultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestResultsScalarFieldEnum | TestResultsScalarFieldEnum[]
  }

  /**
   * PersonalityTypes without action
   */
  export type PersonalityTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
  }


  /**
   * Model Questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    id: number | null
    question_order_in_type: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    id: number | null
    question_order_in_type: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: number | null
    personality_type_id: string | null
    question_text: string | null
    question_order_in_type: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: number | null
    personality_type_id: string | null
    question_text: string | null
    question_order_in_type: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    personality_type_id: number
    question_text: number
    question_order_in_type: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    id?: true
    question_order_in_type?: true
  }

  export type QuestionsSumAggregateInputType = {
    id?: true
    question_order_in_type?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    personality_type_id?: true
    question_text?: true
    question_order_in_type?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    personality_type_id?: true
    question_text?: true
    question_order_in_type?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    personality_type_id?: true
    question_text?: true
    question_order_in_type?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to aggregate.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type QuestionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithAggregationInput | QuestionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: QuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: number
    personality_type_id: string
    question_text: string
    question_order_in_type: number
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends QuestionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type QuestionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personality_type_id?: boolean
    question_text?: boolean
    question_order_in_type?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    personality_type?: boolean | PersonalityTypesDefaultArgs<ExtArgs>
    user_answers?: boolean | Questions$user_answersArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personality_type_id?: boolean
    question_text?: boolean
    question_order_in_type?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    personality_type?: boolean | PersonalityTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personality_type_id?: boolean
    question_text?: boolean
    question_order_in_type?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    personality_type?: boolean | PersonalityTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>

  export type QuestionsSelectScalar = {
    id?: boolean
    personality_type_id?: boolean
    question_text?: boolean
    question_order_in_type?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type QuestionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personality_type_id" | "question_text" | "question_order_in_type" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["questions"]>
  export type QuestionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personality_type?: boolean | PersonalityTypesDefaultArgs<ExtArgs>
    user_answers?: boolean | Questions$user_answersArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personality_type?: boolean | PersonalityTypesDefaultArgs<ExtArgs>
  }
  export type QuestionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personality_type?: boolean | PersonalityTypesDefaultArgs<ExtArgs>
  }

  export type $QuestionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questions"
    objects: {
      personality_type: Prisma.$PersonalityTypesPayload<ExtArgs>
      user_answers: Prisma.$UserAnswersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      personality_type_id: string
      question_text: string
      question_order_in_type: number
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type QuestionsGetPayload<S extends boolean | null | undefined | QuestionsDefaultArgs> = $Result.GetResult<Prisma.$QuestionsPayload, S>

  type QuestionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface QuestionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questions'], meta: { name: 'Questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {QuestionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionsFindUniqueArgs>(args: SelectSubset<T, QuestionsFindUniqueArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionsFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionsFindFirstArgs>(args?: SelectSubset<T, QuestionsFindFirstArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionsFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionsFindManyArgs>(args?: SelectSubset<T, QuestionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {QuestionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends QuestionsCreateArgs>(args: SelectSubset<T, QuestionsCreateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionsCreateManyArgs>(args?: SelectSubset<T, QuestionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionsCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionsCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Questions.
     * @param {QuestionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends QuestionsDeleteArgs>(args: SelectSubset<T, QuestionsDeleteArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {QuestionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionsUpdateArgs>(args: SelectSubset<T, QuestionsUpdateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionsDeleteManyArgs>(args?: SelectSubset<T, QuestionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionsUpdateManyArgs>(args: SelectSubset<T, QuestionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionsUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionsWithIdOnly = await prisma.questions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionsUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Questions.
     * @param {QuestionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends QuestionsUpsertArgs>(args: SelectSubset<T, QuestionsUpsertArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionsCountArgs>(
      args?: Subset<T, QuestionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionsGroupByArgs['orderBy'] }
        : { orderBy?: QuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questions model
   */
  readonly fields: QuestionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personality_type<T extends PersonalityTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalityTypesDefaultArgs<ExtArgs>>): Prisma__PersonalityTypesClient<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_answers<T extends Questions$user_answersArgs<ExtArgs> = {}>(args?: Subset<T, Questions$user_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Questions model
   */
  interface QuestionsFieldRefs {
    readonly id: FieldRef<"Questions", 'Int'>
    readonly personality_type_id: FieldRef<"Questions", 'String'>
    readonly question_text: FieldRef<"Questions", 'String'>
    readonly question_order_in_type: FieldRef<"Questions", 'Int'>
    readonly is_active: FieldRef<"Questions", 'Boolean'>
    readonly created_at: FieldRef<"Questions", 'DateTime'>
    readonly updated_at: FieldRef<"Questions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Questions findUnique
   */
  export type QuestionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findUniqueOrThrow
   */
  export type QuestionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findFirst
   */
  export type QuestionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findFirstOrThrow
   */
  export type QuestionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findMany
   */
  export type QuestionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions create
   */
  export type QuestionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Questions.
     */
    data: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
  }

  /**
   * Questions createMany
   */
  export type QuestionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Questions createManyAndReturn
   */
  export type QuestionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Questions update
   */
  export type QuestionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Questions.
     */
    data: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
    /**
     * Choose, which Questions to update.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions updateMany
   */
  export type QuestionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Questions updateManyAndReturn
   */
  export type QuestionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Questions upsert
   */
  export type QuestionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Questions to update in case it exists.
     */
    where: QuestionsWhereUniqueInput
    /**
     * In case the Questions found by the `where` argument doesn't exist, create a new Questions with this data.
     */
    create: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
    /**
     * In case the Questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
  }

  /**
   * Questions delete
   */
  export type QuestionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter which Questions to delete.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions deleteMany
   */
  export type QuestionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionsWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Questions.user_answers
   */
  export type Questions$user_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    where?: UserAnswersWhereInput
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    cursor?: UserAnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * Questions without action
   */
  export type QuestionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
  }


  /**
   * Model TestAttempts
   */

  export type AggregateTestAttempts = {
    _count: TestAttemptsCountAggregateOutputType | null
    _avg: TestAttemptsAvgAggregateOutputType | null
    _sum: TestAttemptsSumAggregateOutputType | null
    _min: TestAttemptsMinAggregateOutputType | null
    _max: TestAttemptsMaxAggregateOutputType | null
  }

  export type TestAttemptsAvgAggregateOutputType = {
    completion_time: number | null
  }

  export type TestAttemptsSumAggregateOutputType = {
    completion_time: number | null
  }

  export type TestAttemptsMinAggregateOutputType = {
    id: string | null
    session_id: string | null
    user_name: string | null
    user_email: string | null
    ip_address: string | null
    user_agent: string | null
    is_completed: boolean | null
    completion_time: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TestAttemptsMaxAggregateOutputType = {
    id: string | null
    session_id: string | null
    user_name: string | null
    user_email: string | null
    ip_address: string | null
    user_agent: string | null
    is_completed: boolean | null
    completion_time: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TestAttemptsCountAggregateOutputType = {
    id: number
    session_id: number
    user_name: number
    user_email: number
    ip_address: number
    user_agent: number
    is_completed: number
    completion_time: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TestAttemptsAvgAggregateInputType = {
    completion_time?: true
  }

  export type TestAttemptsSumAggregateInputType = {
    completion_time?: true
  }

  export type TestAttemptsMinAggregateInputType = {
    id?: true
    session_id?: true
    user_name?: true
    user_email?: true
    ip_address?: true
    user_agent?: true
    is_completed?: true
    completion_time?: true
    created_at?: true
    updated_at?: true
  }

  export type TestAttemptsMaxAggregateInputType = {
    id?: true
    session_id?: true
    user_name?: true
    user_email?: true
    ip_address?: true
    user_agent?: true
    is_completed?: true
    completion_time?: true
    created_at?: true
    updated_at?: true
  }

  export type TestAttemptsCountAggregateInputType = {
    id?: true
    session_id?: true
    user_name?: true
    user_email?: true
    ip_address?: true
    user_agent?: true
    is_completed?: true
    completion_time?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TestAttemptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestAttempts to aggregate.
     */
    where?: TestAttemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAttempts to fetch.
     */
    orderBy?: TestAttemptsOrderByWithRelationInput | TestAttemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestAttemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestAttempts
    **/
    _count?: true | TestAttemptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAttemptsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestAttemptsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestAttemptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestAttemptsMaxAggregateInputType
  }

  export type GetTestAttemptsAggregateType<T extends TestAttemptsAggregateArgs> = {
        [P in keyof T & keyof AggregateTestAttempts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestAttempts[P]>
      : GetScalarType<T[P], AggregateTestAttempts[P]>
  }




  export type TestAttemptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestAttemptsWhereInput
    orderBy?: TestAttemptsOrderByWithAggregationInput | TestAttemptsOrderByWithAggregationInput[]
    by: TestAttemptsScalarFieldEnum[] | TestAttemptsScalarFieldEnum
    having?: TestAttemptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestAttemptsCountAggregateInputType | true
    _avg?: TestAttemptsAvgAggregateInputType
    _sum?: TestAttemptsSumAggregateInputType
    _min?: TestAttemptsMinAggregateInputType
    _max?: TestAttemptsMaxAggregateInputType
  }

  export type TestAttemptsGroupByOutputType = {
    id: string
    session_id: string | null
    user_name: string | null
    user_email: string | null
    ip_address: string | null
    user_agent: string | null
    is_completed: boolean
    completion_time: number | null
    created_at: Date
    updated_at: Date
    _count: TestAttemptsCountAggregateOutputType | null
    _avg: TestAttemptsAvgAggregateOutputType | null
    _sum: TestAttemptsSumAggregateOutputType | null
    _min: TestAttemptsMinAggregateOutputType | null
    _max: TestAttemptsMaxAggregateOutputType | null
  }

  type GetTestAttemptsGroupByPayload<T extends TestAttemptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestAttemptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestAttemptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestAttemptsGroupByOutputType[P]>
            : GetScalarType<T[P], TestAttemptsGroupByOutputType[P]>
        }
      >
    >


  export type TestAttemptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    user_name?: boolean
    user_email?: boolean
    ip_address?: boolean
    user_agent?: boolean
    is_completed?: boolean
    completion_time?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_answers?: boolean | TestAttempts$user_answersArgs<ExtArgs>
    test_result?: boolean | TestAttempts$test_resultArgs<ExtArgs>
    _count?: boolean | TestAttemptsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testAttempts"]>

  export type TestAttemptsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    user_name?: boolean
    user_email?: boolean
    ip_address?: boolean
    user_agent?: boolean
    is_completed?: boolean
    completion_time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["testAttempts"]>

  export type TestAttemptsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    user_name?: boolean
    user_email?: boolean
    ip_address?: boolean
    user_agent?: boolean
    is_completed?: boolean
    completion_time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["testAttempts"]>

  export type TestAttemptsSelectScalar = {
    id?: boolean
    session_id?: boolean
    user_name?: boolean
    user_email?: boolean
    ip_address?: boolean
    user_agent?: boolean
    is_completed?: boolean
    completion_time?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TestAttemptsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_id" | "user_name" | "user_email" | "ip_address" | "user_agent" | "is_completed" | "completion_time" | "created_at" | "updated_at", ExtArgs["result"]["testAttempts"]>
  export type TestAttemptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_answers?: boolean | TestAttempts$user_answersArgs<ExtArgs>
    test_result?: boolean | TestAttempts$test_resultArgs<ExtArgs>
    _count?: boolean | TestAttemptsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestAttemptsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TestAttemptsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TestAttemptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestAttempts"
    objects: {
      user_answers: Prisma.$UserAnswersPayload<ExtArgs>[]
      test_result: Prisma.$TestResultsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      session_id: string | null
      user_name: string | null
      user_email: string | null
      ip_address: string | null
      user_agent: string | null
      is_completed: boolean
      completion_time: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["testAttempts"]>
    composites: {}
  }

  type TestAttemptsGetPayload<S extends boolean | null | undefined | TestAttemptsDefaultArgs> = $Result.GetResult<Prisma.$TestAttemptsPayload, S>

  type TestAttemptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestAttemptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestAttemptsCountAggregateInputType | true
    }

  export interface TestAttemptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestAttempts'], meta: { name: 'TestAttempts' } }
    /**
     * Find zero or one TestAttempts that matches the filter.
     * @param {TestAttemptsFindUniqueArgs} args - Arguments to find a TestAttempts
     * @example
     * // Get one TestAttempts
     * const testAttempts = await prisma.testAttempts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestAttemptsFindUniqueArgs>(args: SelectSubset<T, TestAttemptsFindUniqueArgs<ExtArgs>>): Prisma__TestAttemptsClient<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestAttempts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestAttemptsFindUniqueOrThrowArgs} args - Arguments to find a TestAttempts
     * @example
     * // Get one TestAttempts
     * const testAttempts = await prisma.testAttempts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestAttemptsFindUniqueOrThrowArgs>(args: SelectSubset<T, TestAttemptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestAttemptsClient<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptsFindFirstArgs} args - Arguments to find a TestAttempts
     * @example
     * // Get one TestAttempts
     * const testAttempts = await prisma.testAttempts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestAttemptsFindFirstArgs>(args?: SelectSubset<T, TestAttemptsFindFirstArgs<ExtArgs>>): Prisma__TestAttemptsClient<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestAttempts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptsFindFirstOrThrowArgs} args - Arguments to find a TestAttempts
     * @example
     * // Get one TestAttempts
     * const testAttempts = await prisma.testAttempts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestAttemptsFindFirstOrThrowArgs>(args?: SelectSubset<T, TestAttemptsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestAttemptsClient<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestAttempts
     * const testAttempts = await prisma.testAttempts.findMany()
     * 
     * // Get first 10 TestAttempts
     * const testAttempts = await prisma.testAttempts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testAttemptsWithIdOnly = await prisma.testAttempts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestAttemptsFindManyArgs>(args?: SelectSubset<T, TestAttemptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestAttempts.
     * @param {TestAttemptsCreateArgs} args - Arguments to create a TestAttempts.
     * @example
     * // Create one TestAttempts
     * const TestAttempts = await prisma.testAttempts.create({
     *   data: {
     *     // ... data to create a TestAttempts
     *   }
     * })
     * 
     */
    create<T extends TestAttemptsCreateArgs>(args: SelectSubset<T, TestAttemptsCreateArgs<ExtArgs>>): Prisma__TestAttemptsClient<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestAttempts.
     * @param {TestAttemptsCreateManyArgs} args - Arguments to create many TestAttempts.
     * @example
     * // Create many TestAttempts
     * const testAttempts = await prisma.testAttempts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestAttemptsCreateManyArgs>(args?: SelectSubset<T, TestAttemptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestAttempts and returns the data saved in the database.
     * @param {TestAttemptsCreateManyAndReturnArgs} args - Arguments to create many TestAttempts.
     * @example
     * // Create many TestAttempts
     * const testAttempts = await prisma.testAttempts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestAttempts and only return the `id`
     * const testAttemptsWithIdOnly = await prisma.testAttempts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestAttemptsCreateManyAndReturnArgs>(args?: SelectSubset<T, TestAttemptsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestAttempts.
     * @param {TestAttemptsDeleteArgs} args - Arguments to delete one TestAttempts.
     * @example
     * // Delete one TestAttempts
     * const TestAttempts = await prisma.testAttempts.delete({
     *   where: {
     *     // ... filter to delete one TestAttempts
     *   }
     * })
     * 
     */
    delete<T extends TestAttemptsDeleteArgs>(args: SelectSubset<T, TestAttemptsDeleteArgs<ExtArgs>>): Prisma__TestAttemptsClient<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestAttempts.
     * @param {TestAttemptsUpdateArgs} args - Arguments to update one TestAttempts.
     * @example
     * // Update one TestAttempts
     * const testAttempts = await prisma.testAttempts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestAttemptsUpdateArgs>(args: SelectSubset<T, TestAttemptsUpdateArgs<ExtArgs>>): Prisma__TestAttemptsClient<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestAttempts.
     * @param {TestAttemptsDeleteManyArgs} args - Arguments to filter TestAttempts to delete.
     * @example
     * // Delete a few TestAttempts
     * const { count } = await prisma.testAttempts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestAttemptsDeleteManyArgs>(args?: SelectSubset<T, TestAttemptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestAttempts
     * const testAttempts = await prisma.testAttempts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestAttemptsUpdateManyArgs>(args: SelectSubset<T, TestAttemptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestAttempts and returns the data updated in the database.
     * @param {TestAttemptsUpdateManyAndReturnArgs} args - Arguments to update many TestAttempts.
     * @example
     * // Update many TestAttempts
     * const testAttempts = await prisma.testAttempts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestAttempts and only return the `id`
     * const testAttemptsWithIdOnly = await prisma.testAttempts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestAttemptsUpdateManyAndReturnArgs>(args: SelectSubset<T, TestAttemptsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestAttempts.
     * @param {TestAttemptsUpsertArgs} args - Arguments to update or create a TestAttempts.
     * @example
     * // Update or create a TestAttempts
     * const testAttempts = await prisma.testAttempts.upsert({
     *   create: {
     *     // ... data to create a TestAttempts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestAttempts we want to update
     *   }
     * })
     */
    upsert<T extends TestAttemptsUpsertArgs>(args: SelectSubset<T, TestAttemptsUpsertArgs<ExtArgs>>): Prisma__TestAttemptsClient<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptsCountArgs} args - Arguments to filter TestAttempts to count.
     * @example
     * // Count the number of TestAttempts
     * const count = await prisma.testAttempts.count({
     *   where: {
     *     // ... the filter for the TestAttempts we want to count
     *   }
     * })
    **/
    count<T extends TestAttemptsCountArgs>(
      args?: Subset<T, TestAttemptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestAttemptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAttemptsAggregateArgs>(args: Subset<T, TestAttemptsAggregateArgs>): Prisma.PrismaPromise<GetTestAttemptsAggregateType<T>>

    /**
     * Group by TestAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAttemptsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestAttemptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestAttemptsGroupByArgs['orderBy'] }
        : { orderBy?: TestAttemptsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestAttemptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestAttemptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestAttempts model
   */
  readonly fields: TestAttemptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestAttempts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestAttemptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_answers<T extends TestAttempts$user_answersArgs<ExtArgs> = {}>(args?: Subset<T, TestAttempts$user_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    test_result<T extends TestAttempts$test_resultArgs<ExtArgs> = {}>(args?: Subset<T, TestAttempts$test_resultArgs<ExtArgs>>): Prisma__TestResultsClient<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestAttempts model
   */
  interface TestAttemptsFieldRefs {
    readonly id: FieldRef<"TestAttempts", 'String'>
    readonly session_id: FieldRef<"TestAttempts", 'String'>
    readonly user_name: FieldRef<"TestAttempts", 'String'>
    readonly user_email: FieldRef<"TestAttempts", 'String'>
    readonly ip_address: FieldRef<"TestAttempts", 'String'>
    readonly user_agent: FieldRef<"TestAttempts", 'String'>
    readonly is_completed: FieldRef<"TestAttempts", 'Boolean'>
    readonly completion_time: FieldRef<"TestAttempts", 'Int'>
    readonly created_at: FieldRef<"TestAttempts", 'DateTime'>
    readonly updated_at: FieldRef<"TestAttempts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestAttempts findUnique
   */
  export type TestAttemptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptsInclude<ExtArgs> | null
    /**
     * Filter, which TestAttempts to fetch.
     */
    where: TestAttemptsWhereUniqueInput
  }

  /**
   * TestAttempts findUniqueOrThrow
   */
  export type TestAttemptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptsInclude<ExtArgs> | null
    /**
     * Filter, which TestAttempts to fetch.
     */
    where: TestAttemptsWhereUniqueInput
  }

  /**
   * TestAttempts findFirst
   */
  export type TestAttemptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptsInclude<ExtArgs> | null
    /**
     * Filter, which TestAttempts to fetch.
     */
    where?: TestAttemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAttempts to fetch.
     */
    orderBy?: TestAttemptsOrderByWithRelationInput | TestAttemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestAttempts.
     */
    cursor?: TestAttemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestAttempts.
     */
    distinct?: TestAttemptsScalarFieldEnum | TestAttemptsScalarFieldEnum[]
  }

  /**
   * TestAttempts findFirstOrThrow
   */
  export type TestAttemptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptsInclude<ExtArgs> | null
    /**
     * Filter, which TestAttempts to fetch.
     */
    where?: TestAttemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAttempts to fetch.
     */
    orderBy?: TestAttemptsOrderByWithRelationInput | TestAttemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestAttempts.
     */
    cursor?: TestAttemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestAttempts.
     */
    distinct?: TestAttemptsScalarFieldEnum | TestAttemptsScalarFieldEnum[]
  }

  /**
   * TestAttempts findMany
   */
  export type TestAttemptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptsInclude<ExtArgs> | null
    /**
     * Filter, which TestAttempts to fetch.
     */
    where?: TestAttemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestAttempts to fetch.
     */
    orderBy?: TestAttemptsOrderByWithRelationInput | TestAttemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestAttempts.
     */
    cursor?: TestAttemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestAttempts.
     */
    skip?: number
    distinct?: TestAttemptsScalarFieldEnum | TestAttemptsScalarFieldEnum[]
  }

  /**
   * TestAttempts create
   */
  export type TestAttemptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptsInclude<ExtArgs> | null
    /**
     * The data needed to create a TestAttempts.
     */
    data: XOR<TestAttemptsCreateInput, TestAttemptsUncheckedCreateInput>
  }

  /**
   * TestAttempts createMany
   */
  export type TestAttemptsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestAttempts.
     */
    data: TestAttemptsCreateManyInput | TestAttemptsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestAttempts createManyAndReturn
   */
  export type TestAttemptsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * The data used to create many TestAttempts.
     */
    data: TestAttemptsCreateManyInput | TestAttemptsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestAttempts update
   */
  export type TestAttemptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptsInclude<ExtArgs> | null
    /**
     * The data needed to update a TestAttempts.
     */
    data: XOR<TestAttemptsUpdateInput, TestAttemptsUncheckedUpdateInput>
    /**
     * Choose, which TestAttempts to update.
     */
    where: TestAttemptsWhereUniqueInput
  }

  /**
   * TestAttempts updateMany
   */
  export type TestAttemptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestAttempts.
     */
    data: XOR<TestAttemptsUpdateManyMutationInput, TestAttemptsUncheckedUpdateManyInput>
    /**
     * Filter which TestAttempts to update
     */
    where?: TestAttemptsWhereInput
    /**
     * Limit how many TestAttempts to update.
     */
    limit?: number
  }

  /**
   * TestAttempts updateManyAndReturn
   */
  export type TestAttemptsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * The data used to update TestAttempts.
     */
    data: XOR<TestAttemptsUpdateManyMutationInput, TestAttemptsUncheckedUpdateManyInput>
    /**
     * Filter which TestAttempts to update
     */
    where?: TestAttemptsWhereInput
    /**
     * Limit how many TestAttempts to update.
     */
    limit?: number
  }

  /**
   * TestAttempts upsert
   */
  export type TestAttemptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptsInclude<ExtArgs> | null
    /**
     * The filter to search for the TestAttempts to update in case it exists.
     */
    where: TestAttemptsWhereUniqueInput
    /**
     * In case the TestAttempts found by the `where` argument doesn't exist, create a new TestAttempts with this data.
     */
    create: XOR<TestAttemptsCreateInput, TestAttemptsUncheckedCreateInput>
    /**
     * In case the TestAttempts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestAttemptsUpdateInput, TestAttemptsUncheckedUpdateInput>
  }

  /**
   * TestAttempts delete
   */
  export type TestAttemptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptsInclude<ExtArgs> | null
    /**
     * Filter which TestAttempts to delete.
     */
    where: TestAttemptsWhereUniqueInput
  }

  /**
   * TestAttempts deleteMany
   */
  export type TestAttemptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestAttempts to delete
     */
    where?: TestAttemptsWhereInput
    /**
     * Limit how many TestAttempts to delete.
     */
    limit?: number
  }

  /**
   * TestAttempts.user_answers
   */
  export type TestAttempts$user_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    where?: UserAnswersWhereInput
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    cursor?: UserAnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * TestAttempts.test_result
   */
  export type TestAttempts$test_resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    where?: TestResultsWhereInput
  }

  /**
   * TestAttempts without action
   */
  export type TestAttemptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestAttempts
     */
    select?: TestAttemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestAttempts
     */
    omit?: TestAttemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestAttemptsInclude<ExtArgs> | null
  }


  /**
   * Model UserAnswers
   */

  export type AggregateUserAnswers = {
    _count: UserAnswersCountAggregateOutputType | null
    _avg: UserAnswersAvgAggregateOutputType | null
    _sum: UserAnswersSumAggregateOutputType | null
    _min: UserAnswersMinAggregateOutputType | null
    _max: UserAnswersMaxAggregateOutputType | null
  }

  export type UserAnswersAvgAggregateOutputType = {
    question_id: number | null
    score: number | null
    answer_time: number | null
  }

  export type UserAnswersSumAggregateOutputType = {
    question_id: number | null
    score: number | null
    answer_time: number | null
  }

  export type UserAnswersMinAggregateOutputType = {
    id: string | null
    test_attempt_id: string | null
    question_id: number | null
    answer_option: string | null
    score: number | null
    answer_time: number | null
    created_at: Date | null
  }

  export type UserAnswersMaxAggregateOutputType = {
    id: string | null
    test_attempt_id: string | null
    question_id: number | null
    answer_option: string | null
    score: number | null
    answer_time: number | null
    created_at: Date | null
  }

  export type UserAnswersCountAggregateOutputType = {
    id: number
    test_attempt_id: number
    question_id: number
    answer_option: number
    score: number
    answer_time: number
    created_at: number
    _all: number
  }


  export type UserAnswersAvgAggregateInputType = {
    question_id?: true
    score?: true
    answer_time?: true
  }

  export type UserAnswersSumAggregateInputType = {
    question_id?: true
    score?: true
    answer_time?: true
  }

  export type UserAnswersMinAggregateInputType = {
    id?: true
    test_attempt_id?: true
    question_id?: true
    answer_option?: true
    score?: true
    answer_time?: true
    created_at?: true
  }

  export type UserAnswersMaxAggregateInputType = {
    id?: true
    test_attempt_id?: true
    question_id?: true
    answer_option?: true
    score?: true
    answer_time?: true
    created_at?: true
  }

  export type UserAnswersCountAggregateInputType = {
    id?: true
    test_attempt_id?: true
    question_id?: true
    answer_option?: true
    score?: true
    answer_time?: true
    created_at?: true
    _all?: true
  }

  export type UserAnswersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnswers to aggregate.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAnswers
    **/
    _count?: true | UserAnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAnswersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAnswersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAnswersMaxAggregateInputType
  }

  export type GetUserAnswersAggregateType<T extends UserAnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAnswers[P]>
      : GetScalarType<T[P], AggregateUserAnswers[P]>
  }




  export type UserAnswersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswersWhereInput
    orderBy?: UserAnswersOrderByWithAggregationInput | UserAnswersOrderByWithAggregationInput[]
    by: UserAnswersScalarFieldEnum[] | UserAnswersScalarFieldEnum
    having?: UserAnswersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAnswersCountAggregateInputType | true
    _avg?: UserAnswersAvgAggregateInputType
    _sum?: UserAnswersSumAggregateInputType
    _min?: UserAnswersMinAggregateInputType
    _max?: UserAnswersMaxAggregateInputType
  }

  export type UserAnswersGroupByOutputType = {
    id: string
    test_attempt_id: string
    question_id: number
    answer_option: string | null
    score: number
    answer_time: number | null
    created_at: Date
    _count: UserAnswersCountAggregateOutputType | null
    _avg: UserAnswersAvgAggregateOutputType | null
    _sum: UserAnswersSumAggregateOutputType | null
    _min: UserAnswersMinAggregateOutputType | null
    _max: UserAnswersMaxAggregateOutputType | null
  }

  type GetUserAnswersGroupByPayload<T extends UserAnswersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAnswersGroupByOutputType[P]>
            : GetScalarType<T[P], UserAnswersGroupByOutputType[P]>
        }
      >
    >


  export type UserAnswersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    test_attempt_id?: boolean
    question_id?: boolean
    answer_option?: boolean
    score?: boolean
    answer_time?: boolean
    created_at?: boolean
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswers"]>

  export type UserAnswersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    test_attempt_id?: boolean
    question_id?: boolean
    answer_option?: boolean
    score?: boolean
    answer_time?: boolean
    created_at?: boolean
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswers"]>

  export type UserAnswersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    test_attempt_id?: boolean
    question_id?: boolean
    answer_option?: boolean
    score?: boolean
    answer_time?: boolean
    created_at?: boolean
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswers"]>

  export type UserAnswersSelectScalar = {
    id?: boolean
    test_attempt_id?: boolean
    question_id?: boolean
    answer_option?: boolean
    score?: boolean
    answer_time?: boolean
    created_at?: boolean
  }

  export type UserAnswersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "test_attempt_id" | "question_id" | "answer_option" | "score" | "answer_time" | "created_at", ExtArgs["result"]["userAnswers"]>
  export type UserAnswersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }
  export type UserAnswersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }
  export type UserAnswersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    question?: boolean | QuestionsDefaultArgs<ExtArgs>
  }

  export type $UserAnswersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAnswers"
    objects: {
      test_attempt: Prisma.$TestAttemptsPayload<ExtArgs>
      question: Prisma.$QuestionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      test_attempt_id: string
      question_id: number
      answer_option: string | null
      score: number
      answer_time: number | null
      created_at: Date
    }, ExtArgs["result"]["userAnswers"]>
    composites: {}
  }

  type UserAnswersGetPayload<S extends boolean | null | undefined | UserAnswersDefaultArgs> = $Result.GetResult<Prisma.$UserAnswersPayload, S>

  type UserAnswersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAnswersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAnswersCountAggregateInputType | true
    }

  export interface UserAnswersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAnswers'], meta: { name: 'UserAnswers' } }
    /**
     * Find zero or one UserAnswers that matches the filter.
     * @param {UserAnswersFindUniqueArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAnswersFindUniqueArgs>(args: SelectSubset<T, UserAnswersFindUniqueArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAnswers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAnswersFindUniqueOrThrowArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAnswersFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAnswersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindFirstArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAnswersFindFirstArgs>(args?: SelectSubset<T, UserAnswersFindFirstArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnswers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindFirstOrThrowArgs} args - Arguments to find a UserAnswers
     * @example
     * // Get one UserAnswers
     * const userAnswers = await prisma.userAnswers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAnswersFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAnswersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAnswers
     * const userAnswers = await prisma.userAnswers.findMany()
     * 
     * // Get first 10 UserAnswers
     * const userAnswers = await prisma.userAnswers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAnswersWithIdOnly = await prisma.userAnswers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAnswersFindManyArgs>(args?: SelectSubset<T, UserAnswersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAnswers.
     * @param {UserAnswersCreateArgs} args - Arguments to create a UserAnswers.
     * @example
     * // Create one UserAnswers
     * const UserAnswers = await prisma.userAnswers.create({
     *   data: {
     *     // ... data to create a UserAnswers
     *   }
     * })
     * 
     */
    create<T extends UserAnswersCreateArgs>(args: SelectSubset<T, UserAnswersCreateArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAnswers.
     * @param {UserAnswersCreateManyArgs} args - Arguments to create many UserAnswers.
     * @example
     * // Create many UserAnswers
     * const userAnswers = await prisma.userAnswers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAnswersCreateManyArgs>(args?: SelectSubset<T, UserAnswersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAnswers and returns the data saved in the database.
     * @param {UserAnswersCreateManyAndReturnArgs} args - Arguments to create many UserAnswers.
     * @example
     * // Create many UserAnswers
     * const userAnswers = await prisma.userAnswers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAnswers and only return the `id`
     * const userAnswersWithIdOnly = await prisma.userAnswers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAnswersCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAnswersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAnswers.
     * @param {UserAnswersDeleteArgs} args - Arguments to delete one UserAnswers.
     * @example
     * // Delete one UserAnswers
     * const UserAnswers = await prisma.userAnswers.delete({
     *   where: {
     *     // ... filter to delete one UserAnswers
     *   }
     * })
     * 
     */
    delete<T extends UserAnswersDeleteArgs>(args: SelectSubset<T, UserAnswersDeleteArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAnswers.
     * @param {UserAnswersUpdateArgs} args - Arguments to update one UserAnswers.
     * @example
     * // Update one UserAnswers
     * const userAnswers = await prisma.userAnswers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAnswersUpdateArgs>(args: SelectSubset<T, UserAnswersUpdateArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAnswers.
     * @param {UserAnswersDeleteManyArgs} args - Arguments to filter UserAnswers to delete.
     * @example
     * // Delete a few UserAnswers
     * const { count } = await prisma.userAnswers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAnswersDeleteManyArgs>(args?: SelectSubset<T, UserAnswersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAnswers
     * const userAnswers = await prisma.userAnswers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAnswersUpdateManyArgs>(args: SelectSubset<T, UserAnswersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers and returns the data updated in the database.
     * @param {UserAnswersUpdateManyAndReturnArgs} args - Arguments to update many UserAnswers.
     * @example
     * // Update many UserAnswers
     * const userAnswers = await prisma.userAnswers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAnswers and only return the `id`
     * const userAnswersWithIdOnly = await prisma.userAnswers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAnswersUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAnswersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAnswers.
     * @param {UserAnswersUpsertArgs} args - Arguments to update or create a UserAnswers.
     * @example
     * // Update or create a UserAnswers
     * const userAnswers = await prisma.userAnswers.upsert({
     *   create: {
     *     // ... data to create a UserAnswers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAnswers we want to update
     *   }
     * })
     */
    upsert<T extends UserAnswersUpsertArgs>(args: SelectSubset<T, UserAnswersUpsertArgs<ExtArgs>>): Prisma__UserAnswersClient<$Result.GetResult<Prisma.$UserAnswersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersCountArgs} args - Arguments to filter UserAnswers to count.
     * @example
     * // Count the number of UserAnswers
     * const count = await prisma.userAnswers.count({
     *   where: {
     *     // ... the filter for the UserAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserAnswersCountArgs>(
      args?: Subset<T, UserAnswersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAnswersAggregateArgs>(args: Subset<T, UserAnswersAggregateArgs>): Prisma.PrismaPromise<GetUserAnswersAggregateType<T>>

    /**
     * Group by UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAnswersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAnswersGroupByArgs['orderBy'] }
        : { orderBy?: UserAnswersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAnswersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAnswers model
   */
  readonly fields: UserAnswersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAnswers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAnswersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test_attempt<T extends TestAttemptsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestAttemptsDefaultArgs<ExtArgs>>): Prisma__TestAttemptsClient<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionsDefaultArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAnswers model
   */
  interface UserAnswersFieldRefs {
    readonly id: FieldRef<"UserAnswers", 'String'>
    readonly test_attempt_id: FieldRef<"UserAnswers", 'String'>
    readonly question_id: FieldRef<"UserAnswers", 'Int'>
    readonly answer_option: FieldRef<"UserAnswers", 'String'>
    readonly score: FieldRef<"UserAnswers", 'Int'>
    readonly answer_time: FieldRef<"UserAnswers", 'Int'>
    readonly created_at: FieldRef<"UserAnswers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAnswers findUnique
   */
  export type UserAnswersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers findUniqueOrThrow
   */
  export type UserAnswersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers findFirst
   */
  export type UserAnswersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * UserAnswers findFirstOrThrow
   */
  export type UserAnswersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * UserAnswers findMany
   */
  export type UserAnswersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswersOrderByWithRelationInput | UserAnswersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAnswers.
     */
    cursor?: UserAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    distinct?: UserAnswersScalarFieldEnum | UserAnswersScalarFieldEnum[]
  }

  /**
   * UserAnswers create
   */
  export type UserAnswersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAnswers.
     */
    data: XOR<UserAnswersCreateInput, UserAnswersUncheckedCreateInput>
  }

  /**
   * UserAnswers createMany
   */
  export type UserAnswersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAnswers.
     */
    data: UserAnswersCreateManyInput | UserAnswersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAnswers createManyAndReturn
   */
  export type UserAnswersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * The data used to create many UserAnswers.
     */
    data: UserAnswersCreateManyInput | UserAnswersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAnswers update
   */
  export type UserAnswersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAnswers.
     */
    data: XOR<UserAnswersUpdateInput, UserAnswersUncheckedUpdateInput>
    /**
     * Choose, which UserAnswers to update.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers updateMany
   */
  export type UserAnswersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswersWhereInput
    /**
     * Limit how many UserAnswers to update.
     */
    limit?: number
  }

  /**
   * UserAnswers updateManyAndReturn
   */
  export type UserAnswersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswersWhereInput
    /**
     * Limit how many UserAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAnswers upsert
   */
  export type UserAnswersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAnswers to update in case it exists.
     */
    where: UserAnswersWhereUniqueInput
    /**
     * In case the UserAnswers found by the `where` argument doesn't exist, create a new UserAnswers with this data.
     */
    create: XOR<UserAnswersCreateInput, UserAnswersUncheckedCreateInput>
    /**
     * In case the UserAnswers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAnswersUpdateInput, UserAnswersUncheckedUpdateInput>
  }

  /**
   * UserAnswers delete
   */
  export type UserAnswersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
    /**
     * Filter which UserAnswers to delete.
     */
    where: UserAnswersWhereUniqueInput
  }

  /**
   * UserAnswers deleteMany
   */
  export type UserAnswersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnswers to delete
     */
    where?: UserAnswersWhereInput
    /**
     * Limit how many UserAnswers to delete.
     */
    limit?: number
  }

  /**
   * UserAnswers without action
   */
  export type UserAnswersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswers
     */
    select?: UserAnswersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswers
     */
    omit?: UserAnswersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswersInclude<ExtArgs> | null
  }


  /**
   * Model TestResults
   */

  export type AggregateTestResults = {
    _count: TestResultsCountAggregateOutputType | null
    _min: TestResultsMinAggregateOutputType | null
    _max: TestResultsMaxAggregateOutputType | null
  }

  export type TestResultsMinAggregateOutputType = {
    id: string | null
    test_attempt_id: string | null
    primary_personality_type_id: string | null
    share_token: string | null
    is_shared: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TestResultsMaxAggregateOutputType = {
    id: string | null
    test_attempt_id: string | null
    primary_personality_type_id: string | null
    share_token: string | null
    is_shared: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TestResultsCountAggregateOutputType = {
    id: number
    test_attempt_id: number
    primary_personality_type_id: number
    total_scores: number
    percentage_scores: number
    detailed_analysis: number
    recommendations: number
    share_token: number
    is_shared: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TestResultsMinAggregateInputType = {
    id?: true
    test_attempt_id?: true
    primary_personality_type_id?: true
    share_token?: true
    is_shared?: true
    created_at?: true
    updated_at?: true
  }

  export type TestResultsMaxAggregateInputType = {
    id?: true
    test_attempt_id?: true
    primary_personality_type_id?: true
    share_token?: true
    is_shared?: true
    created_at?: true
    updated_at?: true
  }

  export type TestResultsCountAggregateInputType = {
    id?: true
    test_attempt_id?: true
    primary_personality_type_id?: true
    total_scores?: true
    percentage_scores?: true
    detailed_analysis?: true
    recommendations?: true
    share_token?: true
    is_shared?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TestResultsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResults to aggregate.
     */
    where?: TestResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultsOrderByWithRelationInput | TestResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestResults
    **/
    _count?: true | TestResultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestResultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestResultsMaxAggregateInputType
  }

  export type GetTestResultsAggregateType<T extends TestResultsAggregateArgs> = {
        [P in keyof T & keyof AggregateTestResults]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestResults[P]>
      : GetScalarType<T[P], AggregateTestResults[P]>
  }




  export type TestResultsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestResultsWhereInput
    orderBy?: TestResultsOrderByWithAggregationInput | TestResultsOrderByWithAggregationInput[]
    by: TestResultsScalarFieldEnum[] | TestResultsScalarFieldEnum
    having?: TestResultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestResultsCountAggregateInputType | true
    _min?: TestResultsMinAggregateInputType
    _max?: TestResultsMaxAggregateInputType
  }

  export type TestResultsGroupByOutputType = {
    id: string
    test_attempt_id: string
    primary_personality_type_id: string | null
    total_scores: JsonValue
    percentage_scores: JsonValue | null
    detailed_analysis: JsonValue | null
    recommendations: JsonValue | null
    share_token: string | null
    is_shared: boolean
    created_at: Date
    updated_at: Date
    _count: TestResultsCountAggregateOutputType | null
    _min: TestResultsMinAggregateOutputType | null
    _max: TestResultsMaxAggregateOutputType | null
  }

  type GetTestResultsGroupByPayload<T extends TestResultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestResultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestResultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestResultsGroupByOutputType[P]>
            : GetScalarType<T[P], TestResultsGroupByOutputType[P]>
        }
      >
    >


  export type TestResultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    test_attempt_id?: boolean
    primary_personality_type_id?: boolean
    total_scores?: boolean
    percentage_scores?: boolean
    detailed_analysis?: boolean
    recommendations?: boolean
    share_token?: boolean
    is_shared?: boolean
    created_at?: boolean
    updated_at?: boolean
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    primary_personality_type?: boolean | TestResults$primary_personality_typeArgs<ExtArgs>
  }, ExtArgs["result"]["testResults"]>

  export type TestResultsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    test_attempt_id?: boolean
    primary_personality_type_id?: boolean
    total_scores?: boolean
    percentage_scores?: boolean
    detailed_analysis?: boolean
    recommendations?: boolean
    share_token?: boolean
    is_shared?: boolean
    created_at?: boolean
    updated_at?: boolean
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    primary_personality_type?: boolean | TestResults$primary_personality_typeArgs<ExtArgs>
  }, ExtArgs["result"]["testResults"]>

  export type TestResultsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    test_attempt_id?: boolean
    primary_personality_type_id?: boolean
    total_scores?: boolean
    percentage_scores?: boolean
    detailed_analysis?: boolean
    recommendations?: boolean
    share_token?: boolean
    is_shared?: boolean
    created_at?: boolean
    updated_at?: boolean
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    primary_personality_type?: boolean | TestResults$primary_personality_typeArgs<ExtArgs>
  }, ExtArgs["result"]["testResults"]>

  export type TestResultsSelectScalar = {
    id?: boolean
    test_attempt_id?: boolean
    primary_personality_type_id?: boolean
    total_scores?: boolean
    percentage_scores?: boolean
    detailed_analysis?: boolean
    recommendations?: boolean
    share_token?: boolean
    is_shared?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TestResultsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "test_attempt_id" | "primary_personality_type_id" | "total_scores" | "percentage_scores" | "detailed_analysis" | "recommendations" | "share_token" | "is_shared" | "created_at" | "updated_at", ExtArgs["result"]["testResults"]>
  export type TestResultsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    primary_personality_type?: boolean | TestResults$primary_personality_typeArgs<ExtArgs>
  }
  export type TestResultsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    primary_personality_type?: boolean | TestResults$primary_personality_typeArgs<ExtArgs>
  }
  export type TestResultsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_attempt?: boolean | TestAttemptsDefaultArgs<ExtArgs>
    primary_personality_type?: boolean | TestResults$primary_personality_typeArgs<ExtArgs>
  }

  export type $TestResultsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestResults"
    objects: {
      test_attempt: Prisma.$TestAttemptsPayload<ExtArgs>
      primary_personality_type: Prisma.$PersonalityTypesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      test_attempt_id: string
      primary_personality_type_id: string | null
      total_scores: Prisma.JsonValue
      percentage_scores: Prisma.JsonValue | null
      detailed_analysis: Prisma.JsonValue | null
      recommendations: Prisma.JsonValue | null
      share_token: string | null
      is_shared: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["testResults"]>
    composites: {}
  }

  type TestResultsGetPayload<S extends boolean | null | undefined | TestResultsDefaultArgs> = $Result.GetResult<Prisma.$TestResultsPayload, S>

  type TestResultsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestResultsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestResultsCountAggregateInputType | true
    }

  export interface TestResultsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestResults'], meta: { name: 'TestResults' } }
    /**
     * Find zero or one TestResults that matches the filter.
     * @param {TestResultsFindUniqueArgs} args - Arguments to find a TestResults
     * @example
     * // Get one TestResults
     * const testResults = await prisma.testResults.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestResultsFindUniqueArgs>(args: SelectSubset<T, TestResultsFindUniqueArgs<ExtArgs>>): Prisma__TestResultsClient<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestResults that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestResultsFindUniqueOrThrowArgs} args - Arguments to find a TestResults
     * @example
     * // Get one TestResults
     * const testResults = await prisma.testResults.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestResultsFindUniqueOrThrowArgs>(args: SelectSubset<T, TestResultsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestResultsClient<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultsFindFirstArgs} args - Arguments to find a TestResults
     * @example
     * // Get one TestResults
     * const testResults = await prisma.testResults.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestResultsFindFirstArgs>(args?: SelectSubset<T, TestResultsFindFirstArgs<ExtArgs>>): Prisma__TestResultsClient<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestResults that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultsFindFirstOrThrowArgs} args - Arguments to find a TestResults
     * @example
     * // Get one TestResults
     * const testResults = await prisma.testResults.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestResultsFindFirstOrThrowArgs>(args?: SelectSubset<T, TestResultsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestResultsClient<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestResults
     * const testResults = await prisma.testResults.findMany()
     * 
     * // Get first 10 TestResults
     * const testResults = await prisma.testResults.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testResultsWithIdOnly = await prisma.testResults.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestResultsFindManyArgs>(args?: SelectSubset<T, TestResultsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestResults.
     * @param {TestResultsCreateArgs} args - Arguments to create a TestResults.
     * @example
     * // Create one TestResults
     * const TestResults = await prisma.testResults.create({
     *   data: {
     *     // ... data to create a TestResults
     *   }
     * })
     * 
     */
    create<T extends TestResultsCreateArgs>(args: SelectSubset<T, TestResultsCreateArgs<ExtArgs>>): Prisma__TestResultsClient<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestResults.
     * @param {TestResultsCreateManyArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResults = await prisma.testResults.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestResultsCreateManyArgs>(args?: SelectSubset<T, TestResultsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestResults and returns the data saved in the database.
     * @param {TestResultsCreateManyAndReturnArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResults = await prisma.testResults.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestResults and only return the `id`
     * const testResultsWithIdOnly = await prisma.testResults.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestResultsCreateManyAndReturnArgs>(args?: SelectSubset<T, TestResultsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestResults.
     * @param {TestResultsDeleteArgs} args - Arguments to delete one TestResults.
     * @example
     * // Delete one TestResults
     * const TestResults = await prisma.testResults.delete({
     *   where: {
     *     // ... filter to delete one TestResults
     *   }
     * })
     * 
     */
    delete<T extends TestResultsDeleteArgs>(args: SelectSubset<T, TestResultsDeleteArgs<ExtArgs>>): Prisma__TestResultsClient<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestResults.
     * @param {TestResultsUpdateArgs} args - Arguments to update one TestResults.
     * @example
     * // Update one TestResults
     * const testResults = await prisma.testResults.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestResultsUpdateArgs>(args: SelectSubset<T, TestResultsUpdateArgs<ExtArgs>>): Prisma__TestResultsClient<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestResults.
     * @param {TestResultsDeleteManyArgs} args - Arguments to filter TestResults to delete.
     * @example
     * // Delete a few TestResults
     * const { count } = await prisma.testResults.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestResultsDeleteManyArgs>(args?: SelectSubset<T, TestResultsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestResults
     * const testResults = await prisma.testResults.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestResultsUpdateManyArgs>(args: SelectSubset<T, TestResultsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults and returns the data updated in the database.
     * @param {TestResultsUpdateManyAndReturnArgs} args - Arguments to update many TestResults.
     * @example
     * // Update many TestResults
     * const testResults = await prisma.testResults.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestResults and only return the `id`
     * const testResultsWithIdOnly = await prisma.testResults.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestResultsUpdateManyAndReturnArgs>(args: SelectSubset<T, TestResultsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestResults.
     * @param {TestResultsUpsertArgs} args - Arguments to update or create a TestResults.
     * @example
     * // Update or create a TestResults
     * const testResults = await prisma.testResults.upsert({
     *   create: {
     *     // ... data to create a TestResults
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestResults we want to update
     *   }
     * })
     */
    upsert<T extends TestResultsUpsertArgs>(args: SelectSubset<T, TestResultsUpsertArgs<ExtArgs>>): Prisma__TestResultsClient<$Result.GetResult<Prisma.$TestResultsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultsCountArgs} args - Arguments to filter TestResults to count.
     * @example
     * // Count the number of TestResults
     * const count = await prisma.testResults.count({
     *   where: {
     *     // ... the filter for the TestResults we want to count
     *   }
     * })
    **/
    count<T extends TestResultsCountArgs>(
      args?: Subset<T, TestResultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestResultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestResultsAggregateArgs>(args: Subset<T, TestResultsAggregateArgs>): Prisma.PrismaPromise<GetTestResultsAggregateType<T>>

    /**
     * Group by TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestResultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestResultsGroupByArgs['orderBy'] }
        : { orderBy?: TestResultsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestResultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestResultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestResults model
   */
  readonly fields: TestResultsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestResults.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestResultsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test_attempt<T extends TestAttemptsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestAttemptsDefaultArgs<ExtArgs>>): Prisma__TestAttemptsClient<$Result.GetResult<Prisma.$TestAttemptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    primary_personality_type<T extends TestResults$primary_personality_typeArgs<ExtArgs> = {}>(args?: Subset<T, TestResults$primary_personality_typeArgs<ExtArgs>>): Prisma__PersonalityTypesClient<$Result.GetResult<Prisma.$PersonalityTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestResults model
   */
  interface TestResultsFieldRefs {
    readonly id: FieldRef<"TestResults", 'String'>
    readonly test_attempt_id: FieldRef<"TestResults", 'String'>
    readonly primary_personality_type_id: FieldRef<"TestResults", 'String'>
    readonly total_scores: FieldRef<"TestResults", 'Json'>
    readonly percentage_scores: FieldRef<"TestResults", 'Json'>
    readonly detailed_analysis: FieldRef<"TestResults", 'Json'>
    readonly recommendations: FieldRef<"TestResults", 'Json'>
    readonly share_token: FieldRef<"TestResults", 'String'>
    readonly is_shared: FieldRef<"TestResults", 'Boolean'>
    readonly created_at: FieldRef<"TestResults", 'DateTime'>
    readonly updated_at: FieldRef<"TestResults", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestResults findUnique
   */
  export type TestResultsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    /**
     * Filter, which TestResults to fetch.
     */
    where: TestResultsWhereUniqueInput
  }

  /**
   * TestResults findUniqueOrThrow
   */
  export type TestResultsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    /**
     * Filter, which TestResults to fetch.
     */
    where: TestResultsWhereUniqueInput
  }

  /**
   * TestResults findFirst
   */
  export type TestResultsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    /**
     * Filter, which TestResults to fetch.
     */
    where?: TestResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultsOrderByWithRelationInput | TestResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultsScalarFieldEnum | TestResultsScalarFieldEnum[]
  }

  /**
   * TestResults findFirstOrThrow
   */
  export type TestResultsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    /**
     * Filter, which TestResults to fetch.
     */
    where?: TestResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultsOrderByWithRelationInput | TestResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultsScalarFieldEnum | TestResultsScalarFieldEnum[]
  }

  /**
   * TestResults findMany
   */
  export type TestResultsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    /**
     * Filter, which TestResults to fetch.
     */
    where?: TestResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultsOrderByWithRelationInput | TestResultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestResults.
     */
    cursor?: TestResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    distinct?: TestResultsScalarFieldEnum | TestResultsScalarFieldEnum[]
  }

  /**
   * TestResults create
   */
  export type TestResultsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    /**
     * The data needed to create a TestResults.
     */
    data: XOR<TestResultsCreateInput, TestResultsUncheckedCreateInput>
  }

  /**
   * TestResults createMany
   */
  export type TestResultsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestResults.
     */
    data: TestResultsCreateManyInput | TestResultsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestResults createManyAndReturn
   */
  export type TestResultsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * The data used to create many TestResults.
     */
    data: TestResultsCreateManyInput | TestResultsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResults update
   */
  export type TestResultsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    /**
     * The data needed to update a TestResults.
     */
    data: XOR<TestResultsUpdateInput, TestResultsUncheckedUpdateInput>
    /**
     * Choose, which TestResults to update.
     */
    where: TestResultsWhereUniqueInput
  }

  /**
   * TestResults updateMany
   */
  export type TestResultsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultsUpdateManyMutationInput, TestResultsUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultsWhereInput
    /**
     * Limit how many TestResults to update.
     */
    limit?: number
  }

  /**
   * TestResults updateManyAndReturn
   */
  export type TestResultsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultsUpdateManyMutationInput, TestResultsUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultsWhereInput
    /**
     * Limit how many TestResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResults upsert
   */
  export type TestResultsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    /**
     * The filter to search for the TestResults to update in case it exists.
     */
    where: TestResultsWhereUniqueInput
    /**
     * In case the TestResults found by the `where` argument doesn't exist, create a new TestResults with this data.
     */
    create: XOR<TestResultsCreateInput, TestResultsUncheckedCreateInput>
    /**
     * In case the TestResults was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestResultsUpdateInput, TestResultsUncheckedUpdateInput>
  }

  /**
   * TestResults delete
   */
  export type TestResultsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
    /**
     * Filter which TestResults to delete.
     */
    where: TestResultsWhereUniqueInput
  }

  /**
   * TestResults deleteMany
   */
  export type TestResultsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResults to delete
     */
    where?: TestResultsWhereInput
    /**
     * Limit how many TestResults to delete.
     */
    limit?: number
  }

  /**
   * TestResults.primary_personality_type
   */
  export type TestResults$primary_personality_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalityTypes
     */
    select?: PersonalityTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalityTypes
     */
    omit?: PersonalityTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalityTypesInclude<ExtArgs> | null
    where?: PersonalityTypesWhereInput
  }

  /**
   * TestResults without action
   */
  export type TestResultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResults
     */
    select?: TestResultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResults
     */
    omit?: TestResultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonalityTypesScalarFieldEnum: {
    id: 'id',
    type_code: 'type_code',
    type_name: 'type_name',
    title: 'title',
    theme_sentence: 'theme_sentence',
    description: 'description',
    description_points: 'description_points',
    strength_keywords: 'strength_keywords',
    weakness_keywords: 'weakness_keywords',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PersonalityTypesScalarFieldEnum = (typeof PersonalityTypesScalarFieldEnum)[keyof typeof PersonalityTypesScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    personality_type_id: 'personality_type_id',
    question_text: 'question_text',
    question_order_in_type: 'question_order_in_type',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const TestAttemptsScalarFieldEnum: {
    id: 'id',
    session_id: 'session_id',
    user_name: 'user_name',
    user_email: 'user_email',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    is_completed: 'is_completed',
    completion_time: 'completion_time',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TestAttemptsScalarFieldEnum = (typeof TestAttemptsScalarFieldEnum)[keyof typeof TestAttemptsScalarFieldEnum]


  export const UserAnswersScalarFieldEnum: {
    id: 'id',
    test_attempt_id: 'test_attempt_id',
    question_id: 'question_id',
    answer_option: 'answer_option',
    score: 'score',
    answer_time: 'answer_time',
    created_at: 'created_at'
  };

  export type UserAnswersScalarFieldEnum = (typeof UserAnswersScalarFieldEnum)[keyof typeof UserAnswersScalarFieldEnum]


  export const TestResultsScalarFieldEnum: {
    id: 'id',
    test_attempt_id: 'test_attempt_id',
    primary_personality_type_id: 'primary_personality_type_id',
    total_scores: 'total_scores',
    percentage_scores: 'percentage_scores',
    detailed_analysis: 'detailed_analysis',
    recommendations: 'recommendations',
    share_token: 'share_token',
    is_shared: 'is_shared',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TestResultsScalarFieldEnum = (typeof TestResultsScalarFieldEnum)[keyof typeof TestResultsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PersonalityTypesWhereInput = {
    AND?: PersonalityTypesWhereInput | PersonalityTypesWhereInput[]
    OR?: PersonalityTypesWhereInput[]
    NOT?: PersonalityTypesWhereInput | PersonalityTypesWhereInput[]
    id?: UuidFilter<"PersonalityTypes"> | string
    type_code?: StringFilter<"PersonalityTypes"> | string
    type_name?: StringFilter<"PersonalityTypes"> | string
    title?: StringFilter<"PersonalityTypes"> | string
    theme_sentence?: StringFilter<"PersonalityTypes"> | string
    description?: StringFilter<"PersonalityTypes"> | string
    description_points?: JsonFilter<"PersonalityTypes">
    strength_keywords?: JsonFilter<"PersonalityTypes">
    weakness_keywords?: JsonFilter<"PersonalityTypes">
    created_at?: DateTimeFilter<"PersonalityTypes"> | Date | string
    updated_at?: DateTimeFilter<"PersonalityTypes"> | Date | string
    questions?: QuestionsListRelationFilter
    test_results_primary?: TestResultsListRelationFilter
  }

  export type PersonalityTypesOrderByWithRelationInput = {
    id?: SortOrder
    type_code?: SortOrder
    type_name?: SortOrder
    title?: SortOrder
    theme_sentence?: SortOrder
    description?: SortOrder
    description_points?: SortOrder
    strength_keywords?: SortOrder
    weakness_keywords?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    questions?: QuestionsOrderByRelationAggregateInput
    test_results_primary?: TestResultsOrderByRelationAggregateInput
  }

  export type PersonalityTypesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    type_code?: string
    AND?: PersonalityTypesWhereInput | PersonalityTypesWhereInput[]
    OR?: PersonalityTypesWhereInput[]
    NOT?: PersonalityTypesWhereInput | PersonalityTypesWhereInput[]
    type_name?: StringFilter<"PersonalityTypes"> | string
    title?: StringFilter<"PersonalityTypes"> | string
    theme_sentence?: StringFilter<"PersonalityTypes"> | string
    description?: StringFilter<"PersonalityTypes"> | string
    description_points?: JsonFilter<"PersonalityTypes">
    strength_keywords?: JsonFilter<"PersonalityTypes">
    weakness_keywords?: JsonFilter<"PersonalityTypes">
    created_at?: DateTimeFilter<"PersonalityTypes"> | Date | string
    updated_at?: DateTimeFilter<"PersonalityTypes"> | Date | string
    questions?: QuestionsListRelationFilter
    test_results_primary?: TestResultsListRelationFilter
  }, "id" | "type_code">

  export type PersonalityTypesOrderByWithAggregationInput = {
    id?: SortOrder
    type_code?: SortOrder
    type_name?: SortOrder
    title?: SortOrder
    theme_sentence?: SortOrder
    description?: SortOrder
    description_points?: SortOrder
    strength_keywords?: SortOrder
    weakness_keywords?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PersonalityTypesCountOrderByAggregateInput
    _max?: PersonalityTypesMaxOrderByAggregateInput
    _min?: PersonalityTypesMinOrderByAggregateInput
  }

  export type PersonalityTypesScalarWhereWithAggregatesInput = {
    AND?: PersonalityTypesScalarWhereWithAggregatesInput | PersonalityTypesScalarWhereWithAggregatesInput[]
    OR?: PersonalityTypesScalarWhereWithAggregatesInput[]
    NOT?: PersonalityTypesScalarWhereWithAggregatesInput | PersonalityTypesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PersonalityTypes"> | string
    type_code?: StringWithAggregatesFilter<"PersonalityTypes"> | string
    type_name?: StringWithAggregatesFilter<"PersonalityTypes"> | string
    title?: StringWithAggregatesFilter<"PersonalityTypes"> | string
    theme_sentence?: StringWithAggregatesFilter<"PersonalityTypes"> | string
    description?: StringWithAggregatesFilter<"PersonalityTypes"> | string
    description_points?: JsonWithAggregatesFilter<"PersonalityTypes">
    strength_keywords?: JsonWithAggregatesFilter<"PersonalityTypes">
    weakness_keywords?: JsonWithAggregatesFilter<"PersonalityTypes">
    created_at?: DateTimeWithAggregatesFilter<"PersonalityTypes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PersonalityTypes"> | Date | string
  }

  export type QuestionsWhereInput = {
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    id?: IntFilter<"Questions"> | number
    personality_type_id?: UuidFilter<"Questions"> | string
    question_text?: StringFilter<"Questions"> | string
    question_order_in_type?: IntFilter<"Questions"> | number
    is_active?: BoolFilter<"Questions"> | boolean
    created_at?: DateTimeFilter<"Questions"> | Date | string
    updated_at?: DateTimeFilter<"Questions"> | Date | string
    personality_type?: XOR<PersonalityTypesScalarRelationFilter, PersonalityTypesWhereInput>
    user_answers?: UserAnswersListRelationFilter
  }

  export type QuestionsOrderByWithRelationInput = {
    id?: SortOrder
    personality_type_id?: SortOrder
    question_text?: SortOrder
    question_order_in_type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    personality_type?: PersonalityTypesOrderByWithRelationInput
    user_answers?: UserAnswersOrderByRelationAggregateInput
  }

  export type QuestionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    personality_type_id?: UuidFilter<"Questions"> | string
    question_text?: StringFilter<"Questions"> | string
    question_order_in_type?: IntFilter<"Questions"> | number
    is_active?: BoolFilter<"Questions"> | boolean
    created_at?: DateTimeFilter<"Questions"> | Date | string
    updated_at?: DateTimeFilter<"Questions"> | Date | string
    personality_type?: XOR<PersonalityTypesScalarRelationFilter, PersonalityTypesWhereInput>
    user_answers?: UserAnswersListRelationFilter
  }, "id">

  export type QuestionsOrderByWithAggregationInput = {
    id?: SortOrder
    personality_type_id?: SortOrder
    question_text?: SortOrder
    question_order_in_type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: QuestionsCountOrderByAggregateInput
    _avg?: QuestionsAvgOrderByAggregateInput
    _max?: QuestionsMaxOrderByAggregateInput
    _min?: QuestionsMinOrderByAggregateInput
    _sum?: QuestionsSumOrderByAggregateInput
  }

  export type QuestionsScalarWhereWithAggregatesInput = {
    AND?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    OR?: QuestionsScalarWhereWithAggregatesInput[]
    NOT?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Questions"> | number
    personality_type_id?: UuidWithAggregatesFilter<"Questions"> | string
    question_text?: StringWithAggregatesFilter<"Questions"> | string
    question_order_in_type?: IntWithAggregatesFilter<"Questions"> | number
    is_active?: BoolWithAggregatesFilter<"Questions"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Questions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Questions"> | Date | string
  }

  export type TestAttemptsWhereInput = {
    AND?: TestAttemptsWhereInput | TestAttemptsWhereInput[]
    OR?: TestAttemptsWhereInput[]
    NOT?: TestAttemptsWhereInput | TestAttemptsWhereInput[]
    id?: UuidFilter<"TestAttempts"> | string
    session_id?: StringNullableFilter<"TestAttempts"> | string | null
    user_name?: StringNullableFilter<"TestAttempts"> | string | null
    user_email?: StringNullableFilter<"TestAttempts"> | string | null
    ip_address?: StringNullableFilter<"TestAttempts"> | string | null
    user_agent?: StringNullableFilter<"TestAttempts"> | string | null
    is_completed?: BoolFilter<"TestAttempts"> | boolean
    completion_time?: IntNullableFilter<"TestAttempts"> | number | null
    created_at?: DateTimeFilter<"TestAttempts"> | Date | string
    updated_at?: DateTimeFilter<"TestAttempts"> | Date | string
    user_answers?: UserAnswersListRelationFilter
    test_result?: XOR<TestResultsNullableScalarRelationFilter, TestResultsWhereInput> | null
  }

  export type TestAttemptsOrderByWithRelationInput = {
    id?: SortOrder
    session_id?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    user_email?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    is_completed?: SortOrder
    completion_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_answers?: UserAnswersOrderByRelationAggregateInput
    test_result?: TestResultsOrderByWithRelationInput
  }

  export type TestAttemptsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestAttemptsWhereInput | TestAttemptsWhereInput[]
    OR?: TestAttemptsWhereInput[]
    NOT?: TestAttemptsWhereInput | TestAttemptsWhereInput[]
    session_id?: StringNullableFilter<"TestAttempts"> | string | null
    user_name?: StringNullableFilter<"TestAttempts"> | string | null
    user_email?: StringNullableFilter<"TestAttempts"> | string | null
    ip_address?: StringNullableFilter<"TestAttempts"> | string | null
    user_agent?: StringNullableFilter<"TestAttempts"> | string | null
    is_completed?: BoolFilter<"TestAttempts"> | boolean
    completion_time?: IntNullableFilter<"TestAttempts"> | number | null
    created_at?: DateTimeFilter<"TestAttempts"> | Date | string
    updated_at?: DateTimeFilter<"TestAttempts"> | Date | string
    user_answers?: UserAnswersListRelationFilter
    test_result?: XOR<TestResultsNullableScalarRelationFilter, TestResultsWhereInput> | null
  }, "id">

  export type TestAttemptsOrderByWithAggregationInput = {
    id?: SortOrder
    session_id?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    user_email?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    is_completed?: SortOrder
    completion_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TestAttemptsCountOrderByAggregateInput
    _avg?: TestAttemptsAvgOrderByAggregateInput
    _max?: TestAttemptsMaxOrderByAggregateInput
    _min?: TestAttemptsMinOrderByAggregateInput
    _sum?: TestAttemptsSumOrderByAggregateInput
  }

  export type TestAttemptsScalarWhereWithAggregatesInput = {
    AND?: TestAttemptsScalarWhereWithAggregatesInput | TestAttemptsScalarWhereWithAggregatesInput[]
    OR?: TestAttemptsScalarWhereWithAggregatesInput[]
    NOT?: TestAttemptsScalarWhereWithAggregatesInput | TestAttemptsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TestAttempts"> | string
    session_id?: StringNullableWithAggregatesFilter<"TestAttempts"> | string | null
    user_name?: StringNullableWithAggregatesFilter<"TestAttempts"> | string | null
    user_email?: StringNullableWithAggregatesFilter<"TestAttempts"> | string | null
    ip_address?: StringNullableWithAggregatesFilter<"TestAttempts"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"TestAttempts"> | string | null
    is_completed?: BoolWithAggregatesFilter<"TestAttempts"> | boolean
    completion_time?: IntNullableWithAggregatesFilter<"TestAttempts"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"TestAttempts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TestAttempts"> | Date | string
  }

  export type UserAnswersWhereInput = {
    AND?: UserAnswersWhereInput | UserAnswersWhereInput[]
    OR?: UserAnswersWhereInput[]
    NOT?: UserAnswersWhereInput | UserAnswersWhereInput[]
    id?: UuidFilter<"UserAnswers"> | string
    test_attempt_id?: UuidFilter<"UserAnswers"> | string
    question_id?: IntFilter<"UserAnswers"> | number
    answer_option?: StringNullableFilter<"UserAnswers"> | string | null
    score?: IntFilter<"UserAnswers"> | number
    answer_time?: IntNullableFilter<"UserAnswers"> | number | null
    created_at?: DateTimeFilter<"UserAnswers"> | Date | string
    test_attempt?: XOR<TestAttemptsScalarRelationFilter, TestAttemptsWhereInput>
    question?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
  }

  export type UserAnswersOrderByWithRelationInput = {
    id?: SortOrder
    test_attempt_id?: SortOrder
    question_id?: SortOrder
    answer_option?: SortOrderInput | SortOrder
    score?: SortOrder
    answer_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    test_attempt?: TestAttemptsOrderByWithRelationInput
    question?: QuestionsOrderByWithRelationInput
  }

  export type UserAnswersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    test_attempt_id_question_id?: UserAnswersTest_attempt_idQuestion_idCompoundUniqueInput
    AND?: UserAnswersWhereInput | UserAnswersWhereInput[]
    OR?: UserAnswersWhereInput[]
    NOT?: UserAnswersWhereInput | UserAnswersWhereInput[]
    test_attempt_id?: UuidFilter<"UserAnswers"> | string
    question_id?: IntFilter<"UserAnswers"> | number
    answer_option?: StringNullableFilter<"UserAnswers"> | string | null
    score?: IntFilter<"UserAnswers"> | number
    answer_time?: IntNullableFilter<"UserAnswers"> | number | null
    created_at?: DateTimeFilter<"UserAnswers"> | Date | string
    test_attempt?: XOR<TestAttemptsScalarRelationFilter, TestAttemptsWhereInput>
    question?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
  }, "id" | "test_attempt_id_question_id">

  export type UserAnswersOrderByWithAggregationInput = {
    id?: SortOrder
    test_attempt_id?: SortOrder
    question_id?: SortOrder
    answer_option?: SortOrderInput | SortOrder
    score?: SortOrder
    answer_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: UserAnswersCountOrderByAggregateInput
    _avg?: UserAnswersAvgOrderByAggregateInput
    _max?: UserAnswersMaxOrderByAggregateInput
    _min?: UserAnswersMinOrderByAggregateInput
    _sum?: UserAnswersSumOrderByAggregateInput
  }

  export type UserAnswersScalarWhereWithAggregatesInput = {
    AND?: UserAnswersScalarWhereWithAggregatesInput | UserAnswersScalarWhereWithAggregatesInput[]
    OR?: UserAnswersScalarWhereWithAggregatesInput[]
    NOT?: UserAnswersScalarWhereWithAggregatesInput | UserAnswersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserAnswers"> | string
    test_attempt_id?: UuidWithAggregatesFilter<"UserAnswers"> | string
    question_id?: IntWithAggregatesFilter<"UserAnswers"> | number
    answer_option?: StringNullableWithAggregatesFilter<"UserAnswers"> | string | null
    score?: IntWithAggregatesFilter<"UserAnswers"> | number
    answer_time?: IntNullableWithAggregatesFilter<"UserAnswers"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"UserAnswers"> | Date | string
  }

  export type TestResultsWhereInput = {
    AND?: TestResultsWhereInput | TestResultsWhereInput[]
    OR?: TestResultsWhereInput[]
    NOT?: TestResultsWhereInput | TestResultsWhereInput[]
    id?: UuidFilter<"TestResults"> | string
    test_attempt_id?: UuidFilter<"TestResults"> | string
    primary_personality_type_id?: UuidNullableFilter<"TestResults"> | string | null
    total_scores?: JsonFilter<"TestResults">
    percentage_scores?: JsonNullableFilter<"TestResults">
    detailed_analysis?: JsonNullableFilter<"TestResults">
    recommendations?: JsonNullableFilter<"TestResults">
    share_token?: StringNullableFilter<"TestResults"> | string | null
    is_shared?: BoolFilter<"TestResults"> | boolean
    created_at?: DateTimeFilter<"TestResults"> | Date | string
    updated_at?: DateTimeFilter<"TestResults"> | Date | string
    test_attempt?: XOR<TestAttemptsScalarRelationFilter, TestAttemptsWhereInput>
    primary_personality_type?: XOR<PersonalityTypesNullableScalarRelationFilter, PersonalityTypesWhereInput> | null
  }

  export type TestResultsOrderByWithRelationInput = {
    id?: SortOrder
    test_attempt_id?: SortOrder
    primary_personality_type_id?: SortOrderInput | SortOrder
    total_scores?: SortOrder
    percentage_scores?: SortOrderInput | SortOrder
    detailed_analysis?: SortOrderInput | SortOrder
    recommendations?: SortOrderInput | SortOrder
    share_token?: SortOrderInput | SortOrder
    is_shared?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    test_attempt?: TestAttemptsOrderByWithRelationInput
    primary_personality_type?: PersonalityTypesOrderByWithRelationInput
  }

  export type TestResultsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    test_attempt_id?: string
    share_token?: string
    AND?: TestResultsWhereInput | TestResultsWhereInput[]
    OR?: TestResultsWhereInput[]
    NOT?: TestResultsWhereInput | TestResultsWhereInput[]
    primary_personality_type_id?: UuidNullableFilter<"TestResults"> | string | null
    total_scores?: JsonFilter<"TestResults">
    percentage_scores?: JsonNullableFilter<"TestResults">
    detailed_analysis?: JsonNullableFilter<"TestResults">
    recommendations?: JsonNullableFilter<"TestResults">
    is_shared?: BoolFilter<"TestResults"> | boolean
    created_at?: DateTimeFilter<"TestResults"> | Date | string
    updated_at?: DateTimeFilter<"TestResults"> | Date | string
    test_attempt?: XOR<TestAttemptsScalarRelationFilter, TestAttemptsWhereInput>
    primary_personality_type?: XOR<PersonalityTypesNullableScalarRelationFilter, PersonalityTypesWhereInput> | null
  }, "id" | "test_attempt_id" | "share_token">

  export type TestResultsOrderByWithAggregationInput = {
    id?: SortOrder
    test_attempt_id?: SortOrder
    primary_personality_type_id?: SortOrderInput | SortOrder
    total_scores?: SortOrder
    percentage_scores?: SortOrderInput | SortOrder
    detailed_analysis?: SortOrderInput | SortOrder
    recommendations?: SortOrderInput | SortOrder
    share_token?: SortOrderInput | SortOrder
    is_shared?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TestResultsCountOrderByAggregateInput
    _max?: TestResultsMaxOrderByAggregateInput
    _min?: TestResultsMinOrderByAggregateInput
  }

  export type TestResultsScalarWhereWithAggregatesInput = {
    AND?: TestResultsScalarWhereWithAggregatesInput | TestResultsScalarWhereWithAggregatesInput[]
    OR?: TestResultsScalarWhereWithAggregatesInput[]
    NOT?: TestResultsScalarWhereWithAggregatesInput | TestResultsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TestResults"> | string
    test_attempt_id?: UuidWithAggregatesFilter<"TestResults"> | string
    primary_personality_type_id?: UuidNullableWithAggregatesFilter<"TestResults"> | string | null
    total_scores?: JsonWithAggregatesFilter<"TestResults">
    percentage_scores?: JsonNullableWithAggregatesFilter<"TestResults">
    detailed_analysis?: JsonNullableWithAggregatesFilter<"TestResults">
    recommendations?: JsonNullableWithAggregatesFilter<"TestResults">
    share_token?: StringNullableWithAggregatesFilter<"TestResults"> | string | null
    is_shared?: BoolWithAggregatesFilter<"TestResults"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"TestResults"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TestResults"> | Date | string
  }

  export type PersonalityTypesCreateInput = {
    id?: string
    type_code: string
    type_name: string
    title: string
    theme_sentence: string
    description: string
    description_points: JsonNullValueInput | InputJsonValue
    strength_keywords: JsonNullValueInput | InputJsonValue
    weakness_keywords: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionsCreateNestedManyWithoutPersonality_typeInput
    test_results_primary?: TestResultsCreateNestedManyWithoutPrimary_personality_typeInput
  }

  export type PersonalityTypesUncheckedCreateInput = {
    id?: string
    type_code: string
    type_name: string
    title: string
    theme_sentence: string
    description: string
    description_points: JsonNullValueInput | InputJsonValue
    strength_keywords: JsonNullValueInput | InputJsonValue
    weakness_keywords: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionsUncheckedCreateNestedManyWithoutPersonality_typeInput
    test_results_primary?: TestResultsUncheckedCreateNestedManyWithoutPrimary_personality_typeInput
  }

  export type PersonalityTypesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type_code?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    theme_sentence?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_points?: JsonNullValueInput | InputJsonValue
    strength_keywords?: JsonNullValueInput | InputJsonValue
    weakness_keywords?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionsUpdateManyWithoutPersonality_typeNestedInput
    test_results_primary?: TestResultsUpdateManyWithoutPrimary_personality_typeNestedInput
  }

  export type PersonalityTypesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type_code?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    theme_sentence?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_points?: JsonNullValueInput | InputJsonValue
    strength_keywords?: JsonNullValueInput | InputJsonValue
    weakness_keywords?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionsUncheckedUpdateManyWithoutPersonality_typeNestedInput
    test_results_primary?: TestResultsUncheckedUpdateManyWithoutPrimary_personality_typeNestedInput
  }

  export type PersonalityTypesCreateManyInput = {
    id?: string
    type_code: string
    type_name: string
    title: string
    theme_sentence: string
    description: string
    description_points: JsonNullValueInput | InputJsonValue
    strength_keywords: JsonNullValueInput | InputJsonValue
    weakness_keywords: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PersonalityTypesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type_code?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    theme_sentence?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_points?: JsonNullValueInput | InputJsonValue
    strength_keywords?: JsonNullValueInput | InputJsonValue
    weakness_keywords?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalityTypesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type_code?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    theme_sentence?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_points?: JsonNullValueInput | InputJsonValue
    strength_keywords?: JsonNullValueInput | InputJsonValue
    weakness_keywords?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsCreateInput = {
    question_text: string
    question_order_in_type?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    personality_type: PersonalityTypesCreateNestedOneWithoutQuestionsInput
    user_answers?: UserAnswersCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateInput = {
    id?: number
    personality_type_id: string
    question_text: string
    question_order_in_type?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_answers?: UserAnswersUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsUpdateInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    question_order_in_type?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    personality_type?: PersonalityTypesUpdateOneRequiredWithoutQuestionsNestedInput
    user_answers?: UserAnswersUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    personality_type_id?: StringFieldUpdateOperationsInput | string
    question_text?: StringFieldUpdateOperationsInput | string
    question_order_in_type?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_answers?: UserAnswersUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsCreateManyInput = {
    id?: number
    personality_type_id: string
    question_text: string
    question_order_in_type?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuestionsUpdateManyMutationInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    question_order_in_type?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    personality_type_id?: StringFieldUpdateOperationsInput | string
    question_text?: StringFieldUpdateOperationsInput | string
    question_order_in_type?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAttemptsCreateInput = {
    id?: string
    session_id?: string | null
    user_name?: string | null
    user_email?: string | null
    ip_address?: string | null
    user_agent?: string | null
    is_completed?: boolean
    completion_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    user_answers?: UserAnswersCreateNestedManyWithoutTest_attemptInput
    test_result?: TestResultsCreateNestedOneWithoutTest_attemptInput
  }

  export type TestAttemptsUncheckedCreateInput = {
    id?: string
    session_id?: string | null
    user_name?: string | null
    user_email?: string | null
    ip_address?: string | null
    user_agent?: string | null
    is_completed?: boolean
    completion_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    user_answers?: UserAnswersUncheckedCreateNestedManyWithoutTest_attemptInput
    test_result?: TestResultsUncheckedCreateNestedOneWithoutTest_attemptInput
  }

  export type TestAttemptsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    completion_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_answers?: UserAnswersUpdateManyWithoutTest_attemptNestedInput
    test_result?: TestResultsUpdateOneWithoutTest_attemptNestedInput
  }

  export type TestAttemptsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    completion_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_answers?: UserAnswersUncheckedUpdateManyWithoutTest_attemptNestedInput
    test_result?: TestResultsUncheckedUpdateOneWithoutTest_attemptNestedInput
  }

  export type TestAttemptsCreateManyInput = {
    id?: string
    session_id?: string | null
    user_name?: string | null
    user_email?: string | null
    ip_address?: string | null
    user_agent?: string | null
    is_completed?: boolean
    completion_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TestAttemptsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    completion_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAttemptsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    completion_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersCreateInput = {
    id?: string
    answer_option?: string | null
    score: number
    answer_time?: number | null
    created_at?: Date | string
    test_attempt: TestAttemptsCreateNestedOneWithoutUser_answersInput
    question: QuestionsCreateNestedOneWithoutUser_answersInput
  }

  export type UserAnswersUncheckedCreateInput = {
    id?: string
    test_attempt_id: string
    question_id: number
    answer_option?: string | null
    score: number
    answer_time?: number | null
    created_at?: Date | string
  }

  export type UserAnswersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer_option?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    answer_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_attempt?: TestAttemptsUpdateOneRequiredWithoutUser_answersNestedInput
    question?: QuestionsUpdateOneRequiredWithoutUser_answersNestedInput
  }

  export type UserAnswersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_attempt_id?: StringFieldUpdateOperationsInput | string
    question_id?: IntFieldUpdateOperationsInput | number
    answer_option?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    answer_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersCreateManyInput = {
    id?: string
    test_attempt_id: string
    question_id: number
    answer_option?: string | null
    score: number
    answer_time?: number | null
    created_at?: Date | string
  }

  export type UserAnswersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer_option?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    answer_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_attempt_id?: StringFieldUpdateOperationsInput | string
    question_id?: IntFieldUpdateOperationsInput | number
    answer_option?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    answer_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultsCreateInput = {
    id?: string
    total_scores: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: string | null
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    test_attempt: TestAttemptsCreateNestedOneWithoutTest_resultInput
    primary_personality_type?: PersonalityTypesCreateNestedOneWithoutTest_results_primaryInput
  }

  export type TestResultsUncheckedCreateInput = {
    id?: string
    test_attempt_id: string
    primary_personality_type_id?: string | null
    total_scores: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: string | null
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TestResultsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_scores?: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_attempt?: TestAttemptsUpdateOneRequiredWithoutTest_resultNestedInput
    primary_personality_type?: PersonalityTypesUpdateOneWithoutTest_results_primaryNestedInput
  }

  export type TestResultsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_attempt_id?: StringFieldUpdateOperationsInput | string
    primary_personality_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_scores?: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultsCreateManyInput = {
    id?: string
    test_attempt_id: string
    primary_personality_type_id?: string | null
    total_scores: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: string | null
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TestResultsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_scores?: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_attempt_id?: StringFieldUpdateOperationsInput | string
    primary_personality_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_scores?: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuestionsListRelationFilter = {
    every?: QuestionsWhereInput
    some?: QuestionsWhereInput
    none?: QuestionsWhereInput
  }

  export type TestResultsListRelationFilter = {
    every?: TestResultsWhereInput
    some?: TestResultsWhereInput
    none?: TestResultsWhereInput
  }

  export type QuestionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestResultsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonalityTypesCountOrderByAggregateInput = {
    id?: SortOrder
    type_code?: SortOrder
    type_name?: SortOrder
    title?: SortOrder
    theme_sentence?: SortOrder
    description?: SortOrder
    description_points?: SortOrder
    strength_keywords?: SortOrder
    weakness_keywords?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PersonalityTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    type_code?: SortOrder
    type_name?: SortOrder
    title?: SortOrder
    theme_sentence?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PersonalityTypesMinOrderByAggregateInput = {
    id?: SortOrder
    type_code?: SortOrder
    type_name?: SortOrder
    title?: SortOrder
    theme_sentence?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PersonalityTypesScalarRelationFilter = {
    is?: PersonalityTypesWhereInput
    isNot?: PersonalityTypesWhereInput
  }

  export type UserAnswersListRelationFilter = {
    every?: UserAnswersWhereInput
    some?: UserAnswersWhereInput
    none?: UserAnswersWhereInput
  }

  export type UserAnswersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionsCountOrderByAggregateInput = {
    id?: SortOrder
    personality_type_id?: SortOrder
    question_text?: SortOrder
    question_order_in_type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuestionsAvgOrderByAggregateInput = {
    id?: SortOrder
    question_order_in_type?: SortOrder
  }

  export type QuestionsMaxOrderByAggregateInput = {
    id?: SortOrder
    personality_type_id?: SortOrder
    question_text?: SortOrder
    question_order_in_type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuestionsMinOrderByAggregateInput = {
    id?: SortOrder
    personality_type_id?: SortOrder
    question_text?: SortOrder
    question_order_in_type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuestionsSumOrderByAggregateInput = {
    id?: SortOrder
    question_order_in_type?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TestResultsNullableScalarRelationFilter = {
    is?: TestResultsWhereInput | null
    isNot?: TestResultsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestAttemptsCountOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    is_completed?: SortOrder
    completion_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TestAttemptsAvgOrderByAggregateInput = {
    completion_time?: SortOrder
  }

  export type TestAttemptsMaxOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    is_completed?: SortOrder
    completion_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TestAttemptsMinOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    is_completed?: SortOrder
    completion_time?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TestAttemptsSumOrderByAggregateInput = {
    completion_time?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TestAttemptsScalarRelationFilter = {
    is?: TestAttemptsWhereInput
    isNot?: TestAttemptsWhereInput
  }

  export type QuestionsScalarRelationFilter = {
    is?: QuestionsWhereInput
    isNot?: QuestionsWhereInput
  }

  export type UserAnswersTest_attempt_idQuestion_idCompoundUniqueInput = {
    test_attempt_id: string
    question_id: number
  }

  export type UserAnswersCountOrderByAggregateInput = {
    id?: SortOrder
    test_attempt_id?: SortOrder
    question_id?: SortOrder
    answer_option?: SortOrder
    score?: SortOrder
    answer_time?: SortOrder
    created_at?: SortOrder
  }

  export type UserAnswersAvgOrderByAggregateInput = {
    question_id?: SortOrder
    score?: SortOrder
    answer_time?: SortOrder
  }

  export type UserAnswersMaxOrderByAggregateInput = {
    id?: SortOrder
    test_attempt_id?: SortOrder
    question_id?: SortOrder
    answer_option?: SortOrder
    score?: SortOrder
    answer_time?: SortOrder
    created_at?: SortOrder
  }

  export type UserAnswersMinOrderByAggregateInput = {
    id?: SortOrder
    test_attempt_id?: SortOrder
    question_id?: SortOrder
    answer_option?: SortOrder
    score?: SortOrder
    answer_time?: SortOrder
    created_at?: SortOrder
  }

  export type UserAnswersSumOrderByAggregateInput = {
    question_id?: SortOrder
    score?: SortOrder
    answer_time?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PersonalityTypesNullableScalarRelationFilter = {
    is?: PersonalityTypesWhereInput | null
    isNot?: PersonalityTypesWhereInput | null
  }

  export type TestResultsCountOrderByAggregateInput = {
    id?: SortOrder
    test_attempt_id?: SortOrder
    primary_personality_type_id?: SortOrder
    total_scores?: SortOrder
    percentage_scores?: SortOrder
    detailed_analysis?: SortOrder
    recommendations?: SortOrder
    share_token?: SortOrder
    is_shared?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TestResultsMaxOrderByAggregateInput = {
    id?: SortOrder
    test_attempt_id?: SortOrder
    primary_personality_type_id?: SortOrder
    share_token?: SortOrder
    is_shared?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TestResultsMinOrderByAggregateInput = {
    id?: SortOrder
    test_attempt_id?: SortOrder
    primary_personality_type_id?: SortOrder
    share_token?: SortOrder
    is_shared?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type QuestionsCreateNestedManyWithoutPersonality_typeInput = {
    create?: XOR<QuestionsCreateWithoutPersonality_typeInput, QuestionsUncheckedCreateWithoutPersonality_typeInput> | QuestionsCreateWithoutPersonality_typeInput[] | QuestionsUncheckedCreateWithoutPersonality_typeInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutPersonality_typeInput | QuestionsCreateOrConnectWithoutPersonality_typeInput[]
    createMany?: QuestionsCreateManyPersonality_typeInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type TestResultsCreateNestedManyWithoutPrimary_personality_typeInput = {
    create?: XOR<TestResultsCreateWithoutPrimary_personality_typeInput, TestResultsUncheckedCreateWithoutPrimary_personality_typeInput> | TestResultsCreateWithoutPrimary_personality_typeInput[] | TestResultsUncheckedCreateWithoutPrimary_personality_typeInput[]
    connectOrCreate?: TestResultsCreateOrConnectWithoutPrimary_personality_typeInput | TestResultsCreateOrConnectWithoutPrimary_personality_typeInput[]
    createMany?: TestResultsCreateManyPrimary_personality_typeInputEnvelope
    connect?: TestResultsWhereUniqueInput | TestResultsWhereUniqueInput[]
  }

  export type QuestionsUncheckedCreateNestedManyWithoutPersonality_typeInput = {
    create?: XOR<QuestionsCreateWithoutPersonality_typeInput, QuestionsUncheckedCreateWithoutPersonality_typeInput> | QuestionsCreateWithoutPersonality_typeInput[] | QuestionsUncheckedCreateWithoutPersonality_typeInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutPersonality_typeInput | QuestionsCreateOrConnectWithoutPersonality_typeInput[]
    createMany?: QuestionsCreateManyPersonality_typeInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type TestResultsUncheckedCreateNestedManyWithoutPrimary_personality_typeInput = {
    create?: XOR<TestResultsCreateWithoutPrimary_personality_typeInput, TestResultsUncheckedCreateWithoutPrimary_personality_typeInput> | TestResultsCreateWithoutPrimary_personality_typeInput[] | TestResultsUncheckedCreateWithoutPrimary_personality_typeInput[]
    connectOrCreate?: TestResultsCreateOrConnectWithoutPrimary_personality_typeInput | TestResultsCreateOrConnectWithoutPrimary_personality_typeInput[]
    createMany?: TestResultsCreateManyPrimary_personality_typeInputEnvelope
    connect?: TestResultsWhereUniqueInput | TestResultsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestionsUpdateManyWithoutPersonality_typeNestedInput = {
    create?: XOR<QuestionsCreateWithoutPersonality_typeInput, QuestionsUncheckedCreateWithoutPersonality_typeInput> | QuestionsCreateWithoutPersonality_typeInput[] | QuestionsUncheckedCreateWithoutPersonality_typeInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutPersonality_typeInput | QuestionsCreateOrConnectWithoutPersonality_typeInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutPersonality_typeInput | QuestionsUpsertWithWhereUniqueWithoutPersonality_typeInput[]
    createMany?: QuestionsCreateManyPersonality_typeInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutPersonality_typeInput | QuestionsUpdateWithWhereUniqueWithoutPersonality_typeInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutPersonality_typeInput | QuestionsUpdateManyWithWhereWithoutPersonality_typeInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type TestResultsUpdateManyWithoutPrimary_personality_typeNestedInput = {
    create?: XOR<TestResultsCreateWithoutPrimary_personality_typeInput, TestResultsUncheckedCreateWithoutPrimary_personality_typeInput> | TestResultsCreateWithoutPrimary_personality_typeInput[] | TestResultsUncheckedCreateWithoutPrimary_personality_typeInput[]
    connectOrCreate?: TestResultsCreateOrConnectWithoutPrimary_personality_typeInput | TestResultsCreateOrConnectWithoutPrimary_personality_typeInput[]
    upsert?: TestResultsUpsertWithWhereUniqueWithoutPrimary_personality_typeInput | TestResultsUpsertWithWhereUniqueWithoutPrimary_personality_typeInput[]
    createMany?: TestResultsCreateManyPrimary_personality_typeInputEnvelope
    set?: TestResultsWhereUniqueInput | TestResultsWhereUniqueInput[]
    disconnect?: TestResultsWhereUniqueInput | TestResultsWhereUniqueInput[]
    delete?: TestResultsWhereUniqueInput | TestResultsWhereUniqueInput[]
    connect?: TestResultsWhereUniqueInput | TestResultsWhereUniqueInput[]
    update?: TestResultsUpdateWithWhereUniqueWithoutPrimary_personality_typeInput | TestResultsUpdateWithWhereUniqueWithoutPrimary_personality_typeInput[]
    updateMany?: TestResultsUpdateManyWithWhereWithoutPrimary_personality_typeInput | TestResultsUpdateManyWithWhereWithoutPrimary_personality_typeInput[]
    deleteMany?: TestResultsScalarWhereInput | TestResultsScalarWhereInput[]
  }

  export type QuestionsUncheckedUpdateManyWithoutPersonality_typeNestedInput = {
    create?: XOR<QuestionsCreateWithoutPersonality_typeInput, QuestionsUncheckedCreateWithoutPersonality_typeInput> | QuestionsCreateWithoutPersonality_typeInput[] | QuestionsUncheckedCreateWithoutPersonality_typeInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutPersonality_typeInput | QuestionsCreateOrConnectWithoutPersonality_typeInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutPersonality_typeInput | QuestionsUpsertWithWhereUniqueWithoutPersonality_typeInput[]
    createMany?: QuestionsCreateManyPersonality_typeInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutPersonality_typeInput | QuestionsUpdateWithWhereUniqueWithoutPersonality_typeInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutPersonality_typeInput | QuestionsUpdateManyWithWhereWithoutPersonality_typeInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type TestResultsUncheckedUpdateManyWithoutPrimary_personality_typeNestedInput = {
    create?: XOR<TestResultsCreateWithoutPrimary_personality_typeInput, TestResultsUncheckedCreateWithoutPrimary_personality_typeInput> | TestResultsCreateWithoutPrimary_personality_typeInput[] | TestResultsUncheckedCreateWithoutPrimary_personality_typeInput[]
    connectOrCreate?: TestResultsCreateOrConnectWithoutPrimary_personality_typeInput | TestResultsCreateOrConnectWithoutPrimary_personality_typeInput[]
    upsert?: TestResultsUpsertWithWhereUniqueWithoutPrimary_personality_typeInput | TestResultsUpsertWithWhereUniqueWithoutPrimary_personality_typeInput[]
    createMany?: TestResultsCreateManyPrimary_personality_typeInputEnvelope
    set?: TestResultsWhereUniqueInput | TestResultsWhereUniqueInput[]
    disconnect?: TestResultsWhereUniqueInput | TestResultsWhereUniqueInput[]
    delete?: TestResultsWhereUniqueInput | TestResultsWhereUniqueInput[]
    connect?: TestResultsWhereUniqueInput | TestResultsWhereUniqueInput[]
    update?: TestResultsUpdateWithWhereUniqueWithoutPrimary_personality_typeInput | TestResultsUpdateWithWhereUniqueWithoutPrimary_personality_typeInput[]
    updateMany?: TestResultsUpdateManyWithWhereWithoutPrimary_personality_typeInput | TestResultsUpdateManyWithWhereWithoutPrimary_personality_typeInput[]
    deleteMany?: TestResultsScalarWhereInput | TestResultsScalarWhereInput[]
  }

  export type PersonalityTypesCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<PersonalityTypesCreateWithoutQuestionsInput, PersonalityTypesUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: PersonalityTypesCreateOrConnectWithoutQuestionsInput
    connect?: PersonalityTypesWhereUniqueInput
  }

  export type UserAnswersCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput> | UserAnswersCreateWithoutQuestionInput[] | UserAnswersUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuestionInput | UserAnswersCreateOrConnectWithoutQuestionInput[]
    createMany?: UserAnswersCreateManyQuestionInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type UserAnswersUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput> | UserAnswersCreateWithoutQuestionInput[] | UserAnswersUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuestionInput | UserAnswersCreateOrConnectWithoutQuestionInput[]
    createMany?: UserAnswersCreateManyQuestionInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PersonalityTypesUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<PersonalityTypesCreateWithoutQuestionsInput, PersonalityTypesUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: PersonalityTypesCreateOrConnectWithoutQuestionsInput
    upsert?: PersonalityTypesUpsertWithoutQuestionsInput
    connect?: PersonalityTypesWhereUniqueInput
    update?: XOR<XOR<PersonalityTypesUpdateToOneWithWhereWithoutQuestionsInput, PersonalityTypesUpdateWithoutQuestionsInput>, PersonalityTypesUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserAnswersUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput> | UserAnswersCreateWithoutQuestionInput[] | UserAnswersUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuestionInput | UserAnswersCreateOrConnectWithoutQuestionInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutQuestionInput | UserAnswersUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserAnswersCreateManyQuestionInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutQuestionInput | UserAnswersUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutQuestionInput | UserAnswersUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type UserAnswersUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput> | UserAnswersCreateWithoutQuestionInput[] | UserAnswersUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutQuestionInput | UserAnswersCreateOrConnectWithoutQuestionInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutQuestionInput | UserAnswersUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserAnswersCreateManyQuestionInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutQuestionInput | UserAnswersUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutQuestionInput | UserAnswersUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type UserAnswersCreateNestedManyWithoutTest_attemptInput = {
    create?: XOR<UserAnswersCreateWithoutTest_attemptInput, UserAnswersUncheckedCreateWithoutTest_attemptInput> | UserAnswersCreateWithoutTest_attemptInput[] | UserAnswersUncheckedCreateWithoutTest_attemptInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutTest_attemptInput | UserAnswersCreateOrConnectWithoutTest_attemptInput[]
    createMany?: UserAnswersCreateManyTest_attemptInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type TestResultsCreateNestedOneWithoutTest_attemptInput = {
    create?: XOR<TestResultsCreateWithoutTest_attemptInput, TestResultsUncheckedCreateWithoutTest_attemptInput>
    connectOrCreate?: TestResultsCreateOrConnectWithoutTest_attemptInput
    connect?: TestResultsWhereUniqueInput
  }

  export type UserAnswersUncheckedCreateNestedManyWithoutTest_attemptInput = {
    create?: XOR<UserAnswersCreateWithoutTest_attemptInput, UserAnswersUncheckedCreateWithoutTest_attemptInput> | UserAnswersCreateWithoutTest_attemptInput[] | UserAnswersUncheckedCreateWithoutTest_attemptInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutTest_attemptInput | UserAnswersCreateOrConnectWithoutTest_attemptInput[]
    createMany?: UserAnswersCreateManyTest_attemptInputEnvelope
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
  }

  export type TestResultsUncheckedCreateNestedOneWithoutTest_attemptInput = {
    create?: XOR<TestResultsCreateWithoutTest_attemptInput, TestResultsUncheckedCreateWithoutTest_attemptInput>
    connectOrCreate?: TestResultsCreateOrConnectWithoutTest_attemptInput
    connect?: TestResultsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserAnswersUpdateManyWithoutTest_attemptNestedInput = {
    create?: XOR<UserAnswersCreateWithoutTest_attemptInput, UserAnswersUncheckedCreateWithoutTest_attemptInput> | UserAnswersCreateWithoutTest_attemptInput[] | UserAnswersUncheckedCreateWithoutTest_attemptInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutTest_attemptInput | UserAnswersCreateOrConnectWithoutTest_attemptInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutTest_attemptInput | UserAnswersUpsertWithWhereUniqueWithoutTest_attemptInput[]
    createMany?: UserAnswersCreateManyTest_attemptInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutTest_attemptInput | UserAnswersUpdateWithWhereUniqueWithoutTest_attemptInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutTest_attemptInput | UserAnswersUpdateManyWithWhereWithoutTest_attemptInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type TestResultsUpdateOneWithoutTest_attemptNestedInput = {
    create?: XOR<TestResultsCreateWithoutTest_attemptInput, TestResultsUncheckedCreateWithoutTest_attemptInput>
    connectOrCreate?: TestResultsCreateOrConnectWithoutTest_attemptInput
    upsert?: TestResultsUpsertWithoutTest_attemptInput
    disconnect?: TestResultsWhereInput | boolean
    delete?: TestResultsWhereInput | boolean
    connect?: TestResultsWhereUniqueInput
    update?: XOR<XOR<TestResultsUpdateToOneWithWhereWithoutTest_attemptInput, TestResultsUpdateWithoutTest_attemptInput>, TestResultsUncheckedUpdateWithoutTest_attemptInput>
  }

  export type UserAnswersUncheckedUpdateManyWithoutTest_attemptNestedInput = {
    create?: XOR<UserAnswersCreateWithoutTest_attemptInput, UserAnswersUncheckedCreateWithoutTest_attemptInput> | UserAnswersCreateWithoutTest_attemptInput[] | UserAnswersUncheckedCreateWithoutTest_attemptInput[]
    connectOrCreate?: UserAnswersCreateOrConnectWithoutTest_attemptInput | UserAnswersCreateOrConnectWithoutTest_attemptInput[]
    upsert?: UserAnswersUpsertWithWhereUniqueWithoutTest_attemptInput | UserAnswersUpsertWithWhereUniqueWithoutTest_attemptInput[]
    createMany?: UserAnswersCreateManyTest_attemptInputEnvelope
    set?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    disconnect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    delete?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    connect?: UserAnswersWhereUniqueInput | UserAnswersWhereUniqueInput[]
    update?: UserAnswersUpdateWithWhereUniqueWithoutTest_attemptInput | UserAnswersUpdateWithWhereUniqueWithoutTest_attemptInput[]
    updateMany?: UserAnswersUpdateManyWithWhereWithoutTest_attemptInput | UserAnswersUpdateManyWithWhereWithoutTest_attemptInput[]
    deleteMany?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
  }

  export type TestResultsUncheckedUpdateOneWithoutTest_attemptNestedInput = {
    create?: XOR<TestResultsCreateWithoutTest_attemptInput, TestResultsUncheckedCreateWithoutTest_attemptInput>
    connectOrCreate?: TestResultsCreateOrConnectWithoutTest_attemptInput
    upsert?: TestResultsUpsertWithoutTest_attemptInput
    disconnect?: TestResultsWhereInput | boolean
    delete?: TestResultsWhereInput | boolean
    connect?: TestResultsWhereUniqueInput
    update?: XOR<XOR<TestResultsUpdateToOneWithWhereWithoutTest_attemptInput, TestResultsUpdateWithoutTest_attemptInput>, TestResultsUncheckedUpdateWithoutTest_attemptInput>
  }

  export type TestAttemptsCreateNestedOneWithoutUser_answersInput = {
    create?: XOR<TestAttemptsCreateWithoutUser_answersInput, TestAttemptsUncheckedCreateWithoutUser_answersInput>
    connectOrCreate?: TestAttemptsCreateOrConnectWithoutUser_answersInput
    connect?: TestAttemptsWhereUniqueInput
  }

  export type QuestionsCreateNestedOneWithoutUser_answersInput = {
    create?: XOR<QuestionsCreateWithoutUser_answersInput, QuestionsUncheckedCreateWithoutUser_answersInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutUser_answersInput
    connect?: QuestionsWhereUniqueInput
  }

  export type TestAttemptsUpdateOneRequiredWithoutUser_answersNestedInput = {
    create?: XOR<TestAttemptsCreateWithoutUser_answersInput, TestAttemptsUncheckedCreateWithoutUser_answersInput>
    connectOrCreate?: TestAttemptsCreateOrConnectWithoutUser_answersInput
    upsert?: TestAttemptsUpsertWithoutUser_answersInput
    connect?: TestAttemptsWhereUniqueInput
    update?: XOR<XOR<TestAttemptsUpdateToOneWithWhereWithoutUser_answersInput, TestAttemptsUpdateWithoutUser_answersInput>, TestAttemptsUncheckedUpdateWithoutUser_answersInput>
  }

  export type QuestionsUpdateOneRequiredWithoutUser_answersNestedInput = {
    create?: XOR<QuestionsCreateWithoutUser_answersInput, QuestionsUncheckedCreateWithoutUser_answersInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutUser_answersInput
    upsert?: QuestionsUpsertWithoutUser_answersInput
    connect?: QuestionsWhereUniqueInput
    update?: XOR<XOR<QuestionsUpdateToOneWithWhereWithoutUser_answersInput, QuestionsUpdateWithoutUser_answersInput>, QuestionsUncheckedUpdateWithoutUser_answersInput>
  }

  export type TestAttemptsCreateNestedOneWithoutTest_resultInput = {
    create?: XOR<TestAttemptsCreateWithoutTest_resultInput, TestAttemptsUncheckedCreateWithoutTest_resultInput>
    connectOrCreate?: TestAttemptsCreateOrConnectWithoutTest_resultInput
    connect?: TestAttemptsWhereUniqueInput
  }

  export type PersonalityTypesCreateNestedOneWithoutTest_results_primaryInput = {
    create?: XOR<PersonalityTypesCreateWithoutTest_results_primaryInput, PersonalityTypesUncheckedCreateWithoutTest_results_primaryInput>
    connectOrCreate?: PersonalityTypesCreateOrConnectWithoutTest_results_primaryInput
    connect?: PersonalityTypesWhereUniqueInput
  }

  export type TestAttemptsUpdateOneRequiredWithoutTest_resultNestedInput = {
    create?: XOR<TestAttemptsCreateWithoutTest_resultInput, TestAttemptsUncheckedCreateWithoutTest_resultInput>
    connectOrCreate?: TestAttemptsCreateOrConnectWithoutTest_resultInput
    upsert?: TestAttemptsUpsertWithoutTest_resultInput
    connect?: TestAttemptsWhereUniqueInput
    update?: XOR<XOR<TestAttemptsUpdateToOneWithWhereWithoutTest_resultInput, TestAttemptsUpdateWithoutTest_resultInput>, TestAttemptsUncheckedUpdateWithoutTest_resultInput>
  }

  export type PersonalityTypesUpdateOneWithoutTest_results_primaryNestedInput = {
    create?: XOR<PersonalityTypesCreateWithoutTest_results_primaryInput, PersonalityTypesUncheckedCreateWithoutTest_results_primaryInput>
    connectOrCreate?: PersonalityTypesCreateOrConnectWithoutTest_results_primaryInput
    upsert?: PersonalityTypesUpsertWithoutTest_results_primaryInput
    disconnect?: PersonalityTypesWhereInput | boolean
    delete?: PersonalityTypesWhereInput | boolean
    connect?: PersonalityTypesWhereUniqueInput
    update?: XOR<XOR<PersonalityTypesUpdateToOneWithWhereWithoutTest_results_primaryInput, PersonalityTypesUpdateWithoutTest_results_primaryInput>, PersonalityTypesUncheckedUpdateWithoutTest_results_primaryInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QuestionsCreateWithoutPersonality_typeInput = {
    question_text: string
    question_order_in_type?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_answers?: UserAnswersCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateWithoutPersonality_typeInput = {
    id?: number
    question_text: string
    question_order_in_type?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_answers?: UserAnswersUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsCreateOrConnectWithoutPersonality_typeInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutPersonality_typeInput, QuestionsUncheckedCreateWithoutPersonality_typeInput>
  }

  export type QuestionsCreateManyPersonality_typeInputEnvelope = {
    data: QuestionsCreateManyPersonality_typeInput | QuestionsCreateManyPersonality_typeInput[]
    skipDuplicates?: boolean
  }

  export type TestResultsCreateWithoutPrimary_personality_typeInput = {
    id?: string
    total_scores: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: string | null
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    test_attempt: TestAttemptsCreateNestedOneWithoutTest_resultInput
  }

  export type TestResultsUncheckedCreateWithoutPrimary_personality_typeInput = {
    id?: string
    test_attempt_id: string
    total_scores: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: string | null
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TestResultsCreateOrConnectWithoutPrimary_personality_typeInput = {
    where: TestResultsWhereUniqueInput
    create: XOR<TestResultsCreateWithoutPrimary_personality_typeInput, TestResultsUncheckedCreateWithoutPrimary_personality_typeInput>
  }

  export type TestResultsCreateManyPrimary_personality_typeInputEnvelope = {
    data: TestResultsCreateManyPrimary_personality_typeInput | TestResultsCreateManyPrimary_personality_typeInput[]
    skipDuplicates?: boolean
  }

  export type QuestionsUpsertWithWhereUniqueWithoutPersonality_typeInput = {
    where: QuestionsWhereUniqueInput
    update: XOR<QuestionsUpdateWithoutPersonality_typeInput, QuestionsUncheckedUpdateWithoutPersonality_typeInput>
    create: XOR<QuestionsCreateWithoutPersonality_typeInput, QuestionsUncheckedCreateWithoutPersonality_typeInput>
  }

  export type QuestionsUpdateWithWhereUniqueWithoutPersonality_typeInput = {
    where: QuestionsWhereUniqueInput
    data: XOR<QuestionsUpdateWithoutPersonality_typeInput, QuestionsUncheckedUpdateWithoutPersonality_typeInput>
  }

  export type QuestionsUpdateManyWithWhereWithoutPersonality_typeInput = {
    where: QuestionsScalarWhereInput
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyWithoutPersonality_typeInput>
  }

  export type QuestionsScalarWhereInput = {
    AND?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
    OR?: QuestionsScalarWhereInput[]
    NOT?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
    id?: IntFilter<"Questions"> | number
    personality_type_id?: UuidFilter<"Questions"> | string
    question_text?: StringFilter<"Questions"> | string
    question_order_in_type?: IntFilter<"Questions"> | number
    is_active?: BoolFilter<"Questions"> | boolean
    created_at?: DateTimeFilter<"Questions"> | Date | string
    updated_at?: DateTimeFilter<"Questions"> | Date | string
  }

  export type TestResultsUpsertWithWhereUniqueWithoutPrimary_personality_typeInput = {
    where: TestResultsWhereUniqueInput
    update: XOR<TestResultsUpdateWithoutPrimary_personality_typeInput, TestResultsUncheckedUpdateWithoutPrimary_personality_typeInput>
    create: XOR<TestResultsCreateWithoutPrimary_personality_typeInput, TestResultsUncheckedCreateWithoutPrimary_personality_typeInput>
  }

  export type TestResultsUpdateWithWhereUniqueWithoutPrimary_personality_typeInput = {
    where: TestResultsWhereUniqueInput
    data: XOR<TestResultsUpdateWithoutPrimary_personality_typeInput, TestResultsUncheckedUpdateWithoutPrimary_personality_typeInput>
  }

  export type TestResultsUpdateManyWithWhereWithoutPrimary_personality_typeInput = {
    where: TestResultsScalarWhereInput
    data: XOR<TestResultsUpdateManyMutationInput, TestResultsUncheckedUpdateManyWithoutPrimary_personality_typeInput>
  }

  export type TestResultsScalarWhereInput = {
    AND?: TestResultsScalarWhereInput | TestResultsScalarWhereInput[]
    OR?: TestResultsScalarWhereInput[]
    NOT?: TestResultsScalarWhereInput | TestResultsScalarWhereInput[]
    id?: UuidFilter<"TestResults"> | string
    test_attempt_id?: UuidFilter<"TestResults"> | string
    primary_personality_type_id?: UuidNullableFilter<"TestResults"> | string | null
    total_scores?: JsonFilter<"TestResults">
    percentage_scores?: JsonNullableFilter<"TestResults">
    detailed_analysis?: JsonNullableFilter<"TestResults">
    recommendations?: JsonNullableFilter<"TestResults">
    share_token?: StringNullableFilter<"TestResults"> | string | null
    is_shared?: BoolFilter<"TestResults"> | boolean
    created_at?: DateTimeFilter<"TestResults"> | Date | string
    updated_at?: DateTimeFilter<"TestResults"> | Date | string
  }

  export type PersonalityTypesCreateWithoutQuestionsInput = {
    id?: string
    type_code: string
    type_name: string
    title: string
    theme_sentence: string
    description: string
    description_points: JsonNullValueInput | InputJsonValue
    strength_keywords: JsonNullValueInput | InputJsonValue
    weakness_keywords: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    test_results_primary?: TestResultsCreateNestedManyWithoutPrimary_personality_typeInput
  }

  export type PersonalityTypesUncheckedCreateWithoutQuestionsInput = {
    id?: string
    type_code: string
    type_name: string
    title: string
    theme_sentence: string
    description: string
    description_points: JsonNullValueInput | InputJsonValue
    strength_keywords: JsonNullValueInput | InputJsonValue
    weakness_keywords: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    test_results_primary?: TestResultsUncheckedCreateNestedManyWithoutPrimary_personality_typeInput
  }

  export type PersonalityTypesCreateOrConnectWithoutQuestionsInput = {
    where: PersonalityTypesWhereUniqueInput
    create: XOR<PersonalityTypesCreateWithoutQuestionsInput, PersonalityTypesUncheckedCreateWithoutQuestionsInput>
  }

  export type UserAnswersCreateWithoutQuestionInput = {
    id?: string
    answer_option?: string | null
    score: number
    answer_time?: number | null
    created_at?: Date | string
    test_attempt: TestAttemptsCreateNestedOneWithoutUser_answersInput
  }

  export type UserAnswersUncheckedCreateWithoutQuestionInput = {
    id?: string
    test_attempt_id: string
    answer_option?: string | null
    score: number
    answer_time?: number | null
    created_at?: Date | string
  }

  export type UserAnswersCreateOrConnectWithoutQuestionInput = {
    where: UserAnswersWhereUniqueInput
    create: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput>
  }

  export type UserAnswersCreateManyQuestionInputEnvelope = {
    data: UserAnswersCreateManyQuestionInput | UserAnswersCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type PersonalityTypesUpsertWithoutQuestionsInput = {
    update: XOR<PersonalityTypesUpdateWithoutQuestionsInput, PersonalityTypesUncheckedUpdateWithoutQuestionsInput>
    create: XOR<PersonalityTypesCreateWithoutQuestionsInput, PersonalityTypesUncheckedCreateWithoutQuestionsInput>
    where?: PersonalityTypesWhereInput
  }

  export type PersonalityTypesUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: PersonalityTypesWhereInput
    data: XOR<PersonalityTypesUpdateWithoutQuestionsInput, PersonalityTypesUncheckedUpdateWithoutQuestionsInput>
  }

  export type PersonalityTypesUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type_code?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    theme_sentence?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_points?: JsonNullValueInput | InputJsonValue
    strength_keywords?: JsonNullValueInput | InputJsonValue
    weakness_keywords?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_results_primary?: TestResultsUpdateManyWithoutPrimary_personality_typeNestedInput
  }

  export type PersonalityTypesUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type_code?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    theme_sentence?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_points?: JsonNullValueInput | InputJsonValue
    strength_keywords?: JsonNullValueInput | InputJsonValue
    weakness_keywords?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_results_primary?: TestResultsUncheckedUpdateManyWithoutPrimary_personality_typeNestedInput
  }

  export type UserAnswersUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserAnswersWhereUniqueInput
    update: XOR<UserAnswersUpdateWithoutQuestionInput, UserAnswersUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserAnswersCreateWithoutQuestionInput, UserAnswersUncheckedCreateWithoutQuestionInput>
  }

  export type UserAnswersUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserAnswersWhereUniqueInput
    data: XOR<UserAnswersUpdateWithoutQuestionInput, UserAnswersUncheckedUpdateWithoutQuestionInput>
  }

  export type UserAnswersUpdateManyWithWhereWithoutQuestionInput = {
    where: UserAnswersScalarWhereInput
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserAnswersScalarWhereInput = {
    AND?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
    OR?: UserAnswersScalarWhereInput[]
    NOT?: UserAnswersScalarWhereInput | UserAnswersScalarWhereInput[]
    id?: UuidFilter<"UserAnswers"> | string
    test_attempt_id?: UuidFilter<"UserAnswers"> | string
    question_id?: IntFilter<"UserAnswers"> | number
    answer_option?: StringNullableFilter<"UserAnswers"> | string | null
    score?: IntFilter<"UserAnswers"> | number
    answer_time?: IntNullableFilter<"UserAnswers"> | number | null
    created_at?: DateTimeFilter<"UserAnswers"> | Date | string
  }

  export type UserAnswersCreateWithoutTest_attemptInput = {
    id?: string
    answer_option?: string | null
    score: number
    answer_time?: number | null
    created_at?: Date | string
    question: QuestionsCreateNestedOneWithoutUser_answersInput
  }

  export type UserAnswersUncheckedCreateWithoutTest_attemptInput = {
    id?: string
    question_id: number
    answer_option?: string | null
    score: number
    answer_time?: number | null
    created_at?: Date | string
  }

  export type UserAnswersCreateOrConnectWithoutTest_attemptInput = {
    where: UserAnswersWhereUniqueInput
    create: XOR<UserAnswersCreateWithoutTest_attemptInput, UserAnswersUncheckedCreateWithoutTest_attemptInput>
  }

  export type UserAnswersCreateManyTest_attemptInputEnvelope = {
    data: UserAnswersCreateManyTest_attemptInput | UserAnswersCreateManyTest_attemptInput[]
    skipDuplicates?: boolean
  }

  export type TestResultsCreateWithoutTest_attemptInput = {
    id?: string
    total_scores: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: string | null
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    primary_personality_type?: PersonalityTypesCreateNestedOneWithoutTest_results_primaryInput
  }

  export type TestResultsUncheckedCreateWithoutTest_attemptInput = {
    id?: string
    primary_personality_type_id?: string | null
    total_scores: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: string | null
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TestResultsCreateOrConnectWithoutTest_attemptInput = {
    where: TestResultsWhereUniqueInput
    create: XOR<TestResultsCreateWithoutTest_attemptInput, TestResultsUncheckedCreateWithoutTest_attemptInput>
  }

  export type UserAnswersUpsertWithWhereUniqueWithoutTest_attemptInput = {
    where: UserAnswersWhereUniqueInput
    update: XOR<UserAnswersUpdateWithoutTest_attemptInput, UserAnswersUncheckedUpdateWithoutTest_attemptInput>
    create: XOR<UserAnswersCreateWithoutTest_attemptInput, UserAnswersUncheckedCreateWithoutTest_attemptInput>
  }

  export type UserAnswersUpdateWithWhereUniqueWithoutTest_attemptInput = {
    where: UserAnswersWhereUniqueInput
    data: XOR<UserAnswersUpdateWithoutTest_attemptInput, UserAnswersUncheckedUpdateWithoutTest_attemptInput>
  }

  export type UserAnswersUpdateManyWithWhereWithoutTest_attemptInput = {
    where: UserAnswersScalarWhereInput
    data: XOR<UserAnswersUpdateManyMutationInput, UserAnswersUncheckedUpdateManyWithoutTest_attemptInput>
  }

  export type TestResultsUpsertWithoutTest_attemptInput = {
    update: XOR<TestResultsUpdateWithoutTest_attemptInput, TestResultsUncheckedUpdateWithoutTest_attemptInput>
    create: XOR<TestResultsCreateWithoutTest_attemptInput, TestResultsUncheckedCreateWithoutTest_attemptInput>
    where?: TestResultsWhereInput
  }

  export type TestResultsUpdateToOneWithWhereWithoutTest_attemptInput = {
    where?: TestResultsWhereInput
    data: XOR<TestResultsUpdateWithoutTest_attemptInput, TestResultsUncheckedUpdateWithoutTest_attemptInput>
  }

  export type TestResultsUpdateWithoutTest_attemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_scores?: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    primary_personality_type?: PersonalityTypesUpdateOneWithoutTest_results_primaryNestedInput
  }

  export type TestResultsUncheckedUpdateWithoutTest_attemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    primary_personality_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    total_scores?: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAttemptsCreateWithoutUser_answersInput = {
    id?: string
    session_id?: string | null
    user_name?: string | null
    user_email?: string | null
    ip_address?: string | null
    user_agent?: string | null
    is_completed?: boolean
    completion_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    test_result?: TestResultsCreateNestedOneWithoutTest_attemptInput
  }

  export type TestAttemptsUncheckedCreateWithoutUser_answersInput = {
    id?: string
    session_id?: string | null
    user_name?: string | null
    user_email?: string | null
    ip_address?: string | null
    user_agent?: string | null
    is_completed?: boolean
    completion_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    test_result?: TestResultsUncheckedCreateNestedOneWithoutTest_attemptInput
  }

  export type TestAttemptsCreateOrConnectWithoutUser_answersInput = {
    where: TestAttemptsWhereUniqueInput
    create: XOR<TestAttemptsCreateWithoutUser_answersInput, TestAttemptsUncheckedCreateWithoutUser_answersInput>
  }

  export type QuestionsCreateWithoutUser_answersInput = {
    question_text: string
    question_order_in_type?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    personality_type: PersonalityTypesCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionsUncheckedCreateWithoutUser_answersInput = {
    id?: number
    personality_type_id: string
    question_text: string
    question_order_in_type?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuestionsCreateOrConnectWithoutUser_answersInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutUser_answersInput, QuestionsUncheckedCreateWithoutUser_answersInput>
  }

  export type TestAttemptsUpsertWithoutUser_answersInput = {
    update: XOR<TestAttemptsUpdateWithoutUser_answersInput, TestAttemptsUncheckedUpdateWithoutUser_answersInput>
    create: XOR<TestAttemptsCreateWithoutUser_answersInput, TestAttemptsUncheckedCreateWithoutUser_answersInput>
    where?: TestAttemptsWhereInput
  }

  export type TestAttemptsUpdateToOneWithWhereWithoutUser_answersInput = {
    where?: TestAttemptsWhereInput
    data: XOR<TestAttemptsUpdateWithoutUser_answersInput, TestAttemptsUncheckedUpdateWithoutUser_answersInput>
  }

  export type TestAttemptsUpdateWithoutUser_answersInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    completion_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_result?: TestResultsUpdateOneWithoutTest_attemptNestedInput
  }

  export type TestAttemptsUncheckedUpdateWithoutUser_answersInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    completion_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_result?: TestResultsUncheckedUpdateOneWithoutTest_attemptNestedInput
  }

  export type QuestionsUpsertWithoutUser_answersInput = {
    update: XOR<QuestionsUpdateWithoutUser_answersInput, QuestionsUncheckedUpdateWithoutUser_answersInput>
    create: XOR<QuestionsCreateWithoutUser_answersInput, QuestionsUncheckedCreateWithoutUser_answersInput>
    where?: QuestionsWhereInput
  }

  export type QuestionsUpdateToOneWithWhereWithoutUser_answersInput = {
    where?: QuestionsWhereInput
    data: XOR<QuestionsUpdateWithoutUser_answersInput, QuestionsUncheckedUpdateWithoutUser_answersInput>
  }

  export type QuestionsUpdateWithoutUser_answersInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    question_order_in_type?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    personality_type?: PersonalityTypesUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutUser_answersInput = {
    id?: IntFieldUpdateOperationsInput | number
    personality_type_id?: StringFieldUpdateOperationsInput | string
    question_text?: StringFieldUpdateOperationsInput | string
    question_order_in_type?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestAttemptsCreateWithoutTest_resultInput = {
    id?: string
    session_id?: string | null
    user_name?: string | null
    user_email?: string | null
    ip_address?: string | null
    user_agent?: string | null
    is_completed?: boolean
    completion_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    user_answers?: UserAnswersCreateNestedManyWithoutTest_attemptInput
  }

  export type TestAttemptsUncheckedCreateWithoutTest_resultInput = {
    id?: string
    session_id?: string | null
    user_name?: string | null
    user_email?: string | null
    ip_address?: string | null
    user_agent?: string | null
    is_completed?: boolean
    completion_time?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    user_answers?: UserAnswersUncheckedCreateNestedManyWithoutTest_attemptInput
  }

  export type TestAttemptsCreateOrConnectWithoutTest_resultInput = {
    where: TestAttemptsWhereUniqueInput
    create: XOR<TestAttemptsCreateWithoutTest_resultInput, TestAttemptsUncheckedCreateWithoutTest_resultInput>
  }

  export type PersonalityTypesCreateWithoutTest_results_primaryInput = {
    id?: string
    type_code: string
    type_name: string
    title: string
    theme_sentence: string
    description: string
    description_points: JsonNullValueInput | InputJsonValue
    strength_keywords: JsonNullValueInput | InputJsonValue
    weakness_keywords: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionsCreateNestedManyWithoutPersonality_typeInput
  }

  export type PersonalityTypesUncheckedCreateWithoutTest_results_primaryInput = {
    id?: string
    type_code: string
    type_name: string
    title: string
    theme_sentence: string
    description: string
    description_points: JsonNullValueInput | InputJsonValue
    strength_keywords: JsonNullValueInput | InputJsonValue
    weakness_keywords: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionsUncheckedCreateNestedManyWithoutPersonality_typeInput
  }

  export type PersonalityTypesCreateOrConnectWithoutTest_results_primaryInput = {
    where: PersonalityTypesWhereUniqueInput
    create: XOR<PersonalityTypesCreateWithoutTest_results_primaryInput, PersonalityTypesUncheckedCreateWithoutTest_results_primaryInput>
  }

  export type TestAttemptsUpsertWithoutTest_resultInput = {
    update: XOR<TestAttemptsUpdateWithoutTest_resultInput, TestAttemptsUncheckedUpdateWithoutTest_resultInput>
    create: XOR<TestAttemptsCreateWithoutTest_resultInput, TestAttemptsUncheckedCreateWithoutTest_resultInput>
    where?: TestAttemptsWhereInput
  }

  export type TestAttemptsUpdateToOneWithWhereWithoutTest_resultInput = {
    where?: TestAttemptsWhereInput
    data: XOR<TestAttemptsUpdateWithoutTest_resultInput, TestAttemptsUncheckedUpdateWithoutTest_resultInput>
  }

  export type TestAttemptsUpdateWithoutTest_resultInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    completion_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_answers?: UserAnswersUpdateManyWithoutTest_attemptNestedInput
  }

  export type TestAttemptsUncheckedUpdateWithoutTest_resultInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    completion_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_answers?: UserAnswersUncheckedUpdateManyWithoutTest_attemptNestedInput
  }

  export type PersonalityTypesUpsertWithoutTest_results_primaryInput = {
    update: XOR<PersonalityTypesUpdateWithoutTest_results_primaryInput, PersonalityTypesUncheckedUpdateWithoutTest_results_primaryInput>
    create: XOR<PersonalityTypesCreateWithoutTest_results_primaryInput, PersonalityTypesUncheckedCreateWithoutTest_results_primaryInput>
    where?: PersonalityTypesWhereInput
  }

  export type PersonalityTypesUpdateToOneWithWhereWithoutTest_results_primaryInput = {
    where?: PersonalityTypesWhereInput
    data: XOR<PersonalityTypesUpdateWithoutTest_results_primaryInput, PersonalityTypesUncheckedUpdateWithoutTest_results_primaryInput>
  }

  export type PersonalityTypesUpdateWithoutTest_results_primaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type_code?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    theme_sentence?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_points?: JsonNullValueInput | InputJsonValue
    strength_keywords?: JsonNullValueInput | InputJsonValue
    weakness_keywords?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionsUpdateManyWithoutPersonality_typeNestedInput
  }

  export type PersonalityTypesUncheckedUpdateWithoutTest_results_primaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type_code?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    theme_sentence?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    description_points?: JsonNullValueInput | InputJsonValue
    strength_keywords?: JsonNullValueInput | InputJsonValue
    weakness_keywords?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionsUncheckedUpdateManyWithoutPersonality_typeNestedInput
  }

  export type QuestionsCreateManyPersonality_typeInput = {
    id?: number
    question_text: string
    question_order_in_type?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TestResultsCreateManyPrimary_personality_typeInput = {
    id?: string
    test_attempt_id: string
    total_scores: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: string | null
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuestionsUpdateWithoutPersonality_typeInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    question_order_in_type?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_answers?: UserAnswersUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutPersonality_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_order_in_type?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_answers?: UserAnswersUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateManyWithoutPersonality_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_order_in_type?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultsUpdateWithoutPrimary_personality_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_scores?: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_attempt?: TestAttemptsUpdateOneRequiredWithoutTest_resultNestedInput
  }

  export type TestResultsUncheckedUpdateWithoutPrimary_personality_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_attempt_id?: StringFieldUpdateOperationsInput | string
    total_scores?: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultsUncheckedUpdateManyWithoutPrimary_personality_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_attempt_id?: StringFieldUpdateOperationsInput | string
    total_scores?: JsonNullValueInput | InputJsonValue
    percentage_scores?: NullableJsonNullValueInput | InputJsonValue
    detailed_analysis?: NullableJsonNullValueInput | InputJsonValue
    recommendations?: NullableJsonNullValueInput | InputJsonValue
    share_token?: NullableStringFieldUpdateOperationsInput | string | null
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersCreateManyQuestionInput = {
    id?: string
    test_attempt_id: string
    answer_option?: string | null
    score: number
    answer_time?: number | null
    created_at?: Date | string
  }

  export type UserAnswersUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer_option?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    answer_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    test_attempt?: TestAttemptsUpdateOneRequiredWithoutUser_answersNestedInput
  }

  export type UserAnswersUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_attempt_id?: StringFieldUpdateOperationsInput | string
    answer_option?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    answer_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_attempt_id?: StringFieldUpdateOperationsInput | string
    answer_option?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    answer_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersCreateManyTest_attemptInput = {
    id?: string
    question_id: number
    answer_option?: string | null
    score: number
    answer_time?: number | null
    created_at?: Date | string
  }

  export type UserAnswersUpdateWithoutTest_attemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer_option?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    answer_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionsUpdateOneRequiredWithoutUser_answersNestedInput
  }

  export type UserAnswersUncheckedUpdateWithoutTest_attemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_id?: IntFieldUpdateOperationsInput | number
    answer_option?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    answer_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswersUncheckedUpdateManyWithoutTest_attemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_id?: IntFieldUpdateOperationsInput | number
    answer_option?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    answer_time?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}