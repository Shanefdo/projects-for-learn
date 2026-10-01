import { Page, expect } from '@playwright/test';
import { AboutUsPage } from '../pages/about-us.page';

export class AboutUsSteps {

    private aboutUsPage: AboutUsPage;

    constructor(page: Page) {
        this.aboutUsPage = new AboutUsPage(page);
    }

    /**
     * Navigates to the About Us page
     * @returns {Promise<void>}
     * @memberof AboutUsSteps
     */
    async navigationToAboutUs() {
        await this.aboutUsPage.aboutUsPageNavigation.click();
    }

    /**
     * Validates the About Us page title
     * @returns {Promise<void>}
     * @memberof AboutUsSteps
     */
    async validateAboutUsPageTitle() {
        await expect(this.aboutUsPage.page).toHaveTitle('About Us – Future Legends Cricket Shop');
    }

    /**
     * Validates the About Us page content
     * @returns {Promise<void>}
     * @memberof AboutUsSteps
     */
    async validateAboutUsPageContent() {
        await expect(this.aboutUsPage.aboutUsPageContent).toBeVisible();
    }

    /**
     * Validates the About Us page image
     * @returns {Promise<void>}
     * @memberof AboutUsSteps
     */
    async validateAboutUsPageImage() {
        await expect(this.aboutUsPage.aboutUsPageImage).toBeVisible();
    }

    /**
     * Validates the About Us page Shop Now button
     * @returns {Promise<void>}
     * @memberof AboutUsSteps
     */
    async validateAboutUsPageShopNowButton() {
        await expect(this.aboutUsPage.aboutUsPageShopNowButton).toBeVisible();
        await this.aboutUsPage.aboutUsPageShopNowButton.click();
    }
}