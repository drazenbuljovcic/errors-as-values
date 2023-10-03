import withCatch from "./architecture/withCatch.sync";
import withCatchAsync from "./architecture/withCatch.async";

const withErrorsAsValues = async (fn) => {
  let error = null;
  let output;

  if (!(fn instanceof Function)) {
    error = new Error("fn is not a function");
    return [error, output];
  }

  // asyncFunction instanceof AsyncFunction
  const isAsyncFn = fn.constructor.name === "AsyncFunction";
  console.log({ isAsyncFn });

  try {
    const result = fn();
    const isPromise = result instanceof Promise;

    let awaitedResult;
    if (result instanceof Promise) {
      awaitedResult = await result;

      output = awaitedResult;
    }

    if (result instanceof Error) {
      error = result;
    } else {
      output = !isPromise ? result : awaitedResult;
    }
  } catch (thrown) {
    error = thrown;
  }

  return [error, output];
};

// unknown | Promise<unknown>
const determineAgnostic = (fn) => {
  const isAsyncFn = fn.constructor.name === "AsyncFunction";
  console.log({ isAsyncFn });

  const cb = isAsyncFn ? async () => await fn() : () => fn();
  return cb;
};

// necessary layer of wrapping
// returning a function
// unknown | Promise<unknown>
const withAsyncAgnostic = (fn) => determineAgnostic(fn)();

const withErrorsAsValuesSync = withCatch;
const withErrorsAsValuesAsync = withCatchAsync;

export { withAsyncAgnostic, withErrorsAsValuesSync, withErrorsAsValuesAsync };
export default withErrorsAsValues;
