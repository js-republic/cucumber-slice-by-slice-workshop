module.exports = class Calc {

  constructor() {
    this.currentSum = 0;
  }

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
