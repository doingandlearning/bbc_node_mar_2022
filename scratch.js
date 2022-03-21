// Error Codes

// Custom Errors

function errorCodeCreator(message, code) {
  const error = Error(message);
  error.code = code;
  return error;
}

class MustBeNumber extends Error {
  code = "ERR_MUST_BE_NUMBER";

  constructor(message) {
    super(message);
  }

  get name() {
    return `MustBeNumber (${this.code})`;
  }
}

function doTask(num) {
  if (typeof num !== "number") {
    throw new MustBeNumber("Must be a number", "ERR_MUST_BE_NUMBER");
  }
  if (num <= 0) throw new RangeError("Number needs to be greater than zero.");
  if (num % 2) throw new Error("Number needs to be even");

  return num / 2;
}

try {
  const result = doTask(true);
  console.log(result);
} catch (error) {
  if (error.code === "ERR_VALUE_MUST_BE_NUMBER") {
    console.log("This a TypeError. Add one vote to the TypeScript migration.");
  } else {
    console.log("Unhandled error: ", error);
  }
}
