/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ProductOptiondeleteForm {
  public ProductOptionId: number;

  constructor(ProductOptiondeleteForm: any) {
    this.ProductOptionId = ProductOptiondeleteForm.ProductOptionId || '';
  }
}
