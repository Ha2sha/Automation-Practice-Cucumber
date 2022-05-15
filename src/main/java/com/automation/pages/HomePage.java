package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log =LogManager.getLogger(HomePage.class.getName());
    public HomePage() {
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement womenLink;

    @CacheLookup
    @FindBy(xpath = "//li[@class='sfHover']//a[@title='Dresses'][normalize-space()='Dresses']")
    WebElement dressesLink;

    @CacheLookup
    @FindBy(xpath = "//li[@class='sfHover']//a[@title='T-shirts'][normalize-space()='T-shirts']")
    WebElement tShirtsLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    WebElement signInLink;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='My Store']")
    WebElement logoLink;

    public void clickWomenLink() {
        log.info("Clicking on Women Tab. ");
        clickOnElement(womenLink);
    }
      public void clickSignInLink() {
        log.info("Clicking on Sign in Link ");
        clickOnElement(signInLink);
    }

    public void checkSignInLinkIsDisplayed(){
        log.info("Verifying signIn is displayed: "+signInLink.isDisplayed());
        verifyThatElementIsDisplayed(signInLink);

    }
}
