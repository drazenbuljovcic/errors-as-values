import withErrorsAsValues from "../withCatch.async";

const logic = async (callableChecker) => {
  callableChecker();
  new Promise(() => {
    setTimeout(() => {
      throw new Error("This is an error");
    }, 0);
  });
};

const handler = (...args) => {
  return withErrorsAsValues(logic.bind(null, ...args));
};

export default handler;
