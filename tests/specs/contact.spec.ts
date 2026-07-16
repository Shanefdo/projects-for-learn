import { test } from "@playwright/test";
import { HomeSteps } from "../steps/home.steps";
import { ContactSteps } from "../steps/contact.steps";

test.describe('Validate contact page test', () => {

    test('Validate contact page navigation', async ({ page }) => {
        const contactStep = new ContactSteps(page);
        const homeSteps = new HomeSteps(page);

        await homeSteps.navigationToHome();
        await contactStep.navigateToTheContactPage();
        await contactStep.validateContactPageNavigation();
    });

    test('Validate contact form validation error handling', async ({ page }) => {
        const contactStep = new ContactSteps(page);
        const homeSteps = new HomeSteps(page);

        await homeSteps.navigationToHome();
        await contactStep.navigateToTheContactPage();
        await contactStep.submitInvalidContactForm();
        await contactStep.validateInvalidEmailState();
    });
})