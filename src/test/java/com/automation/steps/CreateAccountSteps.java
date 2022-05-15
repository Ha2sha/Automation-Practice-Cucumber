package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CreateAccountSteps {
    @And("^I enter email for create account \"([^\"]*)\"$")
    public void iEnterEmailForCreateAccount(String email) {
        new SignInPage().enterEmailForCreateAccount(email);
    }
    @And("^I click on create account button$")
    public void iClickOnCreateAccountButton() {
        new SignInPage().clickOnCreateAnAccountButton();
    }

    @And("^I click on male radio button$")
    public void iClickOnMaleRadioButton() {
        new CreateAccountPage().clickOnMrRadioButton();
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstname) {
        new CreateAccountPage().enterFirstName(firstname);
            }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastname) {
        new CreateAccountPage().enterLastName(lastname);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String pass) {
        new CreateAccountPage().enterPassword(pass);
    }

    @And("^I enter address \"([^\"]*)\"$")
    public void iEnterAddress(String address) {
        new CreateAccountPage().enterAddress(address);
    }

    @And("^I enter city \"([^\"]*)\"$")
    public void iEnterCity(String city) {
        new CreateAccountPage().enterCity(city);
    }

    @And("^I select state \"([^\"]*)\"$")
    public void iSelectState(String state) {
        new CreateAccountPage().selectState(state);
    }

    @And("^I select postcode \"([^\"]*)\"$")
    public void iSelectPostcode(String postcode) {
        new CreateAccountPage().enterPosCode(postcode);
    }

    @And("^I select country USA$")
    public void iSelectCountryUSA() {
        new CreateAccountPage().selectCountry();
    }

    @And("^I enter mobile number \"([^\"]*)\"$")
    public void iEnterMobileNumber(String mobile) {
        new CreateAccountPage().enterMobileNumber(mobile);
    }

    @And("^I enter Alias \"([^\"]*)\"$")
    public void iEnterAlias(String alias) {
        new CreateAccountPage().enterAlias(alias);
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickOnRegisterButton();
    }

    @Then("^I can register successfully$")
    public void iCanRegisterSuccessfully() {
      Assert.assertEquals("My Account text is not displayed","MY ACCOUNT",new CreateAccountPage().getMyAccountText());
    }


}
