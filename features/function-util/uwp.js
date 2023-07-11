var { browser, protractor } = require("protractor");
var EC = protractor.ExpectedConditions;
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;
var propertiesReader = require('properties-reader');
var el = propertiesReader("./features/properties-util/elements.properties");
var timeout = 60000;
var id = {};

const loginEmailField = (email) => {
  let emailField = element(by.css(el.get("inputEmailField")));
  browser.wait(EC.presenceOf(emailField), timeout);
  browser.wait(EC.visibilityOf(emailField), timeout);
  return emailField.sendKeys(email);
};

const loginPasswordField = (password) => {
  let passwordField = element(by.css(el.get("inputPasswordField")));
  browser.wait(EC.presenceOf(passwordField), timeout);
  browser.wait(EC.visibilityOf(passwordField), timeout);
  return passwordField.sendKeys(password);
};

const loginEmailValidationMessage = (errorMessage) => {
  let validationMessage = element(by.css(el.get("emailValidationMessage")));
  browser.wait(EC.presenceOf(validationMessage), timeout);
  browser.wait(EC.visibilityOf(validationMessage), timeout);
  return expect(validationMessage.getText()).to.equal(errorMessage);
};

const loginPasswordValidationMessage = (errorMessage) => {
  let validationMessage = element(by.css(el.get("passwordValidationMessage")));
  browser.wait(EC.presenceOf(validationMessage), timeout);
  browser.wait(EC.visibilityOf(validationMessage), timeout);
  return expect(validationMessage.getText()).to.equal(errorMessage);
};

const incorrectLoginValidationMessage = (errorMessage) => {
  let incorrectMessage = element(by.css(el.get("incorrectValidationMessage")));
  browser.wait(EC.presenceOf(incorrectMessage), timeout);
  browser.wait(EC.visibilityOf(incorrectMessage), timeout);
  return expect(incorrectMessage.getText()).to.equal(errorMessage);
};

const loginButton = () => {
  return element(by.css(el.get("loginButton"))).click();
};

const isAuthenticated = () => {
  let authentication = element(by.css(el.get("authenticationIsTrue")));
  browser.wait(EC.visibilityOf(authentication), timeout);
  return expect(authentication.isPresent()).to.eventually.be.true;
};

const tableLoad = () => {
  let submissionList = element(by.css(el.get("submissionList")));
  browser.wait(EC.presenceOf(submissionList), timeout);
  browser.wait(EC.visibilityOf(submissionList), timeout);
  let firstRow = element(by.css(el.get("firstSubmissionRow")));
  browser.wait(EC.presenceOf(firstRow), timeout);
  return browser.wait(EC.visibilityOf(firstRow), timeout);
};

const createNewSubmissionButton = () => {
  let createSubmission = element(by.css(el.get("addSubmissionButon")));
  browser.wait(EC.presenceOf(createSubmission), timeout);
  browser.wait(EC.visibilityOf(createSubmission), timeout);
  return createSubmission.click();
};

const createSubmissionBy = (search) => {
  let searchTab = element(by.css(el.get(search)));
  browser.wait(EC.presenceOf(searchTab), timeout);
  browser.wait(EC.visibilityOf(searchTab), timeout);
  return searchTab.click();
};

const crnSearchFieldInput = (crn) => {
  let crnSearch = element(by.css(el.get("inputCrnField")));
  browser.wait(EC.presenceOf(crnSearch), timeout);
  browser.wait(EC.visibilityOf(crnSearch), timeout);
  return crnSearch.sendKeys(crn);
};

const companySearchButton = () => {
  let searchButton = element(by.css(el.get("crnWrapperElement")));
  let button = searchButton.element(by.css(el.get("companySearchButton")));
  browser.wait(EC.presenceOf(button), timeout);
  browser.wait(EC.visibilityOf(button), timeout);
  browser.wait(EC.elementToBeClickable(button), timeout);
  return button.click();
};

const clientNameFieldInput = () => {
  let clientNameField = element(by.css(el.get("inputCompanyNameField")));
  browser.wait(EC.presenceOf(clientNameField), timeout);
  browser.wait(EC.visibilityOf(clientNameField), timeout);
  return clientNameField.sendKeys("Tarren Rules");
};

const clientAddressSearchFieldInput = () => {
  let addressSearch = element(by.css(el.get("inputClientAddressField")));
  browser.wait(EC.presenceOf(addressSearch), timeout);
  browser.wait(EC.visibilityOf(addressSearch), timeout);
  return addressSearch.sendKeys("104 Mosquito Way AL10 9AY");
};

const propertySearchButton = () => {
  let searchButton = element(by.css(el.get("addressWrapperElement")));
  let button = searchButton.element(by.css(el.get("propertySearchButton")));
  browser.wait(EC.presenceOf(button), timeout);
  browser.wait(EC.visibilityOf(button), timeout);
  browser.wait(EC.elementToBeClickable(button), timeout);
  return button.click();
};

const selectAddress = () => {
  let addressResults = element(by.css(el.get("addressResultsReturned")));
  let address = addressResults.element(by.css(el.get("selectAddressFromResult")));
  browser.wait(EC.presenceOf(address), timeout);
  browser.wait(EC.visibilityOf(address), timeout);
  return address.click();
};

const submitCompanySubmissionButton = () => {
  let submitSubmission = element(by.css(el.get("companySubmitButton")));
  browser.wait(EC.presenceOf(submitSubmission), timeout);
  browser.wait(EC.visibilityOf(submitSubmission), timeout);
  submitSubmission.click();

  return browser.wait(EC.invisibilityOf(submitSubmission), timeout);
};

const submitPropertySubmissionButton = () => {
  let submitSubmission = element(by.css(el.get("propertySubmitButton")));
  browser.wait(EC.presenceOf(submitSubmission), timeout);
  browser.wait(EC.visibilityOf(submitSubmission), timeout);
  return submitSubmission.click();
};

const appetiteFilter = (appetite) => {
  let filterButton = element(by.css(el.get("openAppetiteFilterDropdown")));
  browser.wait(EC.presenceOf(filterButton), timeout);
  browser.wait(EC.visibilityOf(filterButton), timeout);
  filterButton.click();

  let filter = element(by.css(el.get(appetite)));
  browser.wait(EC.presenceOf(filter), timeout);
  browser.wait(EC.visibilityOf(filter), timeout);
  return filter.click();
};

const logoutButton = () => {
  let logout = element(by.css(el.get("logoutButton")));
  browser.wait(EC.presenceOf(logout), timeout);
  browser.wait(EC.visibilityOf(logout), timeout);
  browser.wait(EC.elementToBeClickable(logout), timeout);
  return logout.click();
};

const submissionActionButtons = (action) => {
  const rowSelector = `[data-testid="table-row__${id.value}"]`;
  const row = element(by.css(rowSelector));
  browser.wait(EC.presenceOf(row), timeout);
  browser.wait(EC.visibilityOf(row), timeout);

  browser.sleep(1000);
  let tableCellActions = row.element(by.css(el.get("tableCellActions")));
  browser.wait(EC.presenceOf(tableCellActions), timeout);
  browser.wait(EC.visibilityOf(tableCellActions), timeout);

  let submissionAction = tableCellActions.element(by.css(el.get(action)));
  browser.wait(EC.presenceOf(submissionAction), timeout);
  browser.wait(EC.elementToBeClickable(submissionAction), timeout);
  return submissionAction.click();
};

const actionActivity = () => {
  const rowSelector = `[data-testid="table-row__${id.value}"]`;
  const row = element(by.css(rowSelector));
  browser.wait(EC.presenceOf(row), timeout);
  browser.wait(EC.visibilityOf(row), timeout);

  browser.sleep(1000);
  let tableCellActions = row.element(by.css(el.get("tableCellActions")));
  browser.wait(EC.presenceOf(tableCellActions), timeout);
  browser.wait(EC.visibilityOf(tableCellActions), timeout);

  let actionActive = tableCellActions.element(by.css(el.get("activeTrue")));
  browser.wait(EC.presenceOf(actionActive), timeout);
  browser.wait(EC.visibilityOf(actionActive), timeout);
  return expect(actionActive.isPresent()).to.eventually.be.true;
};

const augmentViewTabLabel = (tab) => {
  let button = element(by.css(el.get(tab)));
  browser.wait(EC.presenceOf(button), timeout);
  browser.wait(EC.visibilityOf(button), timeout);
  browser.wait(EC.elementToBeClickable(button), timeout);
  return button.click();
};

const companyAttributesAssertion = () => {
  var tabPane = element(by.css(el.get("companyAttributesPanel")));

  let submissionCompanyField = tabPane.element(by.css(el.get("companyNameAssert")));
  browser.wait(EC.presenceOf(submissionCompanyField), timeout);
  browser.wait(EC.visibilityOf(submissionCompanyField), timeout);
  expect(submissionCompanyField.isPresent()).to.eventually.be.true;

  expect(element(by.css(el.get("companyRegistrationNumberAssert"))).isPresent()).to.eventually.be.true;
  expect(element(by.css(el.get("companyAddressAssert"))).isPresent()).to.eventually.be.true;
  expect(tabPane.element(by.css(el.get("companyMapAssert"))).isPresent()).to.eventually.be.true;
  expect(element(by.css(el.get("companyTradeSection"))).isPresent()).to.eventually.be.true;
  expect(element(by.css(el.get("companyEntitySection"))).isPresent()).to.eventually.be.true;
  expect(element(by.css(el.get("companyFinancialsSection"))).isPresent()).to.eventually.be.true;
  return expect(element(by.css(el.get("companyLegalSection"))).isPresent()).to.eventually.be.true;
};

const propertyAttributesAssertion = () => {
  var tabPane = element(by.css(el.get("propertyAttributesPanel")));

  let submissionCompanyField = tabPane.element(by.css(el.get("propertyNameAssert")));
  browser.wait(EC.presenceOf(submissionCompanyField), timeout);
  browser.wait(EC.visibilityOf(submissionCompanyField), timeout);
  expect(submissionCompanyField.isPresent()).to.eventually.be.true;

  expect(element(by.css(el.get("propertyFullAddressAssert"))).isPresent()).to.eventually.be.true;
  expect(tabPane.element(by.css(el.get("companyMapAssert"))).isPresent()).to.eventually.be.true;
  expect(element(by.css(el.get("propertyOverviewAssert"))).isPresent()).to.eventually.be.true;
  expect(element(by.css(el.get("propertyBuildingAssert"))).isPresent()).to.eventually.be.true;
  return expect(element(by.css(el.get("propertyRiskAssert"))).isPresent()).to.eventually.be.true;
};

const brokerAttributesAssertion = () => {
  var tabPane = element(by.css(el.get("detailsAttributesPanel")));

  let submissionPolicyDetails = tabPane.element(by.css(el.get("detailsPolicyDetailsAssert")));
  browser.wait(EC.presenceOf(submissionPolicyDetails), timeout);
  browser.wait(EC.visibilityOf(submissionPolicyDetails), timeout);
  expect(submissionPolicyDetails.isPresent()).to.eventually.be.true;

  let submissionProducts = tabPane.element(by.css(el.get("detailsProductsAssert")));
  browser.wait(EC.presenceOf(submissionProducts), timeout);
  browser.wait(EC.visibilityOf(submissionProducts), timeout);
  return expect(submissionProducts.isPresent()).to.eventually.be.true;
};

const noteAttributesAssertion = () => {
  var tabPane = element(by.css(el.get("notesAttributesPanel")));

  let submissionCompanyField = tabPane.element(by.css(el.get("companyNameAssert")));
  browser.wait(EC.presenceOf(submissionCompanyField), timeout);
  browser.wait(EC.visibilityOf(submissionCompanyField), timeout);
  expect(submissionCompanyField.isPresent()).to.eventually.be.true;

  var noteContent = element(by.css(el.get("notesContentAssert")));
  browser.wait(EC.presenceOf(noteContent), timeout);
  browser.wait(EC.visibilityOf(noteContent), timeout);
  return expect(noteContent.getText()).to.eventually.equal("Hello world");
};

const closeSubmissionDialog = () => {
  let closeSubmission = element(by.css(el.get("closeSubmissionModal")));
  browser.wait(EC.visibilityOf(closeSubmission), timeout);
  browser.wait(EC.presenceOf(closeSubmission), timeout);
  browser.wait(EC.elementToBeClickable(closeSubmission), timeout);
  return closeSubmission.click();
};

const editSubmissionAppetiteTo = (appetite) => { //true or false
  let editSubmission = element(by.css(el.get(appetite)));
  browser.wait(EC.presenceOf(editSubmission), timeout);
  browser.wait(EC.visibilityOf(editSubmission), timeout);
  return editSubmission.click();
};

const appetiteChangeReason = () => {
  const note = element(by.css(el.get("inputAppetiteReasonField")));
  browser.wait(EC.presenceOf(note), timeout);
  browser.wait(EC.visibilityOf(note), timeout);
  return note.sendKeys("Hello world");
};

const confirmEditSubmission = () => {
  let confirmButton = element(by.css(el.get("confirmEditSubmissionButton")));
  browser.wait(EC.presenceOf(confirmButton), timeout);
  browser.wait(EC.visibilityOf(confirmButton), timeout);
  return confirmButton.click();
};

const actionSubmissionRadioButton = (action) => {
  let radio = element(by.css(el.get(action)));
  browser.wait(EC.presenceOf(radio), timeout);
  browser.wait(EC.visibilityOf(radio), timeout);
  return radio.click();
};

const actioningSubmissionAs = (action) => {
  let actions = element(by.css(el.get(action)));
  browser.wait(EC.presenceOf(actions), timeout);
  browser.wait(EC.visibilityOf(actions), timeout);
  return actions.click();
};

const notificationAppears = (notification) => {
  let notificationMessageContainer = element(by.id("message-bar-container"));
  let notificationMessage = notificationMessageContainer.element(by.css(`div[data-testid=${notification}]`));
  browser.wait(EC.presenceOf(notificationMessageContainer), timeout);
  browser.wait(EC.visibilityOf(notificationMessageContainer), timeout);
  return expect(notificationMessage.isPresent()).to.eventually.be.true;
};

const getSubmissionId = () => {
  let lastCreatedSubmission = element(by.id("last-created-submission"));
  browser.wait(EC.presenceOf(lastCreatedSubmission), timeout);
  return extractId = lastCreatedSubmission.getAttribute("data-submissionid").then(function (subId) {
    id.value = subId;
  });
};

const assertSubmissionInView = () => {
  const rowSelector = `[data-testid="table-row__${id.value}"]`;
  const row = element(by.css(rowSelector));
  browser.wait(EC.presenceOf(row), timeout);
  browser.wait(EC.visibilityOf(row), timeout);
  return expect(row.isPresent()).to.eventually.be.true;
};

const assignSubmission = (owner) => {
  const row = element(by.css(`[data-testid="table-row__${id.value}"]`));
  browser.sleep(1000);
  browser.wait(EC.presenceOf(row), timeout);
  browser.wait(EC.visibilityOf(row), timeout);
  const assignButton = row.element(by.css(el.get("assignSubmissionButton")));
  browser.wait(EC.presenceOf(assignButton), timeout);
  browser.wait(EC.visibilityOf(assignButton), timeout);
  browser.wait(EC.elementToBeClickable(assignButton), timeout);
  assignButton.click();

  const userList = element(by.css(el.get("userListSelector")));
  browser.wait(EC.presenceOf(userList), timeout);
  browser.wait(EC.visibilityOf(userList), timeout);

  const userSelect = element(by.css(`span[data-testid="user-list-item-checkbox-${owner}"] input[type="checkbox"]:not(:checked)`));
  userSelect.click();

  const applyButton = element(by.css(el.get("applyChangesButton")));
  browser.wait(EC.presenceOf(applyButton), timeout);
  browser.wait(EC.visibilityOf(applyButton), timeout);
  browser.wait(EC.elementToBeClickable(applyButton), timeout);
  return applyButton.click();
};

const filterByOwner = (ownerName) => {
  browser.sleep(1000);
  const ownerFilter = element(by.css(el.get("ownFilterSelector")));
  browser.wait(EC.presenceOf(ownerFilter), timeout);
  browser.wait(EC.visibilityOf(ownerFilter), timeout);
  browser.wait(EC.elementToBeClickable(ownerFilter), timeout);
  ownerFilter.click();

  browser.sleep(500);
  const selectedOwner = element(by.cssContainingText(el.get("selectedOwnSelector"), ownerName));
  browser.wait(EC.presenceOf(selectedOwner), timeout);
  browser.wait(EC.visibilityOf(selectedOwner), timeout);
  browser.wait(EC.elementToBeClickable(selectedOwner), timeout);
  return selectedOwner.click();
};

