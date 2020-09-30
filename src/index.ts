
export type AsyncCaller<P> = (...args: any[]) => Promise<P>;

export default function plainError<T>(caller: AsyncCaller<T>) {
    return function wrapped(...args: any[]): Promise<[Error | null, T]> {
        return (caller.apply(null, args) as Promise<T>).then(
            (res: T) => {
                return [null, res] as [null, T];
            },
            (err: Error) => {
                return [err, {}] as [Error, T];
            }
        );
    };
}