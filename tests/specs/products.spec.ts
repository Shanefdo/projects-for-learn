import { test } from "@playwright/test";
import { ENV } from "../utils/env";
import { ProductsSteps } from "../steps/products.steps";
import { HomeSteps } from "../steps/home.steps";

test.describe('Validate Products page tests', () => {

  test('Validate products page banner', async ({ page }) => {
    const productsPage = new ProductsSteps(page);
    const homeSteps = new HomeSteps(page);

    await homeSteps.navigationToHome();

    await productsPage.navigateToTheProductsPage();
    await productsPage.validateProductspageNavigation();
  })
})