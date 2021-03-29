const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) {
    return "Unable to determine the time of year!";
  }

  const mont = Date.prototype.getMonth.call(date);

  if (1 < mont && mont <= 4) {
    return "spring";
  } else if (4 < mont && mont <= 7) {
    return "summer";
  } else if (7 < mont && mont <= 10) {
    return "autumn";
  } else if (mont === 11 ||
    mont === 0 ||
    mont === 1) {
    return "winter";
  }  
};
