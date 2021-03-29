const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof str != 'string') {
    str = String(str);
  }

  let res = [];
  let addResult = [];

  if(!options.separator) {options.separator = "+";}

  if(options.hasOwnProperty("addition")) {
    if(typeof options.addition != 'string') {
      options.addition = String(options.addition);
    }
    if(!options.additionSeparator) {options.additionSeparator = "|";}
    for(let j = 0; j < options.additionRepeatTimes - 1; j += 1) {
      addResult.push(options.addition);
      addResult.push(options.additionSeparator);
    }
    addResult.push(options.addition);
    addResult.push(str);
    str = addResult.reverse().join('');
  }

for(let i = 0; i < options.repeatTimes - 1; i += 1) {
  res.push(str);
  res.push(options.separator);
}
res.push(str);
  
return res.join('');
};
