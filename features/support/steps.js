const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

Given("the calculator is clear", function() {
  // Write code here that turns the phrase above into concrete actions
  this.clearCalculator();
});

When("I add {int} and {int}", function(arg1, arg2) {
  //Write code here that turns the phrase above into concrete actions
  this.setArguments(arg1, arg2);
});

Then("the result should be {int}", function(arg1) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.add()).to.eql(arg1);
});
