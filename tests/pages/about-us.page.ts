import { Locator, Page } from '@playwright/test';

export class AboutUsPage {

    static readonly ABOUT_US_PAGE_NAVIGATION = '[id="HeaderMenu-about-us"]';
    static readonly ABOUT_US_PAGE_TITLE = "//title[contains(text(),'About Us')]";

    readonly page: Page;
    readonly aboutUsPageNavigation: Locator;
    readonly aboutUsPageTitle: Locator;
    readonly aboutUsPageContent: Locator;
    readonly aboutUsPageImage: Locator;
    readonly aboutUsPageShopNowButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.aboutUsPageNavigation = page.locator(AboutUsPage.ABOUT_US_PAGE_NAVIGATION);
        this.aboutUsPageTitle = page.locator(AboutUsPage.ABOUT_US_PAGE_TITLE);
        this.aboutUsPageContent = page.getByText('Welcome to Future Legends Cricket Shop, your one-stop');;
        this.aboutUsPageImage = page.locator('.dsgn-pck__image__wrapper');;
        this.aboutUsPageShopNowButton = page.getByRole('link', { name: 'Shop Now' });
    }
}