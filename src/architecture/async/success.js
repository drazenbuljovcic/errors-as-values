import withCatchAsync from "../withCatch.async";

const asyncOutputFunction = async (
  asyncOutputFunctionArgument1,
  asyncOutputFunctionArgument2
) => {
  console.log(asyncOutputFunctionArgument1, asyncOutputFunctionArgument2);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true }), 2000)
  );
};

const callAsyncOutputWithCatchAndBindArgs = (...args) => {
  return withCatchAsync(asyncOutputFunction.bind(null, ...args));
};

export default callAsyncOutputWithCatchAndBindArgs;
