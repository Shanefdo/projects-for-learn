import { Page, expect } from "@playwright/test";
import { ContactPage } from "../pages/contact.page";

export class ContactSteps {
    private contactPage: ContactPage;

    constructor(page: Page) {
        this.contactPage = new ContactPage(page);
    }

    /**
     * Navigates to the contact page
     * @returns {Promise<void>}
     */
    async navigateToTheContactPage() {
        await this.contactPage.contactPageNavigation.click();
    }

    /**
     * Validates the contact page navigation
     * @returns {Promise<void>}
     */
    async validateContactPageNavigation() {
        await expect(this.contactPage.contactPageHeading).toBeVisible();
    }

    /**
     * Fills the contact form with invalid email details and submits it
     * @returns {Promise<void>}
     */
    async submitInvalidContactForm() {
        await this.contactPage.contactNameInput.fill('Test User');
        await this.contactPage.contactEmailInput.fill('invalid-email');
        await this.contactPage.contactPhoneInput.fill('1234567890');
        await this.contactPage.contactBodyInput.fill('Hello from Playwright');
        await this.contactPage.contactPageSubmit.click();
    }

    /**
     * Validates that the invalid email is rejected by the browser
     * @returns {Promise<void>}
     */
    async validateInvalidEmailState() {
        await expect(this.contactPage.contactEmailInput).toHaveValue('invalid-email');
        await expect(this.contactPage.contactEmailInput).toHaveJSProperty('validity.typeMismatch', true);
    }
}