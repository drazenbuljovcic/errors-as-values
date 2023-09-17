import handleError from "./error";

try {
  const [error, result] = handleError({
    outputFunctionArg2: true,
  });

  console.log({ error, result });
} catch (e) {
  // this is the problem to be avoided
  console.error("Main error thrown!");
}
