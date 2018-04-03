const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

Given("the calculator is cleared", function() {
  // Write code here that turns the phrase above into concrete actions
  this.clearCalculator();
});

When("I add {int} and {int}", function(arg1, arg2) {
  //Write code here that turns the phrase above into concrete actions
  this.add(arg1).add(arg2);
});

When("I subtract {int} from {int}", function(arg1, arg2) {
  // we deliberately switch arg2 and arg1 here because of the order of operation
  // arg1 subtracted from arg2, so "arg2 minus arg1"
  this.add(arg2);
  this.substract(arg1);
});

When("then add {int}", function(arg) {
  this.add(arg);
});

When("then subtract {int}", function(arg) {
  this.substract(arg);
});

Then("the result should be {int}", function(arg) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.result()).to.eql(arg);
});
