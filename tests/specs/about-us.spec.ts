import { test } from "@playwright/test";
import { HomeSteps } from "../steps/home.steps";
import { AboutUsSteps } from "../steps/about-us.steps";
import { ProductsSteps } from "../steps/products.steps";


test.describe('Validate About Us page tests', () => {

    test('Validate About Us page navigation', async ({ page }) => {

       await test.step('Navigate to the Home page', async () => {
            const homeSteps = new HomeSteps(page);

            await homeSteps.navigationToHome();
        });

        await test.step('Validate About Us page navigation', async () => {
            const aboutUsSteps = new AboutUsSteps(page);

            await aboutUsSteps.navigationToAboutUs();
            await aboutUsSteps.validateAboutUsPageTitle();
            await aboutUsSteps.validateAboutUsPageContent();
            await aboutUsSteps.validateAboutUsPageImage();
            await aboutUsSteps.validateAboutUsPageShopNowButton();
        });

        await test.step('Validate Products page navigation', async () => {
            const productsSteps = new ProductsSteps(page);

            await productsSteps.navigateToTheProductsPage();
            await productsSteps.validateProductspageNavigation();
        });
    });
});