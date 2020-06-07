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
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
// model

import { Api } from '../../providers/api/api';
import { ProductOptionForm } from './models/option.model';
import { ProductOptionlistForm } from './models/optionlist.model';
import { ProductOptiondeleteForm } from './models/optiondelete.model';

@Injectable()
export class ProductOptionService extends Api {
  // url
  private url: string = this.getBaseUrl();
  // for get method
  public params: any = {};
  // editing productoption purpose
  public setEditvariable: any;

  // passing data to productoption edit

  setEditproductoption(data) {
    this.setEditvariable = data;
  }

  getEditproductoption() {
    return this.setEditvariable;
  }

  /**
   * Handles 'productoptionListPagination' function. Calls get method with specific api address
   * along its param.
   *
   * @param params from ProductOptionlistForm.
   */
  public productoptionListPagination(params: any): Observable<any> {
    let reqOpts: any = {};
    reqOpts = params;
    return this.http.get(this.url + '/productoptionList', { params: reqOpts });
  }

  /**
   * Handles 'updateProductOption' function. Calls put method with specific api address
   * along its param.
   *
   * @param params from model.
   */
  updateProductOption(params): Observable<any> {
    return this.http.put(
      this.url + '/update-productoption/' + params.productoptionId,
      params
    );
  }

  /**
   * Handles 'delete' function. Calls delete method with specific api address
   * along its param.
   *
   * @param params from ProductOptiondeleteForm
   */
  delete(params: ProductOptiondeleteForm): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: { productoptionId: params.ProductOptionId },
    };

    return this.http.delete(
      this.url + '/delete-productoption/' + params.ProductOptionId,
      httpOptions
    );
  }

  /**
   * Handles 'productoptionList' function. Calls get method with specific api address
   * along its param.
   *
   * @param params from ProductOptionlistForm
   */
  public productoptionList(params: ProductOptionlistForm): Observable<any> {
    let reqOpts: any = {};
    reqOpts = params;
    return this.http.get(this.url + '/option-list', { params: reqOpts });
  }

  /**
   * Handles 'addProductOption' function. Calls post method with specific api address
   * along its param.
   *
   * @param param from ProductOptionForm
   */

  addProductOption(param: ProductOptionForm): Observable<any> {
    return this.http.post(this.url + '/add-productoption', param);
  }
}
