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

export default withErrorsAsValues;
