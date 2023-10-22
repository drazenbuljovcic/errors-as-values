import withErrorsAsValues from "../withCatch.async";

const asyncOutputFunction = async (arg1, arg2) => {
  console.log(arg1, arg2);
  return new Promise((resolve) => resolve({ success: true, arg1, arg2 }));
};

const callAsyncOutputWithCatchAndBindArgs = (...args) => {
  return withErrorsAsValues(asyncOutputFunction.bind(null, ...args));
};

export default callAsyncOutputWithCatchAndBindArgs;
