var { Given, When, Then, setDefaultTimeout } = require("cucumber");
var modules = require("../../modules.js");
setDefaultTimeout(90 * 10000);

Given(/^I allocate the submission to myself$/, async () => {
    await modules.uwp.filterByOwner("Unassigned");
    await modules.uwp.tableLoad();
    await modules.uwp.assignSubmission(modules.environmentVariables.data(modules.environment.env).userId);
    await modules.uwp.filterByOwner("My assignments");
});