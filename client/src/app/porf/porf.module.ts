import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfComponent } from './porf.component';
import { PorfItemsComponent } from './porf-items/porf-items.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PorfComponent, PorfItemsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PorfComponent]
})
export class PorfModule { }
