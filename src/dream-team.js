const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  if (members.length == 0) return false;
  let result = [];
  members.forEach((elem) => {
    if (typeof elem != "string") return false;
    else if (!elem) return false;
    elem = elem.replace(/\s+/g, "");
    let name = elem.split("");
    result.push(name[0]);
  });
  result = result.sort().join("").toUpperCase();
  result = result.split("").sort().join("");
  return result;
};
