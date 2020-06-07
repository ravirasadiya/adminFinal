/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ProductOptionlistResponseModel {
  public ProductOptionId: any = {};
  public name: any = {};
  public parentInt: any = {};
  public sortOrder: any = {};
  public metaTagTitle: any = {};
  public metaTagDescription: any = {};
  public metaTagKeyword: any = {};
  public isActive: number;
  public levels: any = [];

  constructor(ProductOptionlistResponse: any) {
    this.ProductOptionId = ProductOptionlistResponse.ProductOptionId || '';
    this.name = ProductOptionlistResponse.name || '';
    this.parentInt = ProductOptionlistResponse.parentInt || '';
    this.sortOrder = ProductOptionlistResponse.sortOrder || '';
    this.metaTagTitle = ProductOptionlistResponse.metaTagTitle || '';
    this.metaTagDescription =
      ProductOptionlistResponse.metaTagDescription || '';
    this.metaTagKeyword = ProductOptionlistResponse.metaTagKeyword || '';
    this.isActive = ProductOptionlistResponse.isActive || 0;
    this.levels = ProductOptionlistResponse.levels || '';
  }
}