const actionedSubmissionViewList = () => { //active/actioned
  const listView = element(by.css(el.get("topHeaderMenu")));
  browser.wait(EC.presenceOf(listView), timeout);
  browser.wait(EC.visibilityOf(listView), timeout);
  browser.wait(EC.elementToBeClickable(listView), timeout);
  return listView.click();
};

const selectBrokerage = (broker) => {
  const openBrokerageDropdown = element(by.css(el.get("brokerSelectField")));
  browser.wait(EC.presenceOf(openBrokerageDropdown), timeout);
  browser.wait(EC.visibilityOf(openBrokerageDropdown), timeout);
  openBrokerageDropdown.sendKeys(broker);

  const selectBrokerage = element(by.cssContainingText("li", `${broker}`));
  browser.wait(EC.presenceOf(selectBrokerage), timeout);
  browser.wait(EC.visibilityOf(selectBrokerage), timeout);
  browser.wait(EC.elementToBeClickable(selectBrokerage), timeout);
  return selectBrokerage.click();
};

const selectPrimaryTrade = () => {
  browser.sleep(1500);
  const openPrimaryTradeDropdown = element(by.css(el.get("primaryTradeField")));
  browser.wait(EC.presenceOf(openPrimaryTradeDropdown), timeout);
  browser.wait(EC.visibilityOf(openPrimaryTradeDropdown), timeout);
  browser.wait(EC.elementToBeClickable(openPrimaryTradeDropdown), timeout);
  openPrimaryTradeDropdown.click();

  const selectTrade = element(by.css("li[data-testid='menu-option-b12a2a99-3b04-46da-b4f2-19b736259497']"));
  browser.wait(EC.presenceOf(selectTrade), timeout);
  browser.wait(EC.visibilityOf(selectTrade), timeout);
  browser.wait(EC.elementToBeClickable(selectTrade), timeout);
  return selectTrade.click();
};

const annualTurnoverInput = () => {
  const annualTurnover = element(by.css(el.get("inputAnnualTurnoverField")));
  browser.wait(EC.presenceOf(annualTurnover), timeout);
  browser.wait(EC.visibilityOf(annualTurnover), timeout);
  return annualTurnover.sendKeys("25000");
};

const productSelection = () => {
  const productSelect = element(by.css(el.get("productListField")));
  const product = productSelect.element(by.css(el.get("productSelect")));
  browser.wait(EC.presenceOf(product), timeout);
  browser.wait(EC.visibilityOf(product), timeout);
  return product.click();
};

const brokerageContactName = () => {
  const contactName = element(by.css(el.get("inputBrokerageContactNameField")));
  browser.wait(EC.presenceOf(contactName), timeout);
  browser.wait(EC.visibilityOf(contactName), timeout);
  return contactName.sendKeys("Tarren Dhruve Patel");
};

const brokerageContactPhoneNumber = () => {
  const phoneNumber = element(by.css(el.get("inputBrokerageContactPhoneNumberField")));
  browser.wait(EC.presenceOf(phoneNumber), timeout);
  browser.wait(EC.visibilityOf(phoneNumber), timeout);
  return phoneNumber.sendKeys("1234567890");
};

const brokerageContactEmailAddress = () => {
  const emailAddress = element(by.css(el.get("inputBrokerageContactEmailAddress")));
  browser.wait(EC.presenceOf(emailAddress), timeout);
  browser.wait(EC.visibilityOf(emailAddress), timeout);
  return emailAddress.sendKeys("acceptance-test@cytora.com");
};

const submissionTargetPremium = () => {
  const targetPremium = element(by.css(el.get("inputTargetPremiumField")));
  browser.wait(EC.presenceOf(targetPremium), timeout);
  browser.wait(EC.visibilityOf(targetPremium), timeout);
  return targetPremium.sendKeys("100.50");
};

