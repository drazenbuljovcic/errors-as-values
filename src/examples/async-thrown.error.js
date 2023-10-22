import withErrorsAsValues from "../withCatch.async";

const asyncErrorFunction = async (callableChecker) => {
  callableChecker();
  throw new Error("This is an error");
};

const callAsyncOutputWithCatchAndBindArgs = (...args) => {
  return withErrorsAsValues(asyncErrorFunction.bind(null, ...args));
};

export default callAsyncOutputWithCatchAndBindArgs;
