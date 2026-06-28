Feature: Login testcases
# Given, When, Then, and, but

  Scenario: Login with valid data
    Given I navigate to application URL "https://playground.bsparksoftwaretechnologies.com/login"
    When I enter username as "john1@gamil.com" and password "Test@123"
    And I click Login button
    Then I validate home page title


@dataDriven
Scenario Outline: Loing with valid data - mutiple users
    Given I navigate to application URL "https://playground.bsparksoftwaretechnologies.com/login"
    When I enter username as "<EmailID>" and password "<Passowrd>"
    And I click Login button
    Then I validate home page title
    And I Validate element is displayed

 Examples: 
    |EmailID|Passowrd|
    |john1@gamil.com|Test@123|
    |rajuvar34@newmail.com|abc123@#|
