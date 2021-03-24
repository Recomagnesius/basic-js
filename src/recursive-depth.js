const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let a = 1;
    let array = arr;
    recurse(array);
    function recurse(array) {
      array.forEach((elem) => {
        if (Array.isArray(elem)) {
          a = a + 1;
          recurse(elem);
        }
      });
    }
    return a;
  }
};
