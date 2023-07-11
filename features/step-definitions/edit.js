var { Given, When, Then, setDefaultTimeout } = require("cucumber");
var supertest = require('supertest');
var modules = require("../../modules.js");
setDefaultTimeout(90 * 10000);
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

When(/^I edit the submission to ([^"]*)$/, async (new_appetite) => {
    await modules.uwp.submissionActionButtons("editSubmissionActionButton");
    if (new_appetite === "in_appetite") {
        await modules.uwp.editSubmissionAppetiteTo("editAppetiteToTrue");
    }
    else if (new_appetite === "out_of_appetite") {
        await modules.uwp.editSubmissionAppetiteTo("editAppetiteToFalse");
    };
    await modules.uwp.appetiteChangeReason();
    await modules.uwp.confirmEditSubmission();
});

Then(/^the submission isInAppetite is changed to ([^"]*)$/, async (boolean) => {
    await supertest.agent(modules.environmentVariables.urls(modules.environment.env).internaluwp)
        .get(modules.uwp.id.value)
        .set("Authorization", modules.environmentVariables.cp_auth(modules.environment.env).cpAuth)
        .set("X-Partner-Id", "acceptance-test")
        .set("X-User-Id", modules.environmentVariables.data(modules.environment.env).userId)
        .then(async (res) => {
            expect(JSON.stringify(res.body.appetite.isInAppetite)).to.equal(boolean);
        });
});