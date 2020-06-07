/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import * as actions from '../action/product-option.action';
// state
import {
  ProductOptionState,
  ProductOptionStateRecord,
} from './product-option.state';
// model
import { ProductOptionlistResponseModel } from '../models/optionlist.response.model';

export const initialState: ProductOptionState = new ProductOptionStateRecord() as ProductOptionState;

export function reducer(
  state = initialState,
  { type, payload }: any
): ProductOptionState {
  if (!type) {
    return state;
  }

  switch (type) {
    // productoption list action
    case actions.ActionTypes.DO_PRODUCTOPTION_LIST: {
      return Object.assign({}, state, {
        productoptionListResponse: false,
        productoptionListRequestLoading: true,
        productoptionListRequestLoaded: false,
        productoptionListRequestFailed: false,
      });
    }
    case actions.ActionTypes.DO_PRODUCTOPTION_LIST_SUCCESS: {
      const productoptionModel = payload.data.map((list) => {
        // productoptionListFilter
        const tempproductoptionModel = new ProductOptionlistResponseModel(list);
        return tempproductoptionModel;
      });
      let productoptionFilterModel = [];
      if (!state.productoptionListFilter) {
        productoptionFilterModel = payload.data.map((list) => {
          const tempproductoptionFilterModel = new ProductOptionlistResponseModel(
            list
          );
          return tempproductoptionFilterModel;
        });
      } else {
        productoptionFilterModel = state.productoptionListFilter;
      }
      return Object.assign({}, state, {
        productoptionList: productoptionModel,
        productoptionListFilter: productoptionFilterModel,
        productoptionListResponse: true,
        productoptionListRequestLoading: false,
        productoptionListRequestLoaded: false,
        productoptionListRequestFailed: false,
      });
    }
    case actions.ActionTypes.DO_PRODUCTOPTION_LIST_FAIL: {
      return Object.assign({}, state, {
        productoptionCountResponse: false,
        productoptionCountRequestLoading: false,
        productoptionCountRequestLoaded: true,
        productoptionCountRequestFailed: true,
      });
    }
    // productoption delete action
    case actions.ActionTypes.DO_DELETE_PRODUCTOPTION: {
      return Object.assign({}, state, {
        deleteProductOptionResponse: false,
        deleteProductOptionRequestLoading: true,
        deleteProductOptionRequestLoaded: false,
        deleteProductOptionRequestFailed: false,
      });
    }
    case actions.ActionTypes.DO_DELETE_PRODUCTOPTION_SUCCESS: {
      return Object.assign({}, state, {
        productoptionDoDelete: payload,
        deleteProductOptionResponse: true,
        deleteProductOptionRequestLoading: false,
        deleteProductOptionRequestLoaded: false,
        deleteProductOptionRequestFailed: false,
      });
    }
    case actions.ActionTypes.DO_DELETE_PRODUCTOPTION_FAIL: {
      return Object.assign({}, state, {
        deleteProductOptionResponse: false,
        deleteProductOptionRequestLoading: false,
        deleteProductOptionRequestLoaded: true,
        deleteProductOptionRequestFailed: true,
      });
    }
    // productoption add action
    case actions.ActionTypes.DO_ADDPRODUCTOPTION: {
      return Object.assign({}, state, {
        addProductOptionResponse: false,
        addProductOptionRequestLoading: true,
        addProductOptionRequestLoaded: false,
        addProductOptionRequestFailed: false,
      });
    }
    case actions.ActionTypes.DO_ADDPRODUCTOPTION_SUCCESS: {
      return Object.assign({}, state, {
        addProductOptionStatus: payload,
        addProductOptionRequestLoading: false,
        addProductOptionRequestLoaded: true,
        addProductOptionRequestFailed: false,
      });
    }
    case actions.ActionTypes.DO_ADDPRODUCTOPTION_FAIL: {
      return Object.assign({}, state, {
        addProductOptionResponse: false,
        addProductOptionRequestLoading: false,
        addProductOptionRequestLoaded: true,
        addProductOptionRequestFailed: true,
      });
    }
    // productoption update action

    case actions.ActionTypes.DO_UPDATEPRODUCTOPTION: {
      return Object.assign({}, state, {
        updateProductOptionResponse: false,
        updateProductOptionRequestLoading: true,
        updateProductOptionRequestLoaded: false,
        updateProductOptionRequestFailed: false,
      });
    }
    case actions.ActionTypes.DO_UPDATEPRODUCTOPTION_SUCCESS: {
      return Object.assign({}, state, {
        updateProductOption: payload,
        updateProductOptionResponse: true,
        updateProductOptionRequestLoading: false,
        updateProductOptionRequestLoaded: false,
        updateProductOptionRequestFailed: false,
      });
    }
    case actions.ActionTypes.DO_UPDATEPRODUCTOPTION_FAIL: {
      return Object.assign({}, state, {
        updateProductOptionBadresponse: payload,
        updateProductOptionResponse: false,
        updateProductOptionRequestLoading: false,
        updateProductOptionRequestLoaded: true,
        updateProductOptionRequestFailed: true,
      });
    }

    // product remove action

    // productoption count action
    case actions.ActionTypes.DO_PRODUCTOPTIONCOUNT: {
      return Object.assign({}, state, {
        productoptionCountResponse: false,
        productoptionCountRequestLoading: true,
        productoptionCountRequestLoaded: false,
        productoptionCountRequestFailed: false,
      });
    }
    case actions.ActionTypes.DO_PRODUCTOPTIONCOUNT_SUCCESS: {
      return Object.assign({}, state, {
        productoptionListnCount: payload.data,
        productoptionCountResponse: true,
        productoptionCountRequestLoading: false,
        productoptionCountRequestLoaded: false,
        productoptionCountRequestFailed: false,
      });
    }
    case actions.ActionTypes.DO_PRODUCTOPTIONCOUNT_FAIL: {
      return Object.assign({}, state, {
        productoptionCountResponse: false,
        productoptionCountRequestLoading: false,
        productoptionCountRequestLoaded: true,
        productoptionCountRequestFailed: true,
      });
    }
    default: {
      return state;
    }
  }
}

// productoption count action
export const getProductOptionListnCount = (state: ProductOptionState) =>
  state.productoptionListnCount;
export const getProductOptionCountResponse = (state: ProductOptionState) =>
  state.productoptionCountResponse;
export const getProductOptionCountRequestLoading = (
  state: ProductOptionState
) => state.productoptionCountRequestLoading;
export const getProductOptionCountRequestLoaded = (state: ProductOptionState) =>
  state.productoptionCountRequestLoaded;
export const getProductOptionCountRequestFailed = (state: ProductOptionState) =>
  state.productoptionCountRequestFailed;
export const getProductOptionCountdata = (state: ProductOptionState) =>
  state.productoptionCountData;
// productoption list action
export const getProductOptionList = (state: ProductOptionState) =>
  state.productoptionList;
// productoptionListFilter
export const getProductOptionFilterList = (state: ProductOptionState) =>
  state.productoptionListFilter;

export const getProductOptionListResponse = (state: ProductOptionState) =>
  state.productoptionListResponse;
export const getProductOptionListRequestLoading = (state: ProductOptionState) =>
  state.productoptionListRequestLoading;
export const getProductOptionListRequestLoaded = (state: ProductOptionState) =>
  state.productoptionListRequestLoaded;
export const getProductOptionListRequestFailed = (state: ProductOptionState) =>
  state.productoptionListRequestFailed;

// productoption delete action
export const getProductOptionDoDelete = (state: ProductOptionState) =>
  state.productoptionDoDelete;
export const getDeleteProductOptionResponse = (state: ProductOptionState) =>
  state.deleteProductOptionResponse;
export const getDeleteProductOptionRequestLoading = (
  state: ProductOptionState
) => state.deleteProductOptionRequestLoading;
export const getDeleteProductOptionRequestLoaded = (
  state: ProductOptionState
) => state.deleteProductOptionRequestLoaded;
export const getDeleteProductOptionRequestFailed = (
  state: ProductOptionState
) => state.deleteProductOptionRequestFailed;
// productoption add action
export const getAddProductOptionStatus = (state: ProductOptionState) =>
  state.addProductOptionStatus;
export const getAddProductOptionData = (state: ProductOptionState) =>
  state.addProductOptionData;
export const getAddProductOptionResponse = (state: ProductOptionState) =>
  state.addProductOptionResponse;
export const getAddProductOptionRequestLoading = (state: ProductOptionState) =>
  state.addProductOptionRequestLoading;
export const getAddProductOptionRequestLoaded = (state: ProductOptionState) =>
  state.addProductOptionRequestLoaded;
export const getAddProductOptionRequestFailed = (state: ProductOptionState) =>
  state.addProductOptionRequestFailed;
// productoption update action
export const getUpdateProductOptionResponse = (state: ProductOptionState) =>
  state.updateProductOptionResponse;
export const getUpdateProductOptionRequestLoading = (
  state: ProductOptionState
) => state.updateProductOptionRequestLoading;
export const getUpdateProductOptionRequestLoaded = (
  state: ProductOptionState
) => state.updateProductOptionRequestLoaded;
export const getUpdateProductOptionRequestFailed = (
  state: ProductOptionState
) => state.updateProductOptionRequestFailed;
export const getUpdateProductOptionBadresponse = (state: ProductOptionState) =>
  state.updateProductOptionBadresponse;
export const getUpdateProductOption = (state: ProductOptionState) =>
  state.updateProductOption;
