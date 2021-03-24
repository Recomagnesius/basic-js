const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix) return false;
  let result = 0;
  matrix.forEach((elem) => {
    elem.forEach((cat) => {
      if (cat == "^^") ++result;
    });
  });
  return result;
};
