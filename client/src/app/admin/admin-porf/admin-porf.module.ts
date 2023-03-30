import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPorfItemsComponent } from './admin-porf-items/admin-porf-items.component';
import { AdminPorfComponent } from './admin-porf.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminPorfAddComponent } from './admin-porf-add/admin-porf-add.component';
import { AdminPorfEditComponent } from './admin-porf-edit/admin-porf-edit.component';
import { AdminPorfDeleteComponent } from './admin-porf-delete/admin-porf-delete.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminPorfComponent, AdminPorfItemsComponent, AdminPorfAddComponent, AdminPorfEditComponent, AdminPorfDeleteComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ], 
  exports: [
    AdminPorfComponent
  ]
})
export class AdminPorfModule { }
