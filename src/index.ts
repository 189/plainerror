export type AsyncCaller<P> = (...args: any[]) => Promise<P>;
export type CustomError<E> = Error & E;
export default function plainError<T, E = {}>(
  caller: AsyncCaller<T>,
  context?: any
) {
  return function wrapped(...args: any[]): Promise<[CustomError<E> | null, T]> {
    return (caller.apply(context, args) as Promise<T>).then(
      (res: T) => {
        return [null, res] as [null, T];
      },
      (err: CustomError<E>) => {
        return [err, {}] as [CustomError<E>, T];
      }
    );
  };
}
