import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { expandCollapse } from 'src/app/shared/animate/zippy.component.animations';
import { IPost } from 'src/app/shared/models/posts';

@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrls: ['./post-items.component.css'],
  animations: [ expandCollapse ],
})
export class PostItemsComponent implements OnInit {
    @Input() post: IPost;
    v: SafeResourceUrl;
    
    @Input('title') title: string;
    isExpanded: boolean;
  
    toggle() { 
      this.isExpanded = !this.isExpanded;
    }

  constructor(private dom: DomSanitizer) { }

  ngOnInit(): void {
    this.v = this.dom.bypassSecurityTrustResourceUrl(this.post.videourl);
        
  }

}
