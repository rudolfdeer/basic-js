const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity == "string" &&
    Number(sampleActivity) <= 15 &&
    Number(sampleActivity) > 0 &&
    parseInt(sampleActivity) !== NaN
  ) {
    sampleActivity = Number(sampleActivity);
    const log2 = 0.693;

    let time = Math.ceil(
      (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / log2
    );

    return time;
  } else {
    return false;
  }
};
