/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductOptionSandbox } from './../../../../../../../core/admin/catalog/product-option/product-option.sandbox';

@Component({
  selector: 'app-spurt-catalog-ProductOption-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class ProductOptionFilterComponent implements OnInit {
  // productoptionlist purpose

  @Output() progressEmit = new EventEmitter<string>();
  // FormGroup Variable
  public filterForm: FormGroup;
  public productoptionNameList: FormControl;
  public sortOrder: FormControl;
  public pageSize: any = 500;
  public productoptionListArray: any = [];

  constructor(
    public productoptionSandbox: ProductOptionSandbox,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.pageSize = localStorage.getItem('itemsPerPage');
    this.productoptionList();
    this.initFilterForm();
  }

  // Formgroup
  initFilterForm() {
    this.filterForm = this.fb.group({
      productoptionNameList: [''],
      sortOrder: [''],
    });
  }

  /**
   * Handles filter  . Calls productoptionSandbox productoptionlist function .
   *
   * @param param with value which is already assigned
   */
  filter() {
    const param: any = {};
    param.limit = this.pageSize;
    param.offset = '';
    param.keyword = this.filterForm.value.productoptionNameList;
    param.sortOrder = this.filterForm.value.sortOrder;
    this.progressEmit.emit(param);
    this.productoptionSandbox.ProductOptionlist(param);
    param.limit = '';
    param.count = true;
    this.productoptionSandbox.ProductOptioncountdata(param);
  }

  // reset productoption list
  /**
   * Handles reset function  . Calls productoptionSandbox productoptionlist function .
   *
   * @param param with only one limit value .
   */

  reset() {
    this.filterForm.reset();
    const param: any = {};
    param.limit = this.pageSize;
    param.offset = '';
    param.keyword = '';
    this.progressEmit.emit(param);
    this.productoptionSandbox.ProductOptionlist(param);
  }

  productoptionList() {
    this.productoptionSandbox.getProductOptionFilterList$.subscribe((data) => {
      if (data && data[0]) {
        this.productoptionListArray = data;
      }
    });
  }
}
