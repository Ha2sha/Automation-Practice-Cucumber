package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class WomenCategorySteps {
    @And("^I select tab \"([^\"]*)\"$")
    public void iSelectTab(String menu)  {
     new HomePage().clickWomenLink();
    }

    @Then("^I can navigate to Women Category Page Successfully$")
    public void iCanNavigateToWomenCategoryPageSuccessfully() {
        new WomenCategoryPage().verifyWomenTxt("Women");
    }

    @And("^I select product \"([^\"]*)\"$")
    public void iSelectProduct(String product) throws InterruptedException {
        new ProductPage().clkOnProductList(product);
        //Thread.sleep(3000);
    }

    @And("^I add quantity \"([^\"]*)\"$")
    public void iAddQuantity(String qty) {
        new ProductPage().enterQty(qty);
    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String size) {
        new ProductPage().selectSize(size);
    }

    @And("^I select colour \"([^\"]*)\"$")
    public void iSelectColour(String colour) {
        new ProductPage().selColour(colour);
    }

    @And("^I click to add to cart button$")
    public void iClickToAddToCartButton() {
        new ProductPage().clickAddCart();
    }

    @Then("^I can add products to the cart successfully$")
    public void iCanAddProductsToTheCartSuccessfully() throws InterruptedException {
        new ProductPage().getAddMes("Product successfully added to your shopping cart");
        Thread.sleep(2000);
        new ProductPage().setCloseBtn();
    }
}
