const assert = require('assert');
const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');
const By = require('selenium-webdriver').By;

let browser;

test.describe('Register Heading', function() {
  test.beforeEach(function(done) {
    this.timeout(20000);
    browser = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.firefox())
      .build();

    browser.get('http://127.0.0.1:3000/register');
    done();
  });

  test.afterEach(function(done) {
    browser.quit();
    done();
  });

  test.it('Test that register heading matches Register', function(done) {
    browser.findElement(By.className('title')).then(function(element) {
      element.getText().then(function(text) {
        assert.equal(text, 'register');
      });
    });

    done();
  });
});
