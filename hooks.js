'use strict';

var { Before, After, setDefaultTimeout } = require('cucumber');
var { browser } = require('protractor');
var supertest = require('supertest');
var modules = require('./modules.js');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(90 * 10000);


Before(async () => {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchonization = true;
    await browser.driver.session_.then(function (sessionData) {
        console.log("BrowserStackTraceId: " + sessionData.id_);
    });
});

After(async () => {
    console.log("SubmissionId: " + modules.uwp.id.value);
    await supertest.agent(modules.environmentVariables.urls(modules.environment.env).internaluwp)
        .delete(modules.uwp.id.value)
        .set("Authorization", modules.environmentVariables.cp_auth(modules.environment.env).cpAuth)
        .set("X-Partner-Id", "cytora")
        .set("X-Delete-Key", modules.environmentVariables.delete_key(modules.environment.env).delete_key)
        .then(async (res) => {
            expect(res.statusCode).to.equal(200);
        });
});