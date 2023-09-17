import handleAsync from "./async";

const [error, result] = await handleAsync({
  errorsAsValues: true,
  success: true,
});

console.log({ error, result });
