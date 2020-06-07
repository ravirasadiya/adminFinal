import { createSelector } from 'reselect';
// reducer
import * as fromProductOption from '../reducer/product-option.reducer';
// app state
import { AppState } from '../../../../app.state.interface';

// *************************** PUBLIC API's ****************************
/**
 * Auth store functionsget
 */

export const getCatState = (state: AppState) => state.productoption;
// ProductOption list action
export const getProductOptionList = createSelector(
  getCatState,
  fromProductOption.getProductOptionList
);
// getProductOptionFilterList
export const getProductOptionFilterList = createSelector(
  getCatState,
  fromProductOption.getProductOptionFilterList
);

export const getProductOptionListnCount = createSelector(
  getCatState,
  fromProductOption.getProductOptionListnCount
);
export const getProductOptionListResponse = createSelector(
  getCatState,
  fromProductOption.getProductOptionListResponse
);
export const getProductOptionListRequestLoading = createSelector(
  getCatState,
  fromProductOption.getProductOptionListRequestLoading
);
export const getProductOptionListRequestLoaded = createSelector(
  getCatState,
  fromProductOption.getProductOptionListRequestLoaded
);
export const getProductOptionListRequestFailed = createSelector(
  getCatState,
  fromProductOption.getProductOptionListRequestFailed
);
// ProductOption delete action
export const getProductOptionDoDelete = createSelector(
  getCatState,
  fromProductOption.getProductOptionDoDelete
);
export const getDeleteProductOptionResponse = createSelector(
  getCatState,
  fromProductOption.getDeleteProductOptionResponse
);
export const getDeleteProductOptionRequestLoading = createSelector(
  getCatState,
  fromProductOption.getDeleteProductOptionRequestLoading
);
export const getDeleteProductOptionRequestLoaded = createSelector(
  getCatState,
  fromProductOption.getDeleteProductOptionRequestLoaded
);
export const getDeleteProductOptionRequestFailed = createSelector(
  getCatState,
  fromProductOption.getDeleteProductOptionRequestFailed
);
// product add action
export const getAddProductOptionStatus = createSelector(
  getCatState,
  fromProductOption.getAddProductOptionStatus
);
export const getAddProductOptionData = createSelector(
  getCatState,
  fromProductOption.getAddProductOptionData
);
export const getAddProductOptionResponse = createSelector(
  getCatState,
  fromProductOption.getAddProductOptionResponse
);
export const getAddProductOptionRequestLoading = createSelector(
  getCatState,
  fromProductOption.getAddProductOptionRequestLoading
);
export const getAddProductOptionRequestLoaded = createSelector(
  getCatState,
  fromProductOption.getAddProductOptionRequestLoaded
);
export const getAddProductOptionRequestFailed = createSelector(
  getCatState,
  fromProductOption.getAddProductOptionRequestFailed
);
// ProductOption update action
export const getUpdateProductOption = createSelector(
  getCatState,
  fromProductOption.getUpdateProductOption
);
export const getUpdateProductOptionResponse = createSelector(
  getCatState,
  fromProductOption.getUpdateProductOptionResponse
);
export const getUpdateProductOptionRequestLoading = createSelector(
  getCatState,
  fromProductOption.getUpdateProductOptionRequestLoading
);
export const getUpdateProductOptionRequestLoaded = createSelector(
  getCatState,
  fromProductOption.getUpdateProductOptionRequestLoaded
);
export const getUpdateProductOptionRequestFailed = createSelector(
  getCatState,
  fromProductOption.getUpdateProductOptionRequestFailed
);
// ProductOption count action
export const getProductOptionCountdata = createSelector(
  getCatState,
  fromProductOption.getProductOptionCountdata
);
export const getUpdateProductOptionBadresponse = createSelector(
  getCatState,
  fromProductOption.getUpdateProductOptionBadresponse
);
export const getProductOptionCountResponse = createSelector(
  getCatState,
  fromProductOption.getProductOptionCountResponse
);
export const getProductOptionCountRequestLoading = createSelector(
  getCatState,
  fromProductOption.getProductOptionCountRequestLoading
);
export const getProductOptionCountRequestLoaded = createSelector(
  getCatState,
  fromProductOption.getProductOptionCountRequestLoaded
);
export const getProductOptionCountRequestFailed = createSelector(
  getCatState,
  fromProductOption.getProductOptionCountRequestFailed
);
