import { test as base } from "@playwright/test";
import { HomeSteps } from "../steps/home.steps";
import { ProductsSteps } from "../steps/products.steps";
import { ContactSteps } from "../steps/contact.steps";
import { AboutUsSteps } from "../steps/about-us.steps";

type Fixtures = {
    homeSteps: HomeSteps;
    productsSteps: ProductsSteps;
    contactSteps: ContactSteps;
    aboutUsSteps: AboutUsSteps;
};

export const test = base.extend<Fixtures>({
    homeSteps: async ({ page }, use) => {
        await use(new HomeSteps(page));
    },
    productsSteps: async ({ page }, use) => {
        await use(new ProductsSteps(page));
    },
    contactSteps: async ({ page }, use) => {
        await use(new ContactSteps(page));
    },
    aboutUsSteps: async ({ page }, use) => {
        await use(new AboutUsSteps(page));
    }
});

export { expect } from "@playwright/test";