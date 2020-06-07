/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ProductOptioncountForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public count: string;

  constructor(ProductOptioncountForm: any) {
    this.limit = ProductOptioncountForm.limit || '';
    this.offset = ProductOptioncountForm.offset || '';
    this.keyword = ProductOptioncountForm.keyword || '';
    this.sortOrder = ProductOptioncountForm.sortOrder || '';
    this.count = ProductOptioncountForm.count || '';
  }
}
