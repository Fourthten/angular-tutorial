import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupensRoutingModule } from './coupens-routing.module';
import { CoupenListComponent } from './coupen-list/coupen-list.component';
import { CoupensComponent } from './coupens.component';


@NgModule({
  declarations: [
    CoupensComponent,
    CoupenListComponent,
  ],
  imports: [
    CommonModule,
    CoupensRoutingModule
  ]
})
export class CoupensModule { }
