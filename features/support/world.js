const { setWorldConstructor } = require("cucumber");
const Calc = require("../../models/calc");

// a simple pretend little calculator just to test out cucumber
// takes two numbers, adds them later
class World {
  constructor() {
    this.calc = new Calc();
  }

  clearCalculator() {
    this.calc.clearCalculator();
  }

  add(arg) {
    this.calc.add(arg);
  }

  substract(arg) {
    this.calc.substract(arg);
  }

  result(){
    return this.calc.result();
  }

  doBeforeScenario() {
    console.log("Before scenario prep code");
  }

  doAfterScenario() {
    console.log("After scenario cleanup code");
  }
};

setWorldConstructor(World);
