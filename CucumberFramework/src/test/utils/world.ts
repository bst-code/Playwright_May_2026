import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BasePage } from '../pages/BasePage';
import { DashboardPage } from '../pages/DashboardPage';

//World is a scenario-specific object that stores shared state and data between step definitions
export class CustomWorld {


   // firstName ! :string 
    browser!: Browser;
    page!: Page;

    //Declare 
    loginPage!: LoginPage;
    basePage!: BasePage ;
    dashboardPage!: DashboardPage;

    userName: String = "Bala"
}

setWorldConstructor(CustomWorld);

