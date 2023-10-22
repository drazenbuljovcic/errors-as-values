// import withErrorsAsValues from "../..";
import withCatch from "../withCatch.sync";

const outputFunction = (arg1) => {
  return {
    success: true,
    arg1,
  };
};

const callOutputWithCatchAndBindArgs = (...args) => {
  return withCatch(outputFunction.bind(null, ...args));
};

export default callOutputWithCatchAndBindArgs;
