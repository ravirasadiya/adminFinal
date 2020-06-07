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
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as actions from '../action/product-option.action';
import { catchError } from 'rxjs/internal/operators';
import { ProductOptiondeleteResponseModel } from '../models/optiondelete.response.model';
import { ProductOptionupdateResponseModel } from '../models/optionupdate.response.model';
// service
import { ProductOptionService } from '../product-option.service';
// model

@Injectable()
export class ProductOptionEffect {
  constructor(
    private action$: Actions,
    private ProductOptionService: ProductOptionService
  ) {}

  // ProductOption LIST
  @Effect()
  docatlists$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_PRODUCTOPTION_LIST),
    map((action: actions.DoProductOptionlistAction) => action.payload),
    switchMap((state) => {
      return this.ProductOptionService.productoptionList(state).pipe(
        switchMap((list) => [
          new actions.DoProductOptionlistSuccessAction(list),
        ]),
        catchError((error) =>
          of(new actions.DoProductOptionlistFailAction(error))
        )
      );
    })
  );

  @Effect()
  doDelete$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_DELETE_PRODUCTOPTION),
    map((action: actions.DoDeleteProductOptionAction) => action.payload),
    switchMap((state) => {
      return this.ProductOptionService.delete(state).pipe(
        switchMap((user) => [
          new actions.DoDeleteProductOptionSuccessAction(
            new ProductOptiondeleteResponseModel(user)
          ),
        ]),
        catchError((error) =>
          of(
            new actions.DoCatcountFailAction(
              new ProductOptiondeleteResponseModel(error)
            )
          )
        )
      );
    })
  );

  @Effect()
  doaddProductOption$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_ADDPRODUCTOPTION),
    map((action: actions.DoAddProductOptionAction) => action.payload),
    switchMap((state) => {
      return this.ProductOptionService.addProductOption(state).pipe(
        switchMap((add) => {
          return [new actions.DoAddProductOptionSuccessAction(add)];
        }),
        catchError((error) =>
          of(new actions.DoAddProductOptionFailAction(error))
        )
      );
    })
  );

  @Effect()
  doupdateProductOption$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_UPDATEPRODUCTOPTION),
    map((action: actions.DoUpdateProductOptionAction) => action.payload),
    switchMap((state) => {
      return this.ProductOptionService.updateProductOption(state).pipe(
        switchMap((user) => {
          return [new actions.DoUpdateProductOptionSuccessAction(user)];
        }),
        catchError((error) =>
          of(
            new actions.DoUpdateProductOptionFailAction(
              new ProductOptionupdateResponseModel(error)
            )
          )
        )
      );
    })
  );

  // ProductOption pagination

  @Effect()
  docount$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DO_PRODUCTOPTIONCOUNT),
    map((action: actions.DoProductOptioncountAction) => action.payload),
    switchMap((state) => {
      return this.ProductOptionService.productoptionListPagination(state).pipe(
        switchMap((user) => [
          new actions.DoProductOptioncountSuccessAction(user),
        ]),
        catchError((error) => of(new actions.DoCatcountFailAction(error)))
      );
    })
  );
}
