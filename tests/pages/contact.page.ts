import { Locator, Page } from "@playwright/test";


export class ContactPage {

    static readonly CONTACT_PAGE_NAVIGATION = '[class="header__active-menu-item"]';
    static readonly CONTACT_PAGE_SUBMIT = '[type="submit"]';
    static readonly CONTACT_PAGE_HEADING = '.title.title-wrapper--no-top-margin.inline-richtext.h2.scroll-trigger.animate--slide-in';
    static readonly CONTACT_PAGE_ERROR = '[li:has-text("Email is invalid")]';

    readonly page: Page;
    readonly contactPageNavigation: Locator;
    readonly contactPageSubimt: Locator;
    readonly contactPageHeading: Locator;
    readonly contactPageError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactPageNavigation = page.locator(ContactPage.CONTACT_PAGE_NAVIGATION);
        this.contactPageHeading = page.locator(ContactPage.CONTACT_PAGE_HEADING);
        this.contactPageSubimt = page.locator(ContactPage.CONTACT_PAGE_SUBMIT);
        this.contactPageError = page.locator(ContactPage.CONTACT_PAGE_ERROR);
    }
}