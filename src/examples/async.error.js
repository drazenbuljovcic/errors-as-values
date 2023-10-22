import withErrorsAsValues from "../withCatch.async";

const asyncErrorFunction = async (arg1) => {
  console.log(arg1);
  return new Promise((_, reject) => reject({ error: true, arg1 }));
};

const callAsyncOutputWithCatchAndBindArgs = (...args) => {
  return withErrorsAsValues(asyncErrorFunction.bind(null, ...args));
};

export default callAsyncOutputWithCatchAndBindArgs;
