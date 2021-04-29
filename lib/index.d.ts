export declare type AsyncCaller<P> = (...args: any[]) => Promise<P>;
export declare type CustomError<E> = Error & E;
export default function plainError<T, E = {}>(caller: AsyncCaller<T>, context?: any): (...args: any[]) => Promise<[CustomError<E> | null, T]>;
