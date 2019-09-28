const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

let browser;

test.describe("Me Application Title", function() {
    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:3000/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    test.it("Test application title so it matches Me Application", function(done) {
        browser.getTitle().then(function(title) {
            assert.equal(title, "Me Application");
        });

        done();
    });
});

