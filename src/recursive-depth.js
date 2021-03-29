const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) {
      return 1;
    }

    let mx = 1;
    arr.forEach(element => {
      if(Array.isArray(element)) {
        const depthLevel = this.calculateDepth(element) + 1;
        if(mx < depthLevel) {mx = depthLevel;}
      }
    });
    
    return mx;
  }
};
