package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.Random;

public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());
    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailAddress;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Sign in']")
    WebElement signInButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createEmail;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Create an account']")
    WebElement createAnAccountButton;

    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement authenticationText;

    @CacheLookup
    @FindBy(xpath = "//h3[normalize-space()='Create an account']")
    WebElement createAnAccountText;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutLink;

    @CacheLookup
    @FindBy(css = "#center_column>div.alert")
    WebElement invalidSignInErrorMessage;


    public void enterEmailAddress(String username) {
        log.info( "Entering Email Addrsss: " + username );
        sendTextToElement(emailAddress, username);
    }

    public void enterPassword(String password1) {
        log.info("Entering Passowrd: " + password1 );
        sendTextToElement(password, password1);
    }

    public void clickOnSignInButton() {
        log.info( "Clicking on signIn Button. ");
        clickOnElement(signInButton);
    }

    public void enterEmailForCreateAccount(String email1) {
        Random randomGenerator=new Random();
        int randomInt=randomGenerator.nextInt(1000);
        log.info( "Entering email " + randomInt+email1 );
        sendTextToElement(createEmail, randomInt+email1);
    }

    public void clickOnCreateAnAccountButton() {
        log.info( "Clicking on create Account button ");
        clickOnElement(createAnAccountButton);
    }

    public String getAuthenticationText() {
        log.info("Getting Authentication text: " +authenticationText.getText());
        return getTextFromElement(authenticationText);
    }

    public String getCreateAnAccountText() {
        log.info( "Getting create account text: "+createAnAccountText.getText() );
        return getTextFromElement(createAnAccountText);
    }

    public void checkSignOutLinkIsDisplayed() {
        log.info( "Checking signout link is displayed. " +signOutLink.isDisplayed());
        verifyThatElementIsDisplayed(signOutLink);
    }

    public void clickOnSignOutLink() {
        log.info( "Clicking on signout link. " );
        clickOnElement(signOutLink);
    }

    public String getErrorAtInvalidSignIn() {
        log.info( "Getting error message for invalid credentials: "+invalidSignInErrorMessage.getText());
        return getTextFromElement(invalidSignInErrorMessage);
    }


}
