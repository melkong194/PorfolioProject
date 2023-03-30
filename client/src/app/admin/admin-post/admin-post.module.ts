import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPostItemsComponent } from './admin-post-items/admin-post-items.component';
import { AdminPostComponent } from './admin-post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminPostAddComponent } from './admin-post-add/admin-post-add.component';
import { AdminPostDeleteComponent } from './admin-post-delete/admin-post-delete.component';
import { AdminPostEditComponent } from './admin-post-edit/admin-post-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AdminPostItemsComponent, AdminPostComponent, AdminPostAddComponent, AdminPostDeleteComponent, AdminPostEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ], exports: [AdminPostComponent]
})
export class AdminPostModule { }
