import withCallable from "../..";

const asyncOutputFunction = async (arg1) => {
  console.log(arg1);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true }), 2000)
  );
};

const callAsyncOutputWithCatchAndBindArgs = (...args) => {
  return withCallable(asyncOutputFunction.bind(null, ...args));
};

export default callAsyncOutputWithCatchAndBindArgs;
