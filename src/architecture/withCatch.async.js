const withCatchAsync = async (fn) => {
  let error = null;
  let output;
  try {
    const result = await fn().catch((thrown) => {
      error = thrown;
    });

    // necessary?
    if (output instanceof Error) {
      error = result;
    } else {
      output = result;
    }
  } catch (thrown) {
    error = thrown;
  }
  return [error, output];
};

export default withCatchAsync;
