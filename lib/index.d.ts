export declare type AsyncCaller<P> = (...args: any[]) => Promise<P>;
export default function plainError<T>(caller: AsyncCaller<T>, context?: any): (...args: any[]) => Promise<[Error | null, T]>;