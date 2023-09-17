import handleAsyncError from "./async.error";

const [error, result] = await handleAsyncError({
  errorsAsValues: true,
  error: true,
});

console.log({ error, result });
