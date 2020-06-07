import { ProductOptionAddComponent } from './add/add.component';
/*
 * SpurtCommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component

import { ProductOptionListComponent } from './list/list.component';

const productOptionRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ProductOptionListComponent },
  { path: 'add', component: ProductOptionAddComponent },
  {
    path: 'edit/:id',
    component: ProductOptionAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(productOptionRoutes)],
  exports: [RouterModule],
})
export class ProductOptionRoutingModule {}
