import { ProductOptionForm } from './../models/option.model';
/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { type } from '../../../shared/utility/utilityHelpers';
import { Action } from '@ngrx/store';
import { ProductOptionlistForm } from '../models/optionlist.model';
import { ProductOptioncountForm } from '../models/optioncount.model';
import { ProductOptiondeleteForm } from '../models/optiondelete.model';
import { ProductOptionupdateForm } from '../models/optionupdate.model';

// Model

export const ActionTypes = {
  DO_PRODUCTOPTION_LIST: type('[List] Do ProductOptionlist'),
  DO_PRODUCTOPTION_LIST_SUCCESS: type('[List] Do ProductOptionlist Success'),
  DO_PRODUCTOPTION_LIST_FAIL: type('[List] Do ProductOptionlist Fail'),

  DO_DELETE_PRODUCTOPTION: type('[Delete] Do Delete ProductOption'),
  DO_DELETE_PRODUCTOPTION_SUCCESS: type(
    '[Delete] Do Delete ProductOption Success'
  ),
  DO_DELETE_PRODUCTOPTION_FAIL: type('[Delete] Do Delete ProductOption Fail'),

  DO_UPDATEPRODUCTOPTION: type('[Add] Do Update ProductOption'),
  DO_UPDATEPRODUCTOPTION_SUCCESS: type('[Add] Do Update ProductOption Success'),
  DO_UPDATEPRODUCTOPTION_FAIL: type('[Add] Do Update ProductOption Fail'),

  DO_ADDPRODUCTOPTION: type('[Catalog] Do AddProductOption'),
  DO_ADDPRODUCTOPTION_SUCCESS: type('[Catalog] Do AddProductOption Success'),
  DO_ADDPRODUCTOPTION_FAIL: type('[Catalog] Do AddProductOption Fail'),

  DO_PRODUCTOPTIONCOUNT: type('[Listcount] Do ProductOptionlistcount'),
  DO_PRODUCTOPTIONCOUNT_SUCCESS: type(
    '[Listcount] Do ProductOptionlistcount Success'
  ),
  DO_PRODUCTOPTIONCOUNT_FAIL: type(
    '[Listcount] Do ProductOptionlistcount Fail'
  ),
};

// category list action
export class DoProductOptionlistAction implements Action {
  type = ActionTypes.DO_PRODUCTOPTION_LIST;

  constructor(public payload: ProductOptionlistForm) {}
}

export class DoProductOptionlistSuccessAction implements Action {
  type = ActionTypes.DO_PRODUCTOPTION_LIST_SUCCESS;

  constructor(public payload: any) {}
}

export class DoProductOptionlistFailAction implements Action {
  type = ActionTypes.DO_PRODUCTOPTION_LIST_FAIL;

  constructor(public payload: any = null) {}
}

// category count action

export class DoProductOptioncountAction implements Action {
  type = ActionTypes.DO_PRODUCTOPTIONCOUNT;

  constructor(public payload: ProductOptioncountForm) {}
}

export class DoProductOptioncountSuccessAction implements Action {
  type = ActionTypes.DO_PRODUCTOPTIONCOUNT_SUCCESS;

  constructor(public payload: any) {}
}

export class DoCatcountFailAction implements Action {
  type = ActionTypes.DO_PRODUCTOPTIONCOUNT_FAIL;

  constructor(public payload: any = null) {}
}

// category delete action
export class DoDeleteProductOptionAction implements Action {
  type = ActionTypes.DO_DELETE_PRODUCTOPTION;

  constructor(public payload: ProductOptiondeleteForm) {}
}

export class DoDeleteProductOptionSuccessAction implements Action {
  type = ActionTypes.DO_DELETE_PRODUCTOPTION_SUCCESS;

  constructor(public payload: any) {}
}

export class DoDeleteProductOptionFailAction implements Action {
  type = ActionTypes.DO_DELETE_PRODUCTOPTION_FAIL;

  constructor(public payload: any = null) {}
}

// category add action
export class DoAddProductOptionAction implements Action {
  type = ActionTypes.DO_ADDPRODUCTOPTION;

  constructor(public payload: ProductOptionForm) {}
}

export class DoAddProductOptionSuccessAction implements Action {
  type = ActionTypes.DO_ADDPRODUCTOPTION_SUCCESS;

  constructor(public payload: any) {}
}

export class DoAddProductOptionFailAction implements Action {
  type = ActionTypes.DO_ADDPRODUCTOPTION_FAIL;

  constructor(public payload: any = null) {}
}

// category update action
export class DoUpdateProductOptionAction implements Action {
  type = ActionTypes.DO_UPDATEPRODUCTOPTION;

  constructor(public payload: ProductOptionupdateForm) {}
}

export class DoUpdateProductOptionSuccessAction implements Action {
  type = ActionTypes.DO_UPDATEPRODUCTOPTION_SUCCESS;

  constructor(public payload: any) {}
}

export class DoUpdateProductOptionFailAction implements Action {
  type = ActionTypes.DO_UPDATEPRODUCTOPTION_FAIL;

  constructor(public payload: any = null) {}
}

export type Actions =
  | DoProductOptionlistAction
  | DoProductOptionlistSuccessAction
  | DoProductOptionlistFailAction
  | DoProductOptioncountAction
  | DoProductOptioncountSuccessAction
  | DoCatcountFailAction
  | DoDeleteProductOptionAction
  | DoDeleteProductOptionSuccessAction
  | DoDeleteProductOptionFailAction
  | DoAddProductOptionAction
  | DoAddProductOptionSuccessAction
  | DoAddProductOptionFailAction
  | DoUpdateProductOptionAction
  | DoUpdateProductOptionSuccessAction
  | DoUpdateProductOptionFailAction;
