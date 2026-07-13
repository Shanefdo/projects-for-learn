import { expect, Page } from "@playwright/test";
import { HomePage } from "../pages/home.page";

export class HomeSteps {
  private homePage: HomePage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
  }

  async navigationToHome() {
    await this.homePage.page.goto('/')
  }

  async validateCookieConsentBannerTitle() {
    await expect(this.homePage.cookieConsentBanner).toHaveText('Cookie consent');
  }

  async declineCookieConsent() {
    await this.homePage.cookieConsentDecline.click();
  }

  async validateHomePageBannerHeading() {
    await expect(this.homePage.bannerHeading).toHaveText('Future Legends Cricket Shop');
  }

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

  async validateHotBuysHeading() {
    await expect(this.homePage.hotBuysHeading).toBeVisible();
  }

  async validateHotBuysItem() {
    await expect(this.homePage.hotBuysItem).toBeVisible();
  }

  async validateHotBuysItemImage() {
    await expect(this.homePage.hotBuysItemImage).toBeVisible();
  }

  async validateHotBuysItemChooseOptionsButton() {
    await expect(this.homePage.hotBuysItemChooseOptionsButton).toBeVisible();
    await this.homePage.hotBuysItemChooseOptionsButton.click();
  }

  async validateHotBuysItemModal() {
    await expect(this.homePage.hotBuysItemModal).toBeVisible();
  } 

}
