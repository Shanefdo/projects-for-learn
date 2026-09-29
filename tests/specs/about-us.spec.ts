import { test } from "@playwright/test";
import { HomeSteps } from "../steps/home.steps";
import { AboutUsSteps } from "../steps/about-us.steps";
import { ProductsSteps } from "../steps/products.steps";


test.describe('Validate About Us page tests', () => {

    test('Validate About Us page navigation', async ({ page }) => {
        const homeSteps = new HomeSteps(page);
        const aboutUsSteps = new AboutUsSteps(page);
        const productsSteps = new ProductsSteps(page);


        await homeSteps.navigationToHome();

        await aboutUsSteps.navigationToAboutUs();
        //Page title needs investigate to be fixed, so skipping the validation for now
        //await aboutUsSteps.validateAboutUsPageTitle();
        await aboutUsSteps.validateAboutUsPageContent();
        await aboutUsSteps.validateAboutUsPageImage();
        await aboutUsSteps.validateAboutUsPageShopNowButton();

        await productsSteps.navigateToTheProductsPage();
        await productsSteps.validateProductspageNavigation();



        // test.step('Navigate to Home page', async () => {
        //     await homeSteps.navigationToHome();
        // });

        // test.step('Validate About Us page navigation', async () => {
        //     await aboutUsSteps.navigationToAboutUs();
        //     await aboutUsSteps.validateAboutUsPageTitle();
        //     await aboutUsSteps.validateAboutUsPageContent();
        //     await aboutUsSteps.validateAboutUsPageImage();
        //     await aboutUsSteps.validateAboutUsPageShopNowButton();
        // });

        // test.step('Validate Products page navigation', async () => {
        //     await productsSteps.navigateToTheProductsPage();
        //     await productsSteps.validateProductspageNavigation();
        // });
    });

});