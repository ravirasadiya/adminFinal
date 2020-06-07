/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ProductOptionlistForm {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sortOrder: string;
  public status: string;
  constructor(ProductOptionlistForm: any) {
    this.limit = ProductOptionlistForm.limit || '';
    this.offset = ProductOptionlistForm.offset || '';
    this.keyword = ProductOptionlistForm.keyword || '';
    this.sortOrder = ProductOptionlistForm.sortOrder || '';
    this.status = ProductOptionlistForm.status || '';
  }
}
