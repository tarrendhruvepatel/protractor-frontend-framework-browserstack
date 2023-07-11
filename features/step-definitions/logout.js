var { Given, When, Then, setDefaultTimeout } = require("cucumber");
var modules = require("../../modules.js");
setDefaultTimeout(90 * 10000);

Then(/^I am able to logout$/, async () => {
    await modules.uwp.logoutButton();
});