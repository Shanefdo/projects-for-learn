import { Locator, Page } from "@playwright/test";


export class ContactPage {

    static readonly CONTACT_PAGE_NAVIGATION = 'span:has-text("Contact")';
    static readonly CONTACT_PAGE_SUBMIT = 'button[type="submit"]';
    static readonly CONTACT_PAGE_HEADING = 'text=Questions or comments? Get in touch and we\'ll be happy to help.';
    static readonly CONTACT_PAGE_NAME = '#ContactForm-name';
    static readonly CONTACT_PAGE_EMAIL = '#ContactForm-email';
    static readonly CONTACT_PAGE_PHONE = '#ContactForm-phone';
    static readonly CONTACT_PAGE_BODY = '#ContactForm-body';

    readonly page: Page;
    readonly contactPageNavigation: Locator;
    readonly contactPageSubmit: Locator;
    readonly contactPageHeading: Locator;
    readonly contactNameInput: Locator;
    readonly contactEmailInput: Locator;
    readonly contactPhoneInput: Locator;
    readonly contactBodyInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactPageNavigation = page.locator(ContactPage.CONTACT_PAGE_NAVIGATION);
        this.contactPageHeading = page.locator(ContactPage.CONTACT_PAGE_HEADING);
        this.contactPageSubmit = page.locator(ContactPage.CONTACT_PAGE_SUBMIT);
        this.contactNameInput = page.locator(ContactPage.CONTACT_PAGE_NAME);
        this.contactEmailInput = page.locator(ContactPage.CONTACT_PAGE_EMAIL);
        this.contactPhoneInput = page.locator(ContactPage.CONTACT_PAGE_PHONE);
        this.contactBodyInput = page.locator(ContactPage.CONTACT_PAGE_BODY);
    }
}