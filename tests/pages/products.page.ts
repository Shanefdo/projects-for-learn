import { Page, Locator } from "@playwright/test";

export class ProductsPage {

  static readonly PRODUCTS_PAGE_NAVIGATION = '[id="HeaderMenu-products"]';
  static readonly PRODUCTS_PAGE_TITLE = '.collection-hero__title';

  readonly page: Page;
  readonly productsPageNavigation: Locator;
  readonly productsPageTitle: Locator;
  readonly productsPageItem: Locator;
  readonly productsPageItemImage: Locator;
  readonly productsPageItemIncrementButton: Locator;
  readonly productsPageItemDecrementButton: Locator;
  readonly productsPageItemCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsPageNavigation = page.locator(ProductsPage.PRODUCTS_PAGE_NAVIGATION);
    this.productsPageTitle = page.locator(ProductsPage.PRODUCTS_PAGE_TITLE);
    this.productsPageItem = page.locator('#product-grid').locator('li').nth(0);
    this.productsPageItemImage = page.locator('.card__media').first();
    this.productsPageItemIncrementButton = page.locator('button').filter({ hasText: 'Increase quantity for Default Title' }).first();
    this.productsPageItemDecrementButton = page.locator('button').filter({ hasText: 'Decrease quantity for Default Title' }).first();
    this.productsPageItemCount = page.locator('.quantity__input').first();
  }
}