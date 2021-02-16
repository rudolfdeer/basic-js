const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (!arr[i + 1]) break;
        i += 1;
        break;

      case "--discard-prev":
        if (!arr[i - 1] || arr[i - 2] == "--discard-next") break;
        res.pop();
        break;

      case "--double-next":
        if (!arr[i + 1]) break;
        res.push(arr[i + 1]);
        break;

      case "--double-prev":
        if (!arr[i - 1] || arr[i - 2] == "--discard-next") break;
        res.push(arr[i - 1]);
        break;

      default:
        res.push(arr[i]);
    }
  }

  return res;
};
