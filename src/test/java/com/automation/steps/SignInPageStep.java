package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInPageStep {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I click on signIn link$")
    public void iClickOnSignInLink() {
        new HomePage().clickSignInLink();
    }

    @Then("^I should navigate to signIn page successfully$")
    public void iShouldNavigateToSignInPageSuccessfully() {
        Assert.assertEquals("Authentication Text not Displayed","AUTHENTICATION",new SignInPage().getAuthenticationText());
    }


    @And("^I enter invalid username \"([^\"]*)\"$")
    public void iEnterInvalidUsername(String userName) {
      new SignInPage().enterEmailAddress(userName);
    }

    @And("^I enter invalid password \"([^\"]*)\"$")
    public void iEnterInvalidPassword(String password) {
      new SignInPage().enterPassword(password);
    }
    @And("^I click on SignIn Button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^I should get the error message \"([^\"]*)\"$")
    public void iShouldGetTheErrorMessage(String message) {
        String expectedText="There is 1 error\n"+message;
        String actualText=new SignInPage().getErrorAtInvalidSignIn();
        Assert.assertEquals("Invalid Credentials",expectedText,actualText);
    }


    @And("^I enter valid email \"([^\"]*)\"$")
    public void iEnterValidEmail(String email)  {
        new SignInPage().enterEmailAddress(email);
    }

    @And("^I enter valid password \"([^\"]*)\"$")
    public void iEnterValidPassword(String password) {
        new SignInPage().enterPassword(password);
    }

    @Then("^I can successfully signIn$")
    public void iCanSuccessfullySignIn() {
      new SignInPage().checkSignOutLinkIsDisplayed();
    }

    @And("^I click on Sign out Link$")
    public void iClickOnSignOutLink() {
        new SignInPage().clickOnSignOutLink();
    }

    @Then("^I can successfully sign out$")
    public void iCanSuccessfullySignOut() {
        new HomePage().checkSignInLinkIsDisplayed();
    }
}
