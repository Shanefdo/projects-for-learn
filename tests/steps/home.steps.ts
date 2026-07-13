import { expect, Page } from "@playwright/test";
import { HomePage } from "../pages/home.page";

export class HomeSteps {
  private homePage: HomePage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
  }

  /**
   * Navigates to the home page
   * @returns {Promise<void>}
   * @memberof HomeSteps
   */
  async navigationToHome() {
    await this.homePage.page.goto('/')
  }

  /**
   * Validates the cookie consent banner title
   * @returns {Promise<void>}
   * @memberof HomeSteps
   */
  async validateCookieConsentBannerTitle() {
    await expect(this.homePage.cookieConsentBanner).toHaveText('Cookie consent');
  }

  /**
   * Declines the cookie consent banner
   * @returns {Promise<void>}
   * @memberof HomeSteps
   */
  async declineCookieConsent() {
    await this.homePage.cookieConsentDecline.click();
  }

  /**
   * Validates the home page banner heading
   * @returns {Promise<void>}
   * @memberof HomeSteps
   */
  async validateHomePageBannerHeading() {
    await expect(this.homePage.bannerHeading).toHaveText('Future Legends Cricket Shop');
  }

  /**
   * Validates the announcement message on the home page slider
   * @returns {Promise<void>}
   * @memberof HomeSteps
   */
  async validateAnnouncementMessage() {
    await this.homePage.sliderButtonNext.click();
    await expect(this.homePage.sliderAnnuouncementMessage.nth(1)).toHaveText('Free UK Mainland Delivery')
    await this.homePage.sliderButtonPrevious.click();
    await expect(this.homePage.sliderAnnuouncementMessage.nth(0)).toHaveText('Welcome to Future Legends Cricket Shop')

    // const sliderLocator = this.homePage.sliderAnnuouncementMessage;
    // const message = (await sliderLocator.innerText()).trim();

    // switch (message) {
    //   case 'Free UK Mainland Delivery':
    //     await expect(this.homePage.sliderAnnuouncementMessage.nth(1)).toBeVisible();
    //     break;

    //   case 'Welcome to Future Legends Cricket Shop':
    //     await expect(this.homePage.sliderAnnuouncementMessage.nth(0)).toBeVisible();
    //     break;
    // }
  }

  /**
   * Validates the hot buys section on the home page
   * @returns {Promise<void>}
   * @memberof HomeSteps
   */
  async validateHotBuysHeading() {
    await expect(this.homePage.hotBuysHeading).toBeVisible();
  }

  /**
   * Validates the hot buys item on the home page
   * @returns {Promise<void>}
   * @memberof HomeSteps
   */
  async validateHotBuysItem() {
    await expect(this.homePage.hotBuysItem).toBeVisible();
  }

  /**
   * Validates the hot buys item image on the home page
   * @returns {Promise<void>}
   * @memberof HomeSteps
   */
  async validateHotBuysItemImage() {
    await expect(this.homePage.hotBuysItemImage).toBeVisible();
  }

  /**
   * Validates the hot buys item choose options button on the home page
   * @returns {Promise<void>}
   * @memberof HomeSteps
   */
  async validateHotBuysItemChooseOptionsButton() {
    await expect(this.homePage.hotBuysItemChooseOptionsButton).toBeVisible();
    await this.homePage.hotBuysItemChooseOptionsButton.click();
  }

  /**
   * Validates the hot buys item modal on the home page
   * @returns {Promise<void>}
   * @memberof HomeSteps
   */
  async validateHotBuysItemModal() {
    await expect(this.homePage.hotBuysItemModal).toBeVisible();
  }

}
