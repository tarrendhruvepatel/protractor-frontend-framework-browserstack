var { Given, When, Then, setDefaultTimeout } = require("cucumber");
var modules = require("../../modules.js");
setDefaultTimeout(90 * 10000);

Then(/^I am able to view the ([^"]*) submission information$/, async (submission_type) => {
    await modules.uwp.submissionActionButtons("viewSubmissionActionButton");
    if (submission_type === "company") {
        await modules.uwp.augmentViewTabLabel("companyAugmentTab");
        await modules.uwp.companyAttributesAssertion();
    };
    await modules.uwp.augmentViewTabLabel("propertyAugmentTab");
    await modules.uwp.propertyAttributesAssertion();
    await modules.uwp.augmentViewTabLabel("detailsAugmentTab");
    await modules.uwp.brokerAttributesAssertion();
    await modules.uwp.augmentViewTabLabel("notesAugmentTab");
    await modules.uwp.noteAttributesAssertion();
    await modules.uwp.closeSubmissionDialog();
});