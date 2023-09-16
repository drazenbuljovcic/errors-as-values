import success from "./success";

const [error, result] = await success({
  asyncEndpoint: true,
});

console.log({ error, result });
