const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  symmetric(sym) {
    return sym.charCodeAt(0) - "A".charCodeAt(0);
  }

  shift(sym, length) {
    const code = this.symmetric(sym);
    return String.fromCharCode(((code + length) % 26) + "A".charCodeAt(0));
  }

  encrypt(message, key) {
    return this.crypt(message, key, false);
  }

  decrypt(message, key) {
    return this.crypt(message, key, true);
  }

  crypt(message, key, isDecrypt) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }

    key = key.toUpperCase();
    message = message.toUpperCase();

    let res = [];

    let num = 0;
    for (let i = 0; i < message.length; ++i) {
      if (message[i] >= "A" && message[i] <= "Z") {
        if (isDecrypt) {
          res.push(
            this.shift(message[i], 26 - this.symmetric(key[num % key.length]))
          );
        } else {
          res.push(
            this.shift(message[i], this.symmetric(key[num % key.length]))
          );
        }
        num++;
      } else {
        res.push(message[i]);
      }
    }

    if (!this.direct) {
      res.reverse();
    }

    return res.join("");
  }
}

module.exports = VigenereCipheringMachine;
