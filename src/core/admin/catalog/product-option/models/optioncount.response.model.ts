/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class ProductOptioncountResponseModel {
  public user: any = {};

  constructor(ProductOptioncountResponse: any) {
    this.user = ProductOptioncountResponse || '';
  }
}
