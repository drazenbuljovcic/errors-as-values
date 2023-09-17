import withCatch from "../withCatch.sync";

const outputFunction = (outputFunctionArgument1, outputFunctionArgument2) => {
  console.log(outputFunctionArgument1, outputFunctionArgument2);
  return {
    success: true,
  };
};

const callOutputWithCatchAndBindArgs = (...args) => {
  return withCatch(outputFunction.bind(null, ...args));
};

export default callOutputWithCatchAndBindArgs;
