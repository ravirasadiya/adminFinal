/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ProductOptionupdateForm {
  public ProductOptionId: any;
  public name: string;
  public sortOrder: number;
  public metaTagDescription: string;
  public metaTagKeyword: string;
  public metaTagTitle: string;
  public parentInt: number;
  public status: number;

  constructor(ProductOptionupdateForm: any) {
    this.ProductOptionId = ProductOptionupdateForm.ProductOptionId;
    this.name = ProductOptionupdateForm.name || '';
    this.sortOrder = ProductOptionupdateForm.sortOrder || '';
    this.metaTagDescription = ProductOptionupdateForm.metaTagDescription || '';
    this.metaTagKeyword = ProductOptionupdateForm.metaTagKeyword || '';
    this.metaTagTitle = ProductOptionupdateForm.metaTagTitle || '';
    this.parentInt = ProductOptionupdateForm.parentInt;
    this.status = ProductOptionupdateForm.status || '';
  }
}
