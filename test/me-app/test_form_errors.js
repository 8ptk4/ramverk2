const assert = require('assert');
const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;

let browser;

test.describe('Register form errors', function() {
  test.beforeEach(function(done) {
    browser = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.firefox())
      .build();

    browser.get('http://localhost:3000/register');
    done();
  });

  test.afterEach(function(done) {
    browser.quit();
    done();
  });

  test.beforeEach(function(done) {
    browser.findElement(By.id('button')).then(function(element) {
      element.click();
    });
    done();
  });

  test.it('Check that the button is displayed Submit', function(done) {
    browser.wait(() => {
      return browser.executeScript('return document.readyState').then(state => {
        return state === 'complete';
      });
    });
    browser.findElement(By.id('button')).then(function(element) {
      element.getText().then(function(text) {
        assert.equal(text, 'Submit');
      });
    });
    done();
  });

  test.it(
    'Check that all fields display proper error messages when clicking submit',
    function(done) {
      browser
        .findElement(
          By.xpath('/html/body/div/main/div/div/section/div/form/div[1]/p[1]')
        )
        .then(function(element) {
          element.getText().then(function(text) {
            assert.strictEqual(text, 'Required Name');
          });
        });
      done();

      browser
        .findElement(
          By.xpath('/html/body/div/main/div/div/section/div/form/div[1]/p[2]')
        )
        .then(function(element) {
          element.getText().then(function(text) {
            assert.strictEqual(text, 'Required Email');
          });
        });
      done();

      browser
        .findElement(
          By.xpath('/html/body/div/main/div/div/section/div/form/div[1]/p[3]')
        )
        .then(function(element) {
          element.getText().then(function(text) {
            assert.strictEqual(text, 'Required Password');
          });
        });
      done();
    }
  );
});
