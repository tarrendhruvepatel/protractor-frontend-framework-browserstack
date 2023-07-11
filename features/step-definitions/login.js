var { Given, When, Then, setDefaultTimeout } = require("cucumber");
var modules = require("../../modules.js");
setDefaultTimeout(90 * 10000);

Given(/^I have a Cytora account$/, async () => {
    await modules.url.navigateTo(modules.environmentVariables.urls(modules.environment.env).uwp);
});

Given(/^I am logged in$/, async () => {
    await modules.uwp.loginEmailField(modules.environmentVariables.auth().uwp1Email);
    await modules.uwp.loginPasswordField(modules.environmentVariables.auth().uwp1Password);
    await modules.uwp.loginButton();
    await modules.uwp.isAuthenticated();
});