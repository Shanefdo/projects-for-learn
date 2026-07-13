import { expect, Page } from "@playwright/test";
import { ProductsPage } from "../pages/products.page";

export class ProductsSteps {
  private productsPage: ProductsPage;

  constructor(page: Page) {
    this.productsPage = new ProductsPage(page);
  }

  async navigateToTheProductsPage() {
    await this.productsPage.productsPageNavigation.click();
  }

  async validateProductspageNavigation() {
    await expect(this.productsPage.productsPageTitle).toContainText('Products');
  }
}