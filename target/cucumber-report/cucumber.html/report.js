$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Test",
  "description": "As user I want to create an account on automation practice website",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7545985200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "create-account-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on signIn link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter email for create account \"harry@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on male radio button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter first name \"Harry\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"Test123\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter address \"10 Shiv Krupa\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter city \"San Diego\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select state \"California\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select postcode \"91942\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select country USA",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter mobile number \"09192587945\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Alias \"Harry22@shiv.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I can register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 128786200,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2068999800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harry@gmail.com",
      "offset": 34
    }
  ],
  "location": "CreateAccountSteps.iEnterEmailForCreateAccount(String)"
});
formatter.result({
  "duration": 151630900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 92476000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnMaleRadioButton()"
});
formatter.result({
  "duration": 1297668700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 20
    }
  ],
  "location": "CreateAccountSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 107969300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 19
    }
  ],
  "location": "CreateAccountSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 89484400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 18
    }
  ],
  "location": "CreateAccountSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 97220900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10 Shiv Krupa",
      "offset": 17
    }
  ],
  "location": "CreateAccountSteps.iEnterAddress(String)"
});
formatter.result({
  "duration": 106205300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "San Diego",
      "offset": 14
    }
  ],
  "location": "CreateAccountSteps.iEnterCity(String)"
});
formatter.result({
  "duration": 191469700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "California",
      "offset": 16
    }
  ],
  "location": "CreateAccountSteps.iSelectState(String)"
});
formatter.result({
  "duration": 116154500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "91942",
      "offset": 19
    }
  ],
  "location": "CreateAccountSteps.iSelectPostcode(String)"
});
formatter.result({
  "duration": 90854500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iSelectCountryUSA()"
});
formatter.result({
  "duration": 58802800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09192587945",
      "offset": 23
    }
  ],
  "location": "CreateAccountSteps.iEnterMobileNumber(String)"
});
formatter.result({
  "duration": 109559500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry22@shiv.com",
      "offset": 15
    }
  ],
  "location": "CreateAccountSteps.iEnterAlias(String)"
});
formatter.result({
  "duration": 107509400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 2257718500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iCanRegisterSuccessfully()"
});
formatter.result({
  "duration": 52424000,
  "status": "passed"
});
formatter.after({
  "duration": 768740100,
  "status": "passed"
});
formatter.uri("siginIn.feature");
formatter.feature({
  "line": 1,
  "name": "SignIn Test",
  "description": "As user I want to sign in into automation practice website",
  "id": "signin-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4602825700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to signIn page successfully",
  "description": "",
  "id": "signin-test;user-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to signIn page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1534486000,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iShouldNavigateToSignInPageSuccessfully()"
});
formatter.result({
  "duration": 42369000,
  "status": "passed"
});
formatter.after({
  "duration": 707572200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid username \"\u003cuserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 20,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 21,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 22,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 23,
      "id": "signin-test;verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4295684500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get the error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 36300,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1470055900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignInPageStep.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 78574200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "SignInPageStep.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 144030500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInButton()"
});
formatter.result({
  "duration": 900841800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 32
    }
  ],
  "location": "SignInPageStep.iShouldGetTheErrorMessage(String)"
});
formatter.result({
  "duration": 40462700,
  "status": "passed"
});
formatter.after({
  "duration": 746566500,
  "status": "passed"
});
formatter.before({
  "duration": 4489508500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get the error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 43800,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2624837100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 26
    }
  ],
  "location": "SignInPageStep.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 153766000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignInPageStep.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 90671100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2076574800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "SignInPageStep.iShouldGetTheErrorMessage(String)"
});
formatter.result({
  "duration": 39424900,
  "status": "passed"
});
formatter.after({
  "duration": 735998700,
  "status": "passed"
});
formatter.before({
  "duration": 4381945100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get the error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1435531600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 26
    }
  ],
  "location": "SignInPageStep.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 128089300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "SignInPageStep.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 103487500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1181381800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 32
    }
  ],
  "location": "SignInPageStep.iShouldGetTheErrorMessage(String)"
});
formatter.result({
  "duration": 37986500,
  "status": "passed"
});
formatter.after({
  "duration": 743830800,
  "status": "passed"
});
formatter.before({
  "duration": 4288524800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify The Error Message With InValid Credentials",
  "description": "",
  "id": "signin-test;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get the error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1295469100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 26
    }
  ],
  "location": "SignInPageStep.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 129064400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "SignInPageStep.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 105065300,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInButton()"
});
formatter.result({
  "duration": 758833000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 32
    }
  ],
  "location": "SignInPageStep.iShouldGetTheErrorMessage(String)"
});
formatter.result({
  "duration": 39434100,
  "status": "passed"
});
formatter.after({
  "duration": 735665000,
  "status": "passed"
});
formatter.before({
  "duration": 4442920600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify That User Should LogIn SuccessFully With Valid Credentials",
  "description": "",
  "id": "signin-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter valid email \"harry28@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid password \"Test123\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I can successfully signIn",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1433783700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harry28@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignInPageStep.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 169962200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 24
    }
  ],
  "location": "SignInPageStep.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 118804400,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2626572700,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iCanSuccessfullySignIn()"
});
formatter.result({
  "duration": 207651100,
  "status": "passed"
});
formatter.after({
  "duration": 1192605900,
  "status": "passed"
});
formatter.before({
  "duration": 4776706000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "signin-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on signIn link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I enter valid email \"harry28@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter valid password \"Test123\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on Sign out Link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I can successfully sign out",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2013219100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harry28@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignInPageStep.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 169038200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 24
    }
  ],
  "location": "SignInPageStep.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 151256400,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1448627000,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 2935544800,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageStep.iCanSuccessfullySignOut()"
});
formatter.result({
  "duration": 67662300,
  "status": "passed"
});
formatter.after({
  "duration": 869471300,
  "status": "passed"
});
formatter.uri("womenCategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page Test",
  "description": "As user I want to navigate to Women category page \u0026 add product to the cart",
  "id": "women-category-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6020116000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Women Category Page Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can navigate to Women Category Page Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 56200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 14
    }
  ],
  "location": "WomenCategorySteps.iSelectTab(String)"
});
formatter.result({
  "duration": 4530340400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCanNavigateToWomenCategoryPageSuccessfully()"
});
formatter.result({
  "duration": 40558400,
  "status": "passed"
});
formatter.after({
  "duration": 820888700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click to add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can add products to the cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 21,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 22,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 23,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 24,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "M",
        "Blue"
      ],
      "line": 25,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6920204700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click to add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can add products to the cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 30600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 14
    }
  ],
  "location": "WomenCategorySteps.iSelectTab(String)"
});
formatter.result({
  "duration": 1501309700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1764597100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "WomenCategorySteps.iAddQuantity(String)"
});
formatter.result({
  "duration": 177256200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 103495900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomenCategorySteps.iSelectColour(String)"
});
formatter.result({
  "duration": 94489400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickToAddToCartButton()"
});
formatter.result({
  "duration": 66306800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCanAddProductsToTheCartSuccessfully()"
});
formatter.result({
  "duration": 2136953900,
  "status": "passed"
});
formatter.after({
  "duration": 1197611500,
  "status": "passed"
});
formatter.before({
  "duration": 5090440800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click to add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can add products to the cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 14
    }
  ],
  "location": "WomenCategorySteps.iSelectTab(String)"
});
formatter.result({
  "duration": 1420364400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1464824700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "WomenCategorySteps.iAddQuantity(String)"
});
formatter.result({
  "duration": 167393700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 98033200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomenCategorySteps.iSelectColour(String)"
});
formatter.result({
  "duration": 81998600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickToAddToCartButton()"
});
formatter.result({
  "duration": 83617900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCanAddProductsToTheCartSuccessfully()"
});
formatter.result({
  "duration": 2144524600,
  "status": "passed"
});
formatter.after({
  "duration": 723299500,
  "status": "passed"
});
formatter.before({
  "duration": 4667799600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click to add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can add products to the cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 14
    }
  ],
  "location": "WomenCategorySteps.iSelectTab(String)"
});
formatter.result({
  "duration": 1879721800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1301281600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "WomenCategorySteps.iAddQuantity(String)"
});
formatter.result({
  "duration": 140746800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 41568000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomenCategorySteps.iSelectColour(String)"
});
formatter.result({
  "duration": 100001800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickToAddToCartButton()"
});
formatter.result({
  "duration": 108663100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCanAddProductsToTheCartSuccessfully()"
});
formatter.result({
  "duration": 2167251000,
  "status": "passed"
});
formatter.after({
  "duration": 740253100,
  "status": "passed"
});
formatter.before({
  "duration": 4723978300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select tab \"Women\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I add quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click to add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can add products to the cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 57000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 14
    }
  ],
  "location": "WomenCategorySteps.iSelectTab(String)"
});
formatter.result({
  "duration": 1814546700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 18
    }
  ],
  "location": "WomenCategorySteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 2092166200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "WomenCategorySteps.iAddQuantity(String)"
});
formatter.result({
  "duration": 129048200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategorySteps.iSelectSize(String)"
});
formatter.result({
  "duration": 119300900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomenCategorySteps.iSelectColour(String)"
});
formatter.result({
  "duration": 107824400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickToAddToCartButton()"
});
formatter.result({
  "duration": 81643600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iCanAddProductsToTheCartSuccessfully()"
});
formatter.result({
  "duration": 2101958400,
  "status": "passed"
});
formatter.after({
  "duration": 845150600,
  "status": "passed"
});
});