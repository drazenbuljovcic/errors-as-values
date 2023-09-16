import handleAsync from "./async";

const [error, result] = await handleAsync({
  callable: true,
  success: true,
});

console.log({ error, result });
