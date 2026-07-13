import { test, expect } from '@playwright/test';

test.skip('Future Legeds Cricket shop web page navigations', async ({ page }) => {
  await test.step('validate the behaviour of the URL navigation', async () => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Cookie consent' })).toBeVisible();
  });

  await test.step('Validate that the cookie consent decline and show the Home page', async () => {
    await page.getByRole('button', { name: 'Decline' }).click();
    await page.waitForTimeout(2000);
    await expect(page.locator('div').filter({ hasText: 'One stop destination for' }).nth(1)).toBeVisible();
    await expect(page.locator('#Slider-template--24961955332443__featured_collection1')).toBeVisible();
  });

  await test.step('Validate Products page Navigation and show collection of products in the page', async () => {
    await page.getByRole('link', { name: 'Products' }).click();
    await expect(page.getByRole('heading', { name: 'Collection: Products' })).toBeVisible();
  });

  await test.step('Validate Contact page navigation and show Questions or comments section', async () => {
    await page.getByRole('link', { name: 'Contact', exact: true }).click();
    await expect(page.getByText('Questions or comments? Get in touch and we\'ll be happy to help. Name Email *')).toBeVisible();
  });

  await test.step('Validate about us page navigation', async () => {
    await page.locator('#HeaderMenu-about-us').click();
    await expect(page.getByText('About us One stop destination')).toBeVisible();
  });

  await test.step('Validate click through the logo and navigat eback to the home page', async () => {
    await page.locator('#shopify-section-sections--24961955823963__header').getByRole('link', { name: 'Future Legends Cricket Shop' }).click();
    await expect(page.locator('div').filter({ hasText: 'One stop destination for' }).nth(1)).toBeVisible();
  });
});