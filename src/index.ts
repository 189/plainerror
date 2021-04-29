export type AsyncCaller<P> = (...args: any[]) => Promise<P>;

export default function plainError<T, E = {}>(
  caller: AsyncCaller<T>,
  context?: any
) {
  return function wrapped(...args: any[]): Promise<[Error | null, T]> {
    return (caller.apply(context, args) as Promise<T>).then(
      (res: T) => {
        return [null, res] as [null, T];
      },
      (err: Error & E) => {
        return [err, {}] as [Error & E, T];
      }
    );
  };
}
