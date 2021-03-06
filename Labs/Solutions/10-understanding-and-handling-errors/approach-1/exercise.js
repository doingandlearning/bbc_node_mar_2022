"use strict";

/*
 * 1. Write a function that calls its callback with an error if called with invalid arguments
 *
 * Fill in the body of the function `combinedLength`, which should execute the given
 * callback with (null, the combined length of two arrays) if it receives correct
 * arguments, and  otherwise should execute its callback with (an appropriate error).
 */

/**
 * Calculates the combined length of two arrays
 * @param   {Array}     a  First array
 * @param   {Array}     b  Second array
 * @param   {Function}  cb Callback
 * @returns {undefined}    Nothing
 */
export const combinedLength = (a, b, cb) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    cb(new TypeError("Both of the first arguments need to be arrays."));
    return;
  }

  if (typeof cb !== "function") {
    cb(new TypeError("The third parameter needs to be a function."));
    return;
  }

  cb(null, a.length + b.length);
  // CODE HERE
};

/*
 * 2. Write a function that sums the numbers in an array and calls its
 *    callback with an error if called with invalid arguments
 *
 * Fill in the body of the function `sumArray`, which should execute the given
 * callback with (null, the sum of all the elements in the input array). If it
 * receives incorrect arguments, it should execute its callback with (an error).
 *
 * Note that all elements of the input array must be numbers.
 */

/**
 * Sums numbers in an array
 * @param   {Array}    xs list of numbers
 * @param   {Function} cb Callback
 * @returns {undefined}   Nothing
 */
export const sumArray = (xs, cb) => {
  if (!Array.isArray(xs)) {
    cb(new TypeError("Need to pass an array of numbers."));
    return;
  }

  if (xs.filter((item) => typeof item !== "number").length > 0) {
    cb(new TypeError("All elements in the array need to be numbers."));
    return;
  }

  const sum = xs.reduce((a, c) => a + c, 0);
  cb(null, sum);
  //CODE HERE
};

/*
 * 3. Write a function that handles errors returned by (1) and (2)
 *
 * Fill in the body of the function `combineAndPrint`, which should find the
 * combined length of two arrays and the total sum of all their elements.
 * If an error occurs, the function should instead print a useful message
 * explaining what went wrong.
 */

/**
 * Returns a string of the format
 *   "Combined length: L; Combined sum of elements: S"
 * Where L is the combined length of the two arrays and S is the sum of the elements of the array
 *
 * The function should use `combinedLength`. In the case of invalid inputs, the
 * function should return the string
 *   "Invalid arguments: both arguments must be arrays"
 * @param   {Array}    a  First array
 * @param   {Array}    b  Second array
 * @param   {Function} cb Callback
 * @returns {undefined}   Nothing
 */
export const combineAndPrint = (a, b, cb) => {
  const errMsg = "Invalid arguments: both arguments must be arrays";

  if (!Array.isArray(a) || !Array.isArray(b)) {
    cb(new Error(errMsg));
    return;
  }

  combinedLength(a, b, (err1, L) => {
    let sumA, sumB;

    sumArray(a, (err, res) => {
      if (err) {
        cb(err);
      }
      sumA = res;
    });

    sumArray(b, (err, res) => {
      if (err) {
        cb(err);
      }
      sumB = res;
    });
    const sum = sumA + sumB;
    cb(null, `Combined length: ${L}; Combined sum of elements: ${sum}`);
    //CODE HERE
  });
};
