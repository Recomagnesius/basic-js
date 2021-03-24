const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season = String(date).split(" ");
  season = date[2];
  let seasons = {
    winter: ["winter", "Dec", "Jan", "Feb"],
    summer: ["summer", "Aug", "Jul", "Jun"],
    spring: ["spring", "Mar", "Apr", "May"],
    autumn: ["autumn", "Sep", "Oct", "Nov"],
  };
  for (let key in seasons) {
    seasons[key].forEach((elem) => {
      if (season == elem) {
        return seasons[key][0];
      }
    });
  }
};
