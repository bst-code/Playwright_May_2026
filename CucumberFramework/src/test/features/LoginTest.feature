Feature: Login testcases
# Given, When, Then, and, but

// It common for all scenarios in a particular feature file
 Background: 
    Given I navigate to application URL "https://playground.bsparksoftwaretechnologies.com/login"
    
  @smoke
  Scenario: Login with valid data
    When I enter username as "jhon1@gmail.com" and password "test@123"
    And I click Login button
    Then I validate home page title "/product-dashboard"
    
@dataDriven
Scenario Outline: Loing with valid data - mutiple users
    When I enter username as "<EmailID>" and password "<Passowrd>"
    And I click Login button
    Then I validate home page title
    And I Validate element is displayed

 Examples: 
    |EmailID|Passowrd|
    |john1@gamil.com|Test@123|
    |rajuvar34@newmail.com|abc123@#|
