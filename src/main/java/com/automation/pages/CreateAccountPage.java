package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());
    public CreateAccountPage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//input[@id='id_gender1']" )
    WebElement mrRadioButton;

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement firstName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//input[@id='address1']")
    WebElement address;

    @CacheLookup
    @FindBy(xpath = "//input[@id='city']")
    WebElement city;

    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement state;

    @CacheLookup
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement postCode;

    @CacheLookup
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement country;

    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobileNumber;

    @CacheLookup
    @FindBy(xpath = "//input[@id='alias']")
    WebElement alias;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Register']")
    WebElement registerButton;

    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement myAccountText;

    public void clickOnMrRadioButton(){
    log.info("Clicking on male radio button. ");
    clickOnElement(mrRadioButton);
    }
    public void enterFirstName(String fname){
        log.info("Entering First Name: "+fname);
        sendTextToElement(firstName,fname);
    }
    public void enterLastName(String lname){
        log.info("Entering Last Name: "+lname);
        sendTextToElement(lastName,lname);
    }
    public void enterPassword(String pass){
        log.info("Entering Password: "+pass);
        sendTextToElement(password,pass);
    }
    public void enterAddress(String add){
        log.info("Entering Address: "+add);
        sendTextToElement(address,add);
    }
    public void enterCity(String city1){
        log.info("Entering city: "+city1);
        sendTextToElement(city,city1);
    }
    public void selectCountry(){
        log.info("Selecting Country: "+"United States");
        selectByVisibleTextFromDropDown(country,"United States");
    }
    public void enterPosCode(String postcode){
        log.info("Entering PostCode: "+postcode);
        sendTextToElement(postCode,postcode);
    }
    public void selectState(String state1){
        log.info("Selecting State: "+state1);
        selectByVisibleTextFromDropDown(state,state1);
    }
    public void enterMobileNumber(String mobile){
        log.info("Entering Mobile Number: "+mobile);
        sendTextToElement(mobileNumber,mobile);
    }
    public void enterAlias(String alias1){
        log.info("Entering Alias: "+alias1);
        sendTextToElement(alias,alias1);
    }
    public void clickOnRegisterButton(){
        log.info("Clicking on register button. ");
        clickOnElement(registerButton);
    }
    public String getMyAccountText(){
        log.info("Getting successful registration text: "+myAccountText.getText());
        return getTextFromElement(myAccountText);
    }


}
