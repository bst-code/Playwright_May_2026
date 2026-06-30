import { Page } from '@playwright/test';
import { PlaywrightGenerics } from '../utils/PlaywrightGenerics';

export class BasePage extends PlaywrightGenerics {

    constructor(page: Page) {
        super(page);
    }

    // Common page methods can be added here
    async navigateToProductPage(url: string): Promise<void> {
        await this.page.goto(url);
    }

}