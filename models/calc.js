module.exports = class Calc {
  constructor() {
    this._arg1 = 0;
    this._arg2 = 0;
  }

  clearCalculator() {
    this.currentSum = 0;
  }

  setArguments(arg1, arg2) {
    this._arg1 = arg1;
    this._arg2 = arg2;
  }

  add() {
    this.currentSum = this._arg1 + this._arg2;
  }

  substract() {
    this.currentSum = this._arg1 - this._arg2;
  }

  result() {
    return this.currentSum;
  }
};
