package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    //Alt+insert to add constructor
    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_8']")
    WebElement colorWhite;

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_13']")
    WebElement colorOrg;

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_14']")
    WebElement colorBlu;

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_15']")
    WebElement colorGrn;

    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement selSize;

    @CacheLookup
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement addQty;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addCart;

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement verifyAddText;

    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeBtn;

    @FindBy(xpath = "//a[@class='product-name']")
    List<WebElement> productList;

    public void clkOnProductList(String text)  {
        for(WebElement list : productList){
            if(list.getText().equalsIgnoreCase(text)){
                log.info(("Selecting Product: "+ text));
                clickOnElement(list);
                break;
            }
        }
    }

    public void selColour(String color) {
        if (color.equalsIgnoreCase("White")) {
            log.info("Clicking on White Colour: " + color);
            clickOnElement(colorWhite);

        } else if (color.equalsIgnoreCase("Orange")) {
            log.info("Clicking on Orange Colour: " + color);
            clickOnElement(colorOrg);

        } else if (color.equalsIgnoreCase("Green")) {
            log.info("Clicking on Green Colour: " + color);
            clickOnElement(colorGrn);

        } else if (color.equalsIgnoreCase("Blue")) {
            log.info("Clicking on Blue Colour: " + color);
            clickOnElement(colorBlu);

        }
    }

    public void enterQty(String qty) {
        clickOnElement(addQty);
        log.info("Clearing the quantity. ");
        addQty.clear();

        log.info("Adding the quantity: "+qty);
        sendTextToElement(addQty, qty);

    }

    public void selectSize(String size) {
        log.info("Selecting the size: " + size);
        selectByVisibleTextFromDropDown(selSize, size);

    }

    public void clickAddCart() {
        log.info("Clicking on Add to Cart Button. ");
        clickOnElement(addCart);
    }

    public void getAddMes(String message) {
        log.info("Verifying Add to cart message: " + message);
        verifyThatTextIsDisplayed(verifyAddText, message);

    }

    public void setCloseBtn() {
        log.info("Closing pop up window. ");
        clickOnElement(closeBtn);
    }


}
