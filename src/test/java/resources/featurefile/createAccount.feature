Feature: Create Account Test
  As user I want to create an account on automation practice website

  @Sanity @Smoke @Regression
  Scenario: Verify That User Should Create Account Successfully
    When    I am on homepage
    And     I click on signIn link
    And     I enter email for create account "harry@gmail.com"
    And     I click on create account button
    And     I click on male radio button
    And     I enter first name "Harry"
    And     I enter last name "Patel"
    And     I enter password "Test123"
    And     I enter address "10 Shiv Krupa"
    And     I enter city "San Diego"
    And     I select state "California"
    And     I select postcode "91942"
    And     I select country USA
    And     I enter mobile number "09192587945"
    And     I enter Alias "Harry22@shiv.com"
    And     I click on register button
    Then    I can register successfully







