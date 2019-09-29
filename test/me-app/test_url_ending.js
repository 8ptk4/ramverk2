const assert = require('assert');
const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');
const By = require('selenium-webdriver').By;

let browser;

test.describe('Register Url', function() {
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

  test.it('Test that register url is correct', function(done) {
    browser.getCurrentUrl().then(function(url) {
      assert.ok(url.endsWith('/register'));
    });

    done();
  });
});
