import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/models/posts';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"; 



@Component({
    selector: 'app-porf-items',
    templateUrl: './porf-items.component.html',
    styleUrls: ['./porf-items.component.css']
})


export class PorfItemsComponent implements OnInit {
    @Input() porf: IPost;
    v: SafeResourceUrl;

    constructor(private dom: DomSanitizer) { 
        
    }

    ngOnInit(): void {
        this.v = this.dom.bypassSecurityTrustResourceUrl(this.porf.videourl);
        
    }
}
