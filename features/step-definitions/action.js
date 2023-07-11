var { Given, When, Then, setDefaultTimeout } = require("cucumber");
var supertest = require('supertest');
var modules = require("../../modules.js");
setDefaultTimeout(90 * 10000);
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

When(/^I action the submission as ([^"]*)$/, async (action) => {
    await modules.uwp.submissionActionButtons("proceedDeclineOrReferSubmissionActionButton");
    if (action === "declined") {
        await modules.uwp.actionSubmissionRadioButton("declineSubmissionRadioButton");
        await modules.uwp.actioningSubmissionAs("confirmActionButton");
        await modules.uwp.actioningSubmissionAs("declineConfirmButton");
        await modules.uwp.notificationAppears("message-bar-info");
        browser.sleep(1500);
    }
    else if (action === "referred") {
        await modules.uwp.actionSubmissionRadioButton("referSubmissionRadioButton");
        await modules.uwp.actioningSubmissionAs("confirmActionButton");
        await modules.uwp.actioningSubmissionAs("referConfirmButton");
        await modules.uwp.notificationAppears("message-bar-info");
        browser.sleep(1500);
    }
    else if (action === "bound") {
        await modules.uwp.actionSubmissionRadioButton("proceedSubmissionRadioButton");
        await modules.uwp.actioningSubmissionAs("confirmActionButton");
        await modules.uwp.proceedPremiumAmount();
        await modules.uwp.actioningSubmissionAs("proceedConfirmButton");
        await modules.uwp.actionedSubmissionViewList();
        await modules.uwp.submissionActionButtons("confirmBoundSubmissionActionButton");
        browser.sleep(1500);
        await modules.uwp.actionActivity();
    }
    else if (action === "lost") {
        await modules.uwp.actionSubmissionRadioButton("proceedSubmissionRadioButton");
        await modules.uwp.actioningSubmissionAs("confirmActionButton");
        await modules.uwp.proceedPremiumAmount();
        await modules.uwp.actioningSubmissionAs("proceedConfirmButton");
        await modules.uwp.actionedSubmissionViewList();
        await modules.uwp.submissionActionButtons("confirmLostSubmissionActionButton");
        browser.sleep(1500);
        await modules.uwp.actionActivity();
    };
});

Then(/^the submission stage is changed to ([^"]*)$/, async (action) => {
    console.log("SubmissionId: " + modules.uwp.id.value);
    await supertest.agent(modules.environmentVariables.urls(modules.environment.env).internaluwp)
        .get(modules.uwp.id.value)
        .set("Authorization", modules.environmentVariables.cp_auth(modules.environment.env).cpAuth)
        .set("X-Partner-Id", "acceptance-test")
        .set("X-User-Id", modules.environmentVariables.data(modules.environment.env).userId)
        .then(async (res) => {
            expect(res.body.stage).to.equal(action);
        });
});