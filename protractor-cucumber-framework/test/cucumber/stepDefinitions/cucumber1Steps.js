var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {
  this.Given(/^I run Cucumber with Protractor$/, function(next) {
    next();
  });

  this.Given(/^I go on(?: the website)? "([^"]*)"$/, function(url, next) {
    browser.get(url);
    next();
  });

  this.Then(/^it should still do normal tests$/, function(next) {
    expect(true).to.equal(true);
    next();
  });

  this.Then(/^it should expose the correct global variables$/, function(next) {
    expect(protractor).to.exist;
    expect(browser).to.exist;
    expect(by).to.exist;
    expect(element).to.exist;
    expect($).to.exist;
    next();
  });

  this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
    expect(browser.getTitle())
      .to.eventually.equal(text)
      .and.notify(next);
  });

  this.When(/an uncaught exception is thrown/, function(done) {
    element(by.css('[nuthin-here]'))
      .getText()
      .then(done);
  });
};
