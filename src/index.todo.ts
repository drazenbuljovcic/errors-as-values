// type AsSync = <T>() => T;
// type AsAsync = <T>() => Promise<T>;

// type Values = [Error | null, Output | null];

type ErrorsAsValues = <E, O>(fn: () => O) => [E | null, O | null];

// TODO
// type ErrorsAsValuesAsync<E, O> = (fn: () => O) => Promise<[E | null, O | null]>;

// change back to async
// const withErrorsAsValues: ErrorsAsValues = <E, O>(fn: () => unknown) => {
//   let error = null;
//   let output: unknown;

//   if (!(fn instanceof Function)) {
//     error = new Error("fn is not a function");
//     return [error as E, output as O];
//   }

//   // asyncFunction instanceof AsyncFunction
//   const isAsyncFn = fn.constructor.name === "AsyncFunction";
//   console.log({ isAsyncFn });

//   try {
//     const result = fn();
//     const isPromise = result instanceof Promise;

//     let awaitedResult;
//     if (result instanceof Promise) {
//       // return await
//       awaitedResult = result;

//       output = awaitedResult;
//     }

//     if (result instanceof Error) {
//       error = result;
//     } else {
//       output = !isPromise ? result : awaitedResult;
//     }
//   } catch (thrown) {
//     error = thrown;
//   }

//   return [error as E, output as O];
// };

// type IsAsync<IsAsync extends boolean> = IsAsync extends true
//   ? Promise<unknown>
//   : unknown;

// type ReturnType<B extends boolean> = B extends true ? Promise<unknown> : unknown;

// unknown | Promise<unknown>
const determineAgnostic = <F extends CallableFunction>(
  fn: F
): { callable: F; isAsync: boolean } => {
  const isAsyncFn = fn.constructor.name === "AsyncFunction";

  // ts always resolves to a sync function
  const cb = isAsyncFn ? async () => await fn() : () => fn();
  // { isAsync: true , fn }
  // { isAsync: false , fn }
  return { callable: fn, isAsync: isAsyncFn };
  // return cb as () => unknown;
};

// necessary layer of wrapping
// returning a function
// unknown | Promise<unknown>
const withAsyncAgnostic = (fn: ErrorsAsValues) =>
  determineAgnostic(fn).callable;

export { withAsyncAgnostic };
export default withAsyncAgnostic(withErrorsAsValues);

type Output = {
  data: unknown;
};
type Error = {
  message: string;
};
const [error, output] = withErrorsAsValues<Error, Output>(() => {
  throw new Error("error");
});

console.log({ error, output });

type SyncError = {
  message: unknown | "Unknown";
};

type SyncOutput = {
  data: Record<string, unknown>;
};

const awaitSync = async () => {
  const p = () =>
    new Promise<SyncOutput>((resolve) =>
      setTimeout(() => resolve({ data: {} }), 1000)
    );

  const [error, output] = await withErrorsAsValues<SyncError, SyncOutput>(
    // TODO: fix type on async function
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    p as () => SyncOutput
  );
  console.log({ error, output });
};
void awaitSync();
