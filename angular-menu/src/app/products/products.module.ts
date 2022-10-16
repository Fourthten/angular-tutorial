import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductLevelThreeOneComponent } from './product-level-three-one/product-level-three-one.component';
import { ProductLevelThreeTwoComponent } from './product-level-three-two/product-level-three-two.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductLevelThreeOneComponent,
    ProductLevelThreeTwoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
