module.exports = class Calc {
  constructor() {
    this._arg1 = 0;
    this._arg2 = 0;
  }

  clearCalculator() {}

  setArguments(arg1, arg2) {
    this._arg1 = arg1;
    this._arg2 = arg2;
  }

  add() {
    return this._arg1 + this._arg2;
  }
};
