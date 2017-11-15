const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

Given("the calculator is clear", function() {
  // Write code here that turns the phrase above into concrete actions
  this.clearCalculator();
});

When("I add {int} and {int}", function(arg1, arg2) {
  //Write code here that turns the phrase above into concrete actions
  this.setArguments(arg1, arg2);
  this.add();
});

When("I subtract {int} from {int}", function(arg1, arg2) {
  // we deliberately switch arg2 and arg1 here because of the order of operation
  // arg1 subtracted from arg2, so "arg2 minus arg1"
  this.setArguments(arg2, arg1);
  this.substract();
});

Then("the result should be {int}", function(arg1) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.result()).to.eql(arg1);
});
