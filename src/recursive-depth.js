const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let a = 0;
    let depth = 0;

    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        a = this.calculateDepth(arr[i]);

        if (a > depth) {
          depth = a;
          a = 0;
        }
      }
      return depth + 1;
    } else {
      return 0;
    }
  }
};
