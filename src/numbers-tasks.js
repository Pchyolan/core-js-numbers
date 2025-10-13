/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(rad) {
  return 2 * rad * Math.PI;
}

function getAverage(val1, val2) {
  if (val1 > Number.MAX_VALUE / 2 || val2 > Number.MAX_VALUE / 2) {
    return val1 / 2 + val2 / 2;
  }
  return (val1 + val2) / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const v1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const v2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  const cos = (x1 * x2 + y1 * y2) / (v1 * v2);
  return Math.acos(cos);
}

function getLastDigit(val) {
  return val % 10;
}

function parseNumberFromString(val) {
  return Number(val);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(nam, pow) {
  const step = 10 ** pow;
  return Math.round(nam / step) * step;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function toNumber(val, def) {
  const num = Number(val);
  return Number.isFinite(num) ? num : def;
}

function getCube(num) {
  return num ** 3;
}

/**
 * Returns the Fibonacci number located at the index position.
 *
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(/* index */) {
  throw new Error('Not implemented');
}

function getSumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}

function getSumOfDigits(num) {
  const arr = Array.from(String(num), Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

function isPowerOfTwo(num) {
  if (num <= 0) return false;
  let num2 = num;
  while (num2 % 2 === 0) {
    num2 /= 2;
  }
  return num2 === 1;
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(num, base) {
  return num.toString(base);
}

function toExponential(num, frac) {
  return num.toExponential(frac);
}

function toFixed(num, frac) {
  return num.toFixed(frac);
}

function toPrecision(num, prec) {
  return num.toPrecision(prec);
}

function getNumberValue(num) {
  return num.valueOf();
}

function isNumber(num) {
  return typeof num === 'number' && Number.isFinite(num);
}

function isInteger(num) {
  return Number.isInteger(num);
}

function getFloatOnString(str) {
  const result = Number.parseFloat(str);
  return Number.isNaN(result) ? NaN : result;
}

function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}

function isSafeInteger(num) {
  return Number.isSafeInteger(num);
}

function roundToSmallestInteger(num) {
  return Math.floor(num);
}

function roundToLargestInteger(num) {
  return Math.ceil(num);
}

function roundToNearestInteger(num) {
  return Math.round(num);
}

function getIntegerPartNumber(num) {
  return Math.trunc(num);
}

/**
 * Returns the sum of numbers.
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(x1, x2, x3) {
  return Number(x1 + x2 + x3).toFixed(10);
}

/**
 * Returns the largest number.
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 *
 * @example:
 * 1, 2   => 2
 * -5, -6 => -5
 * 0, 5   => 5
 */
function getMaxNumber(/* firstNumber, secondNumber */) {
  throw new Error('Not implemented');
}

/**
 * Returns a random integer in the range from min to max.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 *
 * @example:
 * 1, 2  => 1 | 2
 * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
 * -1, 1 => -1 | 0 | 1
 */
function getRandomInteger(/* min, max */) {
  throw new Error('Not implemented');
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(/* a, b */) {
  throw new Error('Not implemented');
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
