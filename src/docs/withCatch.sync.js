const withCatch = (fn) => {
  let error = null;
  let output;
  try {
    const result = fn();

    // necessary?
    // + withInstanceCatch
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

export default withCatch;
