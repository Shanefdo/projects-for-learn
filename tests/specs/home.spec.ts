import { test } from "@playwright/test";
import { HomeSteps } from "../steps/home.steps";
import { ENV } from "../utils/env";
import { ProductsSteps } from "../steps/products.steps";

test.describe('Validate Home page tests', () => {

  test('Validate home page banner', async ({ page }) => {
    const homeSteps = new HomeSteps(page);

    await homeSteps.navigationToHome();
    await homeSteps.validateCookieConsentBannerTitle();
    await homeSteps.declineCookieConsent();
    await homeSteps.validateHomePageBannerHeading();
    await homeSteps.validateAnnouncementMessage();

    await test.step('Validate hot buys section', async () => {
      await homeSteps.validateHotBuysHeading();
      await homeSteps.validateHotBuysItem();
      await homeSteps.validateHotBuysItemImage();
      await homeSteps.validateHotBuysItemChooseOptionsButton();
      await homeSteps.validateHotBuysItemModal();
    })
  })
})