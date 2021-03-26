const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  else if (Object.prototype.toString.call(date) === "[object Date]") {
    let season = String(date).split(" ");
    season = season[1];
    if (season.length != 3) {
      throw "THROWN";
    }
    let result;
    let seasons = {
      winter: ["winter", "Dec", "Jan", "Feb"],
      summer: ["summer", "Aug", "Jul", "Jun"],
      spring: ["spring", "Mar", "Apr", "May"],
      autumn: ["autumn", "Sep", "Oct", "Nov"],
    };
    for (let key in seasons) {
      seasons[key].forEach((elem) => {
        if (season == elem) {
          result = seasons[key][0];
        }
      });
    }
    if (result == undefined || result == null) {
      throw "THROWN";
    }
    return result;
  } else throw "THROWN";
};
