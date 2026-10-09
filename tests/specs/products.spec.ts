import { test } from "../fixtures/fixtures";

test.describe('Validate products page tests', () => {
  test("Validate products page banner", { tag: "@smoke" }, async ({
    homeSteps,
    productsSteps,
  }) => {
    await homeSteps.navigationToHome();
    await productsSteps.navigateToTheProductsPage();
    await productsSteps.validateProductspageNavigation();
  });
});
