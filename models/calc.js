module.exports = class Calc {

  constructor() { }

  clearCalculator() {
    this.currentSum = 0;
  }

  add(arg) {
    this.currentSum += arg;
  }

  substract(arg) {
    this.currentSum -= arg;
  }

  result() {
    return this.currentSum;
  }
};
