module.exports = class Calc {

  constructor() {
    this._currentSum = 0;
  }

  clearCalculator() {
    this._currentSum = 0;
  }

  add(arg) {
    this.currentSum += arg;
  }

  substract(arg) {
    this.currentSum -= arg;
  }

  result() {
    return this._currentSum;
  }
};
