const CustomError = require("../extensions/custom-error");

const chainMaker = {
  "lk": [],

  getLength() {
    const chainLength = chainMaker.lk.filter(function(x) {
      return x !== undefined;
    });
    return chainLength.length;
  },
  addLink(value) {
    chainMaker.lk.push(value);
    return chainMaker;
  },
  removeLink(position) {
    const clearChain = chainMaker.lk.filter(function(x) {
      return x !== undefined;
    });
    chainMaker.lk = clearChain;

    if(!Number.isInteger(position) ||
      position <= 0 ||
      position > chainMaker.lk.length) {
        chainMaker.lk = [];
        throw new Error();
    }
    chainMaker.lk[position - 1] = undefined;
    return chainMaker;
  },
  reverseChain() {
    chainMaker.lk = chainMaker.lk.reverse();
    return chainMaker;
  },
  finishChain() {
    const clearChain = chainMaker.lk.filter(function(x) {
      return x !== undefined;
    });

    let result = "";
    clearChain.forEach(function (element) {
      result += "( " + element + " )~~";
    });
    chainMaker.lk = [];
    return result.slice(0,-2);
  }
};

module.exports = chainMaker;
