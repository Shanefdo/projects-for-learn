import { test } from "../fixtures/fixtures";

test.describe('Validate Home page tests', () => {

  test('Validate home page banner', async ({
    homeSteps
  }) => {
    await test.step('Validate home page observation', async () => {
      await homeSteps.navigationToHome();
      await homeSteps.validateHomePageBannerHeading();
      await homeSteps.validateAnnouncementMessage();
    })

    await test.step('Validate hot buys section', async () => {
      await homeSteps.validateHotBuysHeading();
      await homeSteps.validateHotBuysItem();
      await homeSteps.validateHotBuysItemImage();
      await homeSteps.validateHotBuysItemChooseOptionsButton();
      await homeSteps.validateHotBuysItemModal();
    })
  })
})