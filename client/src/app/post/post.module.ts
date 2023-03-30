import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostItemsComponent } from './post-items/post-items.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PostComponent, PostItemsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PostComponent]
})
export class PostModule { }
