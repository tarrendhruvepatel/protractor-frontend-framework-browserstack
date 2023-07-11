var { Given, When, Then, setDefaultTimeout } = require("cucumber");
var modules = require("../../modules.js");
setDefaultTimeout(90 * 10000);

When(/^I click add submission$/, async () => {
    await modules.uwp.createNewSubmissionButton();
});

When(/^I search for a ([^"]*)$/, async (submission_type) => {
    if (submission_type === "company") {
        await modules.uwp.crnSearchFieldInput("11177602");
        await modules.uwp.companySearchButton();
    }
    else if (submission_type === "property") {
        await modules.uwp.createSubmissionBy("searchByProperty");
        await modules.uwp.clientNameFieldInput();
        await modules.uwp.addAdditionalPropertyButton();
        await modules.uwp.addressSearchField();
        await modules.uwp.searchAddressButton();
        await modules.uwp.addressResultSelector();
    };
});

When(/^I complete all the form details required$/, async () => {
    await modules.uwp.selectBrokerage("Other");
    await modules.uwp.selectPrimaryTrade();
    await modules.uwp.annualTurnoverInput();
    await modules.uwp.productSelection();
    await modules.uwp.submissionTargetPremium();
    await modules.uwp.submissionRenewalDate();
    await modules.uwp.addNote();
});

Then(/^I am able to create the ([^"]*) submission$/, async (submission_type) => {
    if (submission_type === "company") {
        await modules.uwp.submitCompanySubmissionButton();
    }
    else if (submission_type === "property") {
        await modules.uwp.submitPropertySubmissionButton();
    };
    await modules.uwp.getSubmissionId();
});

Given(/^I have an active submission ([^"]*)$/, async (appetite) => {
    await modules.uwp.createNewSubmissionButton();
    await modules.uwp.augmentViewTabLabel("companyAugmentTab");
    if (appetite === "in_appetite") {
        await modules.uwp.crnSearchFieldInput("11214117");
    }
    else if (appetite === "out_of_appetite") {
        await modules.uwp.crnSearchFieldInput("11177602");
    };
    await modules.uwp.companySearchButton();
    await modules.uwp.selectBrokerage("Other");
    await modules.uwp.selectPrimaryTrade();
    await modules.uwp.annualTurnoverInput();
    await modules.uwp.productSelection();
    await modules.uwp.submitCompanySubmissionButton();
    await modules.uwp.getSubmissionId();
});
