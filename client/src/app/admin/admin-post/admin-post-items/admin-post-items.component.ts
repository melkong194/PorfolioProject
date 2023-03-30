import { Component, Input, OnInit } from '@angular/core';
import { expandCollapse } from 'src/app/shared/animate/zippy.component.animations';
import { IPost } from 'src/app/shared/models/posts';

@Component({
  selector: 'app-admin-post-items',
  templateUrl: './admin-post-items.component.html',
  styleUrls: ['./admin-post-items.component.css'],
//   animations: [ expandCollapse ]
})
export class AdminPostItemsComponent implements OnInit {

    @Input() post: IPost;
    
    // ##### input for zippy
    // @Input('title') title: string;
    // isExpanded: boolean;
  
    // toggle() { 
    //   this.isExpanded = !this.isExpanded;
    // }
    ///// ======================================
  constructor() { }

  ngOnInit(): void {
  }

}
