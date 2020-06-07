import { ProductOptionFilterComponent } from './filter/filter.component';
import { ProductOptionListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCommonModule } from '../../../../default.common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components

// Store Actions
import { EffectsModule } from '@ngrx/effects';
// Routing Module
import { ProductOptionRoutingModule } from './product-option.routing';
// Shared Module
import { MaterialModule } from '../../../../default.material.module';
import { NumberAcceptModule } from '../../../../../../core/admin/shared/validation-directives/onlyNumber.module';
import { HttpClient } from '@angular/common/http';
import { ProductOptionAddComponent } from './add/add.component';
import { ProductOptionSandbox } from './../../../../../../core/admin/catalog/product-option/product-option.sandbox';

@NgModule({
  declarations: [
    ProductOptionAddComponent,
    ProductOptionListComponent,
    ProductOptionFilterComponent,
  ],
  imports: [
    CommonModule,
    DefaultCommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductOptionRoutingModule,
    MaterialModule,
    EffectsModule.forRoot([]),
    NumberAcceptModule,
  ],
  providers: [ProductOptionSandbox],
  bootstrap: [],
  entryComponents: [],
})
export class ProductOptionModule {}
