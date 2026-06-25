1. npm init -y
2. npm init playwright@latest
3. npm install -D typescript ts-node 
4. npm i dotenv ----> to read key value from .env files - store username,password, env DB details 


1. utills | pages | testData | tests

Step 1:
PlaywrightGenerics.ts 
1. Click(ele)
2. enterText(ele,value)
3. selectValue(ele,value)

Step 2:
POM - Page object model - Design patten --- Locate element and page method (business logic)
We are going to use playwright generic method do design page methods - 

Step 3:
Testcase design 
- Call page method and design the testcase based on flow - get testData from .json file

Step 4: Execution using playwright.config.ts

Step 5: reporting - default 

Step 6 : CI and CD pileline