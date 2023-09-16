import withCallable from "../..";

const asyncErrorFunction = async (arg1) => {
  console.log(arg1);
  return new Promise((_, reject) =>
    setTimeout(() => reject({ error: true }), 2000)
  );
};

const callAsyncOutputWithCatchAndBindArgs = (...args) => {
  return withCallable(asyncErrorFunction.bind(null, ...args));
};

export default callAsyncOutputWithCatchAndBindArgs;
