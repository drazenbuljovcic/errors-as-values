import handleError from "./error";

const [error, result] = await handleError({
  asyncEndpoint: true,
});

console.log({ error, result });
