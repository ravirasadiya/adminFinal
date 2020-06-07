/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { Map, Record } from 'immutable';

export interface ProductOptionState extends Map<string, any> {
  productoptionListnCount: any;
  productoptionList: any;
  productoptionListFilter: any;
  productoptionDoDelete: any;
  addProductOptionStatus: any;
  addProductOptionData: any;
  updateProductOption: any;
  productoptionCountData: any;
  updateProductOptionBadresponse: any;

  deleteProductOptionResponse: any;
  deleteProductOptionRequestLoading: any;
  deleteProductOptionRequestLoaded: any;
  deleteProductOptionRequestFailed: any;

  productoptionCountResponse: any;
  productoptionCountRequestLoading: any;
  productoptionCountRequestLoaded: any;
  productoptionCountRequestFailed: any;

  productoptionListResponse: any;
  productoptionListRequestLoading: any;
  productoptionListRequestLoaded: any;
  productoptionListRequestFailed: any;

  updateProductOptionResponse: any;
  updateProductOptionRequestLoading: any;
  updateProductOptionRequestLoaded: any;
  updateProductOptionRequestFailed: any;

  addProductOptionResponse: any;
  addProductOptionRequestLoading: any;
  addProductOptionRequestLoaded: any;
  addProductOptionRequestFailed: any;
}

export const ProductOptionStateRecord = Record({
  productoptionListnCount: {},
  productoptionList: [],
  productoptionListFilter: {},
  productoptionDoDelete: {},
  addProductOption: {},
  addProductOptionData: {},
  updateProductOption: {},
  productoptionCountData: {},
  updateProductOptionBadresponse: {},
  addProductOptionStatus: {},

  deleteProductOptionResponse: {},
  deleteProductOptionRequestLoading: {},
  deleteProductOptionRequestLoaded: {},
  deleteProductOptionRequestFailed: {},

  productoptionCountResponse: {},
  productoptionCountRequestLoading: {},
  productoptionCountRequestLoaded: {},
  productoptionCountRequestFailed: {},

  productoptionListResponse: {},
  productoptionListRequestLoading: {},
  productoptionListRequestLoaded: {},
  productoptionListRequestFailed: {},

  updateProductOptionResponse: {},
  updateProductOptionRequestLoading: {},
  updateProductOptionRequestLoaded: {},
  updateProductOptionRequestFailed: {},

  addProductOptionResponse: {},
  addProductOptionRequestLoading: {},
  addCproductoptionRequestLoaded: {},
  addProductOptionRequestFailed: {},
});