const submissionRenewalDate = () => {
  const renewalField = element(by.css(el.get("renewalDateCalendar")));
  browser.wait(EC.presenceOf(renewalField), timeout);
  browser.wait(EC.visibilityOf(renewalField), timeout);
  renewalField.click();
  // we need above steps because clicking on the calendar button directly, if some other element is focused acts strangely

  const calendarButton = element(by.css(el.get("datePicker")));
  browser.wait(EC.presenceOf(calendarButton), timeout);
  browser.wait(EC.visibilityOf(calendarButton), timeout);
  browser.wait(EC.elementToBeClickable(calendarButton), 12000);
  calendarButton.click();

  const nextMonth = element(by.css(el.get("nextMonth")));
  browser.wait(EC.presenceOf(nextMonth), timeout);
  browser.wait(EC.visibilityOf(nextMonth), timeout);
  browser.wait(EC.elementToBeClickable(nextMonth), 12000);
  nextMonth.click();

  const dayButton = element(by.cssContainingText('.MuiPickersDay-day', '15'));
  browser.wait(EC.presenceOf(dayButton), timeout);
  browser.wait(EC.visibilityOf(dayButton), timeout);
  browser.wait(EC.elementToBeClickable(dayButton), 12000);
  return dayButton.click();
};

const addNote = () => {
  const note = element(by.css(el.get("inputNotesField")));
  browser.wait(EC.presenceOf(note), timeout);
  browser.wait(EC.visibilityOf(note), timeout);
  return note.sendKeys("Hello world");
};

const proceedPremiumAmount = () => {
  const premium = element(by.css(el.get("inputProceedPremiumAmountField")));
  browser.wait(EC.presenceOf(premium), timeout);
  browser.wait(EC.visibilityOf(premium), timeout);
  return premium.sendKeys("100.50");
};

const addAdditionalPropertyButton = () => {
  const addPropertyButton = element(by.css(el.get("addAdditionPropertyButton")));
  browser.wait(EC.presenceOf(addPropertyButton), timeout);
  browser.wait(EC.visibilityOf(addPropertyButton), timeout);
  return addPropertyButton.click();
};

const addressSearchField = () => {
  const searchInput = element(by.css(el.get("inputAddressSearchField")));
  browser.wait(EC.presenceOf(searchInput), timeout);
  browser.wait(EC.visibilityOf(searchInput), timeout);
  return searchInput.sendKeys("2 Errington Close")
};

const searchAddressButton = () => {
  var searchButton = element(by.css(el.get("searchAddressButton")));
  browser.wait(EC.presenceOf(searchButton), timeout);
  browser.wait(EC.visibilityOf(searchButton), timeout);
  return searchButton.click();
};

const addressResultSelector = () => {
  var addressSelect = element(by.css(el.get("selectAddressFromResults")));
  browser.wait(EC.presenceOf(addressSelect), timeout);
  browser.wait(EC.visibilityOf(addressSelect), timeout);
  return addressSelect.click();
};

module.exports = {
  loginEmailField,
  loginPasswordField,
  loginEmailValidationMessage,
  loginPasswordValidationMessage,
  loginButton,
  isAuthenticated,
  createNewSubmissionButton,
  createSubmissionBy,
  crnSearchFieldInput,
  companySearchButton,
  clientNameFieldInput,
  clientAddressSearchFieldInput,
  propertySearchButton,
  selectAddress,
  submitCompanySubmissionButton,
  submitPropertySubmissionButton,
  appetiteFilter,
  logoutButton,
  submissionActionButtons,
  actionActivity,
  actionSubmissionRadioButton,
  augmentViewTabLabel,
  companyAttributesAssertion,
  propertyAttributesAssertion,
  brokerAttributesAssertion,
  noteAttributesAssertion,
  closeSubmissionDialog,
  editSubmissionAppetiteTo,
  appetiteChangeReason,
  confirmEditSubmission,
  incorrectLoginValidationMessage,
  tableLoad,
  actioningSubmissionAs,
  notificationAppears,
  getSubmissionId,
  assertSubmissionInView,
  assignSubmission,
  filterByOwner,
  actionedSubmissionViewList,
  selectBrokerage,
  selectPrimaryTrade,
  annualTurnoverInput,
  productSelection,
  brokerageContactName,
  brokerageContactPhoneNumber,
  brokerageContactEmailAddress,
  submissionTargetPremium,
  submissionRenewalDate,
  addNote,
  proceedPremiumAmount,
  addAdditionalPropertyButton,
  addressSearchField,
  searchAddressButton,
  addressResultSelector,
  id
};
