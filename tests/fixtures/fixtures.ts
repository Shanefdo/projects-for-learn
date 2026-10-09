import { test as base } from "@playwright/test";
import { HomeSteps } from "../steps/home.steps";
import { ProductsSteps } from "../steps/products.steps";

type Fixtures = {
    homeSteps: HomeSteps;
    productsSteps: ProductsSteps;
};

export const test = base.extend<Fixtures>({
    homeSteps: async ({ page }, use) => {
        await use(new HomeSteps(page));
    },
    productsSteps: async ({ page }, use) => {
        await use(new ProductsSteps(page));
    },
});

export { expect } from "@playwright/test";