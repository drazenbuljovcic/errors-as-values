import withCatch from "../withCatch.sync";

const syncErrorFunction = (errorArguments) => {
  console.log({ errorArguments });
  throw new Error("This is an error");
};

const callErrorWithCatchAndBindArgs = (...args) => {
  return withCatch(syncErrorFunction.bind(null, ...args));
};

export default callErrorWithCatchAndBindArgs;
