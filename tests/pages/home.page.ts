import { Page, Locator } from "@playwright/test";

export class HomePage {
  static readonly BANNER_HEADING = '.banner__heading';
  static readonly COOKIE_CONSENT_BANNER_TITLE = '[id="shopify-pc__banner__body-title"]';
  static readonly COOKIE_CONSENT_DECLINE = '[id="shopify-pc__banner__btn-decline"]';
  static readonly SLIDER_BUTTON_PREVIOUS = '.slider-button--prev';
  static readonly SLIDER_BUTTON_NEXT = '.slider-button--next';
  static readonly SLIDER_ANNOUNCEMENT_MESSAGE = '.announcement-bar__message';
  static readonly HOT_BUYS_HEADING = ':text-is("Hot buys")'
  static readonly HOT_BUYS_ITEM = '[id="Slide-template--24961955332443__featured_collection1-1"]';
  static readonly HOT_BUYS_ITEM_IMAGE = '[id="Slide-template--24961955332443__featured_collection1-1"] img[class="motion-reduce"]';
  static readonly HOT_BUYS_ITEM_CHOOSE_OPTIONS_BUTTON = '[id="Slide-template--24961955332443__featured_collection1-1"] button';
  static readonly HOT_BUYS_ITEM_MODAL='h3.h2';
  
  readonly page: Page;
  readonly bannerHeading: Locator;
  readonly cookieConsentBanner: Locator;
  readonly cookieConsentDecline: Locator;
  readonly sliderButtonPrevious: Locator;
  readonly sliderButtonNext: Locator;
  readonly sliderAnnuouncementMessage: Locator;
  readonly hotBuysHeading: Locator;
  readonly hotBuysItem: Locator;
  readonly hotBuysItemImage: Locator;
  readonly hotBuysItemChooseOptionsButton: Locator;
  readonly hotBuysItemModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bannerHeading = page.locator(HomePage.BANNER_HEADING);
    this.cookieConsentBanner = page.locator(HomePage.COOKIE_CONSENT_BANNER_TITLE);
    this.cookieConsentDecline = page.locator(HomePage.COOKIE_CONSENT_DECLINE);
    this.sliderButtonPrevious = page.locator(HomePage.SLIDER_BUTTON_PREVIOUS);
    this.sliderButtonNext = page.locator(HomePage.SLIDER_BUTTON_NEXT);
    this.sliderAnnuouncementMessage = page.locator(HomePage.SLIDER_ANNOUNCEMENT_MESSAGE);
    this.hotBuysHeading = page.locator(HomePage.HOT_BUYS_HEADING);
    this.hotBuysItem = page.locator(HomePage.HOT_BUYS_ITEM);
    this.hotBuysItemImage = page.locator(HomePage.HOT_BUYS_ITEM_IMAGE);
    this.hotBuysItemChooseOptionsButton = page.locator(HomePage.HOT_BUYS_ITEM_CHOOSE_OPTIONS_BUTTON);
    this.hotBuysItemModal = page.locator(HomePage.HOT_BUYS_ITEM_MODAL);
  }
}