import { test } from "@playwright/test";
import { HomeSteps } from "../steps/home.steps";
import { ContactSteps } from "../steps/contact.steps";

test.describe('Validate contact page test', () => {

    test.only('Validate contact page button error', async ({ page }) => {
        const contactStep = new ContactSteps(page);
        const homeSteps = new HomeSteps(page);

        await homeSteps.navigationToHome();
        await contactStep.navigateToTheContactPage();
        await contactStep.validateContactPageNavigation();
        await contactStep.validateSyntaxError();
    })
})