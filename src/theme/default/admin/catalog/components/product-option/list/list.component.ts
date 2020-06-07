import { Component, OnInit } from '@angular/core';
// Routing Module
import { Router } from '@angular/router';
// Store Module
import { ProductOptionSandbox } from './../../../../../../../core/admin/catalog/product-option/product-option.sandbox';
import { ProductOptionService } from './../../../../../../../core/admin/catalog/product-option/product-option.service';
import { LayoutsSandbox } from '../../../../../../../core/admin/catalog/layout/layout.sandbox';
import { environment } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-spurt-catalog-productoption-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ProductOptionListComponent implements OnInit {
  // pagination
  productoptionImage: any = [];
  public page: number;
  private offset = 0;
  public pageSize = '10';
  private keyword = '';
  public index: number;
  private currentPage: number;
  private sortOrder: number;
  // editproductoption
  private edit: any;
  // condition for filter component
  public buttonCheck = true;
  imageUrl: string;
  constructor(
    private productOptionService: ProductOptionService,
    public productOptionSandbox: ProductOptionSandbox,
    public layoutSandbox: LayoutsSandbox,
    private route: Router
  ) {
    // initially calling sandbox productoptionlist with empty data
  }

  // initially calling productoption pagination
  ngOnInit() {
    this.imageUrl = environment.imageUrl;

    this.pageSize = localStorage.getItem('itemsPerPage')
      ? localStorage.getItem('itemsPerPage')
      : this.pageSize;
    this.productOptionList(0, this.keyword);
    this.index = 0;
    this.productoptionPagination();
  }

  /**
   * Handles  'productoptionlist' event. Calls sandbox productoptionlist function .
   *
   * @param pageSize form pagination
   *  @param offset form offset
   */
  productOptionList(offset: number = 0, keyword) {
    const param: any = {};
    param.limit = this.pageSize;
    param.offset = this.offset;
    param.keyword = this.keyword;
    param.sortOrder = this.sortOrder;
    this.productOptionSandbox.ProductOptionlist(param);
    this.layoutSandbox.getCatagoryListCount({ count: true });
  }

  /**
   * Handles  'productoptioncountdata' event. Calls productOptionSandbox productoptioncountdata function .
   *
   * @param pageSize form pagination
   *  @param offset form offset
   */
  productoptionPagination() {
    const param: any = {};
    param.limit = this.pageSize;
    param.offset = 0;
    param.keyword = '';
    param.count = 1;
    this.productOptionSandbox.ProductOptioncountdata(param);
  }

  /**
   * Handles  'editproductoption' event. Calls productOptionService setEditproductoption function .
   *  @param data  form value
   */

  editproductoption(data) {
    this.edit = data;
    this.productOptionService.setEditproductoption(this.edit);
    this.route.navigate(['/catalog/productoption/add']);
  }

  /**
   * Handles  'addCategories' event. Calls productOptionService setEditproductoption function .
   *  @param edit  with empty value
   */
  addCategories() {
    this.edit = ' ';

    this.productOptionService.setEditproductoption(this.edit);
    this.route.navigate(['/catalog/productoption/add']);
  }

  /**
   * Handles  'onPageChange' event. Calls productoptionlist function .
   *  @param event  from material paginator value
   */

  onPageChange(event: any) {
    this.currentPage = event.offset;
    this.pageSize = event.pageSize;
    this.index = event.pageIndex;
    this.offset = event.pageSize * event.pageIndex;
    this.productOptionList(this.offset, this.pageSize);
  }

  /**
   * Handles  'deleteproductoption' event. Calls productOptionSandbox productoptiondelete function,
   * (Calls  productoptionlist function if (_delete)).
   *  @param id  from material paginator value.
   */

  deleteproductoption(id) {
    const params: any = {};
    params.productoptionId = id;
    this.productOptionSandbox.ProductOptiondelete(params);
    this.productOptionSandbox.getProductOptionDelete$.subscribe((_delete) => {
      if (_delete) {
        if (_delete.user.status === 1) {
          this.productOptionList(this.offset, this.pageSize);
          this.productoptionPagination();
        }
      }
    });
  }
}
