import withErrorsAsValues from "../withCatch.sync";

const logic = async (callableChecker) => {
  callableChecker();
  setTimeout(() => {
    throw new Error("This is an error");
  }, 0);
};

const handler = (...args) => {
  return withErrorsAsValues(logic.bind(null, ...args));
};

export default handler;
