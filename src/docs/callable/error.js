import handleAsyncError from "./async.error";

const [error, result] = await handleAsyncError({
  callable: true,
  error: true,
});

console.log({ error, result });
