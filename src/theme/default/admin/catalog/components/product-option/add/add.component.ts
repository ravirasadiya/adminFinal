/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {
  Validators,
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';
// Store

import { ConfigService } from '../../../../../../../core/admin/service/config.service';
import { ProductOptionSandbox } from './../../../../../../../core/admin/catalog/product-option/product-option.sandbox';
import { ProductOptionService } from './../../../../../../../core/admin/catalog/product-option/product-option.service';

@Component({
  selector: 'app-spurt-catalog-productoption-add',
  templateUrl: 'add.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add.component.scss'],
})
export class ProductOptionAddComponent implements OnInit {
  // VARIABLES

  // reactive form
  public user: FormGroup;
  public productoptionName: FormControl;
  public productoptionTitle: FormControl;
  public productoptionDescription: FormControl;
  public productoptionKeyword: FormControl;
  public productoptionSortOrder: FormControl;
  public status: FormControl;
  private valids: boolean;
  // popup
  private closeResult: string;
  // AddProductOption
  private param: any = {};
  // editing ProductOption list datas
  private productoptionEditdata: any;
  // validation condition
  submittedValues = false;
  @ViewChild('filePath') filePath: ElementRef;
  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private configService: ConfigService,
    public sandbox: ProductOptionSandbox,
    private productoptionservice: ProductOptionService
  ) {
    this.valids = false;
  }

  // STYLE PURPOSE

  beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  open2(content) {
    this.modalService
      .open(content, { windowClass: 'image-manager' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  open(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal,image-manager',
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Reactive form

  ngOnInit() {
    this.apiFordropDownlist();
    this.productoptionName = new FormControl('', [Validators.required]);
    this.productoptionTitle = new FormControl('');
    this.productoptionDescription = new FormControl('');
    this.productoptionKeyword = new FormControl('');
    this.productoptionSortOrder = new FormControl('', [Validators.required]);
    this.status = new FormControl('', [Validators.required]);

    this.user = this.fb.group({
      productoptionName: this.productoptionName,
      productoptionTitle: this.productoptionTitle,
      productoptionDescription: this.productoptionDescription,
      productoptionKeyword: this.productoptionKeyword,
      productoptionSortOrder: this.productoptionSortOrder,
      status: this.status,
    });

    this.productoptionEditdata = this.productoptionservice.getEditproductoption();
    if (this.productoptionEditdata && this.productoptionEditdata !== ' ') {
      this.editproductoptionList();
    }
  }

  // calling sandbox productoptionlist for dropdown list with empty param values
  apiFordropDownlist() {
    const param: any = {};
    param.limit = '';
    param.offset = '';
    param.keyword = '';
    param.sortOrder = '';
    this.sandbox.ProductOptionlist(param);
  }

  /**
   * Handles  'onSubmits' event. Calls sandbox  updateProductOption if ((this.productoptionEditdata!=undefined)&&(this.productoptionEditdata!=' ')),
   * else calls sandbox addProductOption function,if the form is valid.
   *
   * @param user entire form value
   * @param param storing entire form value
   *
   */

  onSubmits(user) {
    this.submittedValues = true;
    if (!this.user.valid) {
      this.validateAllFormFields(this.user);
      return;
    }
    this.param.name = user.value.productoptionName;
    this.param.parentInt = 0;
    this.param.sortOrder = user.value.productoptionSortOrder;
    this.param.metaTagTitle = user.value.productoptionTitle;
    this.param.metaTagDescription = user.value.productoptionDescription;
    this.param.metaTagKeyword = user.value.productoptionKeyword;
    this.param.status = user.value.status;
    if (
      this.productoptionEditdata !== undefined &&
      this.productoptionEditdata !== ' '
    ) {
      this.param.productoptionId = this.productoptionEditdata.productoptionId;
      this.sandbox.updateproductoption(this.param);
    } else {
      this.sandbox.addproductoption(this.param);
    }
  }

  // editing ProductOption list in the reactive form
  editproductoptionList() {
    this.user.controls['productoptionName'].setValue(
      this.productoptionEditdata.name
    );
    this.user.controls['productoptionTitle'].setValue(
      this.productoptionEditdata.metaTagTitle
    );
    this.user.controls['productoptionDescription'].setValue(
      this.productoptionEditdata.metaTagDescription
    );
    this.user.controls['productoptionKeyword'].setValue(
      this.productoptionEditdata.metaTagKeyword
    );
    this.user.controls['productoptionSortOrder'].setValue(
      this.productoptionEditdata.sortOrder
    );
    this.status.setValue(this.productoptionEditdata.isActive);
  }

  // validation for formGroup
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  // validation for reactive form
  get f() {
    return this.user.controls;
  }
}
