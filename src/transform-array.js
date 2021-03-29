const CustomError = require("../extensions/custom-error");

const rule = {
  "--double-next": 1,
  "--double-prev": 2,
  "--discard-next": 3,
  "--discard-prev": 4
};

module.exports = function transform(ar) {
  if(Array.isArray(ar) === false) {
    throw new Error();
  }

  const result = [];

  for(let i = 0; i < ar.length; i += 1) {
    if(rule[ar[i]]) {
      switch(rule[ar[i]]) {
        case 1:
          if(i < ar.length - 1) {
            result.push(ar[i + 1]);
          }
          break;
        case 2:
          if(i > 0) {
            result.push(result[result.length - 1]);
          }
          break;
        case 3:
          if(i < ar.length) {
            result.push(undefined);
            i += 1;
          }
          break;
        case 4:
          if(i > 0) {
            result.pop();
          }
          break;
      }
    } else {
      result.push(ar[i]);
    }
  }
  const res = result.filter(function(x) {
    return x !== undefined;
  });
  return res;
};
