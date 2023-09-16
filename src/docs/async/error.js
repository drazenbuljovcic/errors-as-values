import withCatchAsync from "../withCatch.async";

const asyncErrorFunction = async () => {
  return new Promise((_, reject) =>
    setTimeout(() => reject({ error: true }), 2000)
  );
};

const callAsyncOutputWithCatchAndBindArgs = (...args) => {
  return withCatchAsync(asyncErrorFunction.bind(null, ...args));
};

export default callAsyncOutputWithCatchAndBindArgs;
