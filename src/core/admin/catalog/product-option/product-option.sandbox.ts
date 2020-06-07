/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { Injectable } from '@angular/core';
// store
import { Store } from '@ngrx/store';
// app state
import * as store from '../../../app.state.interface';
// action
import * as productoptionActions from './action/product-option.action';
// model
import { ProductOptionlistForm } from './models/optionlist.model';
import { ProductOptiondeleteForm } from './models/optiondelete.model';
import {
  // ProductOption list selectors
  getProductOptionList,
  getProductOptionListResponse,
  getProductOptionListRequestLoading,
  getProductOptionListRequestLoaded,
  getProductOptionListRequestFailed,
  getProductOptionListnCount,
  // ProductOption count selectors
  getProductOptionCountRequestFailed,
  getProductOptionCountRequestLoaded,
  getProductOptionCountResponse,
  getProductOptionCountRequestLoading,
  getProductOptionCountdata,
  // ProductOption update selectors
  getUpdateProductOption,
  getUpdateProductOptionBadresponse,
  getUpdateProductOptionResponse,
  getUpdateProductOptionRequestLoading,
  getUpdateProductOptionRequestLoaded,
  getUpdateProductOptionRequestFailed,
  // ProductOption delete selectors
  getProductOptionDoDelete,
  getDeleteProductOptionResponse,
  getDeleteProductOptionRequestLoading,
  getDeleteProductOptionRequestLoaded,
  getDeleteProductOptionRequestFailed,
  // ProductOption add selectors
  getAddProductOptionStatus,
  getAddProductOptionData,
  getAddProductOptionResponse,
  getAddProductOptionRequestLoading,
  getAddProductOptionRequestLoaded,
  getAddProductOptionRequestFailed,
  getProductOptionFilterList,
} from './reducer/product-option.selectors';
import { ProductOptionForm } from './models/option.model';
import { ProductOptionupdateForm } from './models/optionupdate.model';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { ProductOptioncountForm } from './models/optioncount.model';
import * as _ from 'lodash';

@Injectable()
export class ProductOptionSandbox {
  public levelsloop: any = [];
  public getProductOptionList$ = this.appState.select(getProductOptionList);
  // ProductOptionFilterList
  public getProductOptionFilterList$ = this.appState.select(
    getProductOptionFilterList
  );

  public getProductOptionListCount$ = this.appState.select(
    getProductOptionListnCount
  );
  public getProductOptionDelete$ = this.appState.select(
    getProductOptionDoDelete
  );
  public getAddProductOption$ = this.appState.select(getAddProductOptionStatus);
  public getAddProductOptiondata$ = this.appState.select(
    getAddProductOptionData
  );
  public getUpdateProductOptionData$ = this.appState.select(
    getUpdateProductOption
  );
  public getUpdateProductOptionountdatas$ = this.appState.select(
    getProductOptionCountdata
  );
  public getUpdateProductOptionBadresponse$ = this.appState.select(
    getUpdateProductOptionBadresponse
  );

  public getDeleteProductOptionResponse$ = this.appState.select(
    getDeleteProductOptionResponse
  );
  public getDeleteProductOptionRequestLoading$ = this.appState.select(
    getDeleteProductOptionRequestLoading
  );
  public getDeleteProductOptionRequestLoaded$ = this.appState.select(
    getDeleteProductOptionRequestLoaded
  );
  public getDeleteProductOptionRequestFailed$ = this.appState.select(
    getDeleteProductOptionRequestFailed
  );

  public getProductOptionCountResponse$ = this.appState.select(
    getProductOptionCountResponse
  );
  public getProductOptionCountRequestLoading$ = this.appState.select(
    getProductOptionCountRequestLoading
  );
  public getProductOptionCountRequestLoaded$ = this.appState.select(
    getProductOptionCountRequestLoaded
  );
  public getProductOptionCountRequestFailed$ = this.appState.select(
    getProductOptionCountRequestFailed
  );

  public getProductOptionListResponse$ = this.appState.select(
    getProductOptionListResponse
  );
  public getProductOptionListRequestLoading$ = this.appState.select(
    getProductOptionListRequestLoading
  );
  public getProductOptionListRequestLoaded$ = this.appState.select(
    getProductOptionListRequestLoaded
  );
  public getProductOptionListRequestFailed$ = this.appState.select(
    getProductOptionListRequestFailed
  );

  public getUpdateProductOptionResponse$ = this.appState.select(
    getUpdateProductOptionResponse
  );
  public getUpdateProductOptionRequestLoading$ = this.appState.select(
    getUpdateProductOptionRequestLoading
  );
  public getUpdateProductOptionRequestLoaded$ = this.appState.select(
    getUpdateProductOptionRequestLoaded
  );
  public getUpdateProductOptionRequestFailed$ = this.appState.select(
    getUpdateProductOptionRequestFailed
  );

  public getAddProductOptionResponse$ = this.appState.select(
    getAddProductOptionResponse
  );
  public getAddProductOptionRequestLoading$ = this.appState.select(
    getAddProductOptionRequestLoading
  );
  public getAddProductOptionRequestLoaded$ = this.appState.select(
    getAddProductOptionRequestLoaded
  );
  public getAddProductOptionRequestFailed$ = this.appState.select(
    getAddProductOptionRequestFailed
  );

  public parentLevels: any = [];

  constructor(
    protected appState: Store<store.AppState>,
    private toastr: ToastrManager,
    private router: Router
  ) {
    this.subscribe();
  }

  public ProductOptionlist(value) {
    this.appState.dispatch(
      new productoptionActions.DoProductOptionlistAction(
        new ProductOptionlistForm(value)
      )
    );
  }

  public ProductOptioncountdata(value) {
    this.appState.dispatch(
      new productoptionActions.DoProductOptioncountAction(
        new ProductOptioncountForm(value)
      )
    );
  }

  public ProductOptiondelete(value) {
    this.appState.dispatch(
      new productoptionActions.DoDeleteProductOptionAction(
        new ProductOptiondeleteForm(value)
      )
    );
  }

  public addproductoption(value) {
    this.appState.dispatch(
      new productoptionActions.DoAddProductOptionAction(
        new ProductOptionForm(value)
      )
    );
  }

  public updateproductoption(value) {
    this.appState.dispatch(
      new productoptionActions.DoUpdateProductOptionAction(
        new ProductOptionupdateForm(value)
      )
    );
  }

  public subscribe() {
    this.getAddProductOption$.subscribe((data) => {
      // if (data && data.status === 1) {
      //   this.router.navigate(['/catalog/productoption']);
      // }
    });

    this.getUpdateProductOptionData$.subscribe((data) => {
      // if (data && data.status === 1) {
      //   this.router.navigate(['/catalog/productoption']);
      // }
    });
    this.getProductOptionList$.subscribe((data) => {
      _.each(data, (value) => {
        const params: any = {};
        params.subLevel1 = _.get(value, 'levels[0].ProductOptionName');
        params.subLevel2 = _.get(value, 'levels[1].ProductOptionName')
          ? ' > ' + _.get(value, 'levels[1].ProductOptionName')
          : '';
        params.subLevel3 = _.get(value, 'levels[2].ProductOptionName')
          ? ' > ' + _.get(value, 'levels[2].ProductOptionName')
          : '';
        value.level = params.subLevel1 + params.subLevel2 + params.subLevel3;
        this.levelsloop = value.level;
      });
    });
  }
}
