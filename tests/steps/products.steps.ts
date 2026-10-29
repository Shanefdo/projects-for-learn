import { expect, Page } from "@playwright/test";
import { ProductsPage } from "../pages/products.page";

export class ProductsSteps {
  private productsPage: ProductsPage;

  constructor(page: Page) {
    this.productsPage = new ProductsPage(page);
  }

  /**
   * Navigates to the products page
   * @returns {Promise<void>}
   * @memberof ProductsSteps
   */
  async navigateToTheProductsPage(): Promise<void> {
    await this.productsPage.productsPageNavigation.click();
  }

  /**
   * Validates the products page navigation
   * @returns {Promise<void>}
   * @memberof ProductsSteps
   */
  async validateProductspageNavigation(): Promise<void> {
    await expect(this.productsPage.productsPageTitle).toContainText('Products');
  }

  /**
   * Validates a product item on the products page
   * @returns {Promise<void>}
   * @memberof ProductsSteps
   */
  async validateProductItem(): Promise<void> {
    await expect(this.productsPage.productsPageItem).toBeVisible();
    await expect(this.productsPage.productsPageItemImage).toBeVisible();
  }

  /**
   * Validates the product item increment button
   * @returns {Promise<void>}
   * @memberof ProductsSteps
   */
  async validateProductItemIncrementButton(): Promise<void> {
    await expect(this.productsPage.productsPageItemIncrementButton).toBeVisible();
  }

  /**
   * Validates the product item decrement button
   * @returns {Promise<void>}
   * @memberof ProductsSteps
   */
  async validateProductItemDecrementButton(): Promise<void> {
    await expect(this.productsPage.productsPageItemDecrementButton).toBeVisible();
  }

  /**
   * Validates the product item count
   * @returns {Promise<void>}
   * @memberof ProductsSteps
   */
  async validateProductItemCount(): Promise<void> {
    await expect(this.productsPage.productsPageItemCount).toBeVisible();
    await expect(this.productsPage.productsPageItemCount).toHaveValue("0");
    await this.productsPage.productsPageItemIncrementButton.click();
    await expect(this.productsPage.productsPageItemCount).toHaveValue("1");
    await this.productsPage.productsPageItemDecrementButton.click();
    await expect(this.productsPage.productsPageItemCount).toHaveValue("0");
  }

}