/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ProductOptionForm {
  public name: string;
  public sortOrder: number;
  public metaTagDescription: string;
  public metaTagKeyword: string;
  public metaTagTitle: string;
  public parentInt: number;
  public status: number;

  constructor(productoptionForm: any) {
    this.name = productoptionForm.name || '';
    this.sortOrder = productoptionForm.sortOrder || '';
    this.metaTagDescription = productoptionForm.metaTagDescription || '';
    this.metaTagKeyword = productoptionForm.metaTagKeyword || '';
    this.metaTagTitle = productoptionForm.metaTagTitle || '';
    this.parentInt = productoptionForm.parentInt;
    this.status = productoptionForm.status || '';
  }
}
