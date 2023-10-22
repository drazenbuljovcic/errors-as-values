import withCatch from "../withCatch.sync";

const syncErrorFunction = (callableChecker) => {
  callableChecker();
  throw new Error("This is an error");
};

const callErrorWithCatchAndBindArgs = (...args) => {
  return withCatch(syncErrorFunction.bind(null, ...args));
};

export default callErrorWithCatchAndBindArgs;
