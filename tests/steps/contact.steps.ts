import { Page, expect } from "@playwright/test";
import { ContactPage } from "../pages/contact.page";

export class ContactSteps {
    private contactPage: ContactPage;

    constructor(page: Page) {
        this.contactPage = new ContactPage(page);
    }

    async navigateToTheContactPage() {
        await this.contactPage.contactPageNavigation.click();
    }

    async validateContactPageNavigation(){
        await expect(this.contactPage.contactPageHeading).toHaveText("Questions or comments? Get in touch and we'll be happy to help.");
    }

    async validateSyntaxError() {
        await expect(this.contactPage.contactPageError).toHaveText("Email is invalid");
    }
}