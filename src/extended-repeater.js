const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  if (
    (typeof options.separator !== "string" && options.separator) ||
    (typeof options.additionSeparator !== "string" && options.additionSeparator)
  ) {
    throw new Error("Separator and additional separator must be a STRING");
  }

  let result = [];

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str);

    if (options.separator == undefined) {
      result.push("+");
    } else {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        result.push(options.addition);
        result.push(options.additionSeparator);
      }
      result.pop();
      result.push(options.separator);
    }
  }
  result.pop();
  return result.join("");
};
