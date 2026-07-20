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
}