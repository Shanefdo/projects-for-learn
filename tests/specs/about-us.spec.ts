import { test } from "../fixtures/fixtures";

test.describe('Validate About Us page tests', () => {

    test('Validate About Us page navigation', async ({
        aboutUsSteps,
        homeSteps,
        productsSteps
    }) => {
        await test.step('Navigate to the Home page', async () => {
            await homeSteps.navigationToHome();
        });

        await test.step('Validate About Us page navigation', async () => {
            await aboutUsSteps.navigationToAboutUs();
            await aboutUsSteps.validateAboutUsPageTitle();
            await aboutUsSteps.validateAboutUsPageContent();
            await aboutUsSteps.validateAboutUsPageImage();
            await aboutUsSteps.validateAboutUsPageShopNowButton();
        });

        await test.step('Validate Products page navigation', async () => {
            await productsSteps.navigateToTheProductsPage();
            await productsSteps.validateProductspageNavigation();
        });
    });
});