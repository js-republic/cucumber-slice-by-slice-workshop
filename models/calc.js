module.exports = class Calc {
  constructor() {
    this._arg1 = 0;
    this._arg2 = 0;
    this._currentSum = 0;
  }

  clearCalculator() {
    this._currentSum = 0;
  }

  add(_arg) {
    this._currentSum = this._currentSum + _arg;
  }

  substract(_arg) {
    this._currentSum = this._currentSum - _arg;
  }

  result() {
    return this._currentSum;
  }
};
