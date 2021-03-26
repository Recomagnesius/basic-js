const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw "THROWN";
  let discard;
  let double;
  let ignore;
  let result = [];
  let lastItem;

  arr.forEach((elem, index, arr) => {
    //чекаем команды

    if (typeof elem == "string") {
      let command = elem;
      command = command.split("-");

      if (command[2] == "discard") {
        if (command[3] == "next") {
          discard = index + 1;
          ignore = elem;
        } else if (command[3] == "prev") {
          discard = index - 1;
          ignore = elem;
          result.splice(result.length - 1, 1);
        }
      }
      if (command[2] == "double") {
        if (command[3] == "next") {
          double = index + 1;
          ignore = elem;
        } else if (command[3] == "prev") {
          double = index - 1;
          ignore = elem;
          result.push(lastItem);
        }
      }
    }
    //пушим в массив
    if (elem) {
      if (index != discard && elem != ignore) {
        result.push(elem);
        lastItem = elem;
      } else if (index == double) {
        if (elem) {
          result.push(elem);
          result.push(elem);
          lastItem = elem;
        }
      }
    }
  });
  return result;
};
