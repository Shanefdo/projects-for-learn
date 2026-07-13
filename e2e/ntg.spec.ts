import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await test.step('Check the landing page', async () => {
    await page.goto('https://snack.expo.dev/@katyh/next-tech-girls-fixing-bugs');
  });

  await test.step('Click on the pop-up page to validate the app behaviour', async () => {
    const page1Promise = page.waitForEvent('popup');
    await page.locator('._1tbb1yyj').click();
    const page1 = await page1Promise;

    await test.step('App validation through the pages', async () => {
      await test.step('Navigate through the first screen', async () => {
        await expect(page1.getByRole('heading', { name: 'First Screen' })).toBeVisible();
      });

      await test.step('Navigate through the second screen', async () => {
        await page1.getByRole('tab', { name: '  Second Screen' }).click();
        await expect(page1.getByRole('heading', { name: 'Second Screen' })).toBeVisible();
      });

      await test.step('Navigate through the third screen', async () => {
        await page1.getByRole('tab', { name: '  Third Screen' }).click();
        await expect(page1.getByRole('heading', { name: 'Third Screen' })).toBeVisible();
      });

      await test.step('Navigate through the fourth screen', async () => {
        await page1.getByRole('tab', { name: '  Fourth Screen' }).click();
        await expect(page1.getByRole('heading', { name: 'Fourth Screen' })).toBeVisible();
      });

      await test.step('Navigate back to the first screen', async () => {
        await page1.getByRole('tab', { name: '  First Screen' }).click();
        await page1.locator('div').filter({ hasText: /^Sunshine Sets$/ }).first().click();
      });
    })
  })
});