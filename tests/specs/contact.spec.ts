import { test } from "../fixtures/fixtures";

test.describe('Validate contact page test', () => {

    test('Validate contact page navigation', async ({
        contactSteps,
        homeSteps
    }) => {
        await homeSteps.navigationToHome();
        await contactSteps.navigateToTheContactPage();
        await contactSteps.validateContactPageNavigation();
    });

    test('Validate contact form validation error handling', async ({
        contactSteps,
        homeSteps
    }) => {
        await homeSteps.navigationToHome();
        await contactSteps.navigateToTheContactPage();
        await contactSteps.submitInvalidContactForm();
        await contactSteps.validateInvalidEmailState();
    });
})