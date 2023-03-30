import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { expandCollapse } from 'src/app/shared/animate/zippy.component.animations';
import { PostParams } from 'src/app/shared/models/postParams';
import { IPost } from 'src/app/shared/models/posts';
import { IType } from 'src/app/shared/models/type';
import { AdminPostService } from './admin-post.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css'],
  animations: [ expandCollapse ]
})
export class AdminPostComponent implements OnInit {
    //============ input for zippy
    @Input('title') title: string;
    isExpanded: boolean;
  
    toggle() { 
      this.isExpanded = !this.isExpanded;
    }
    ///// ======================================
    @ViewChild('search', {static: true}) searchTerm: ElementRef;
    posts: IPost[];
    types: IType[];
    postParams = new PostParams(); 
    totalCount?: number;
    sortOptions = [
        {name: 'Alphabetical', value: 'nameAsc'},
        {name: 'Newest to oldest', value: 'idDesc'},
        {name: 'Oldest to newest', value: 'idAsc'},
        {name: 'Name: (A => Z)', value: 'nameAsc'},
        {name: 'Name: (Z => A)', value: 'nameDesc'},
    ]
    
    constructor(private postService: AdminPostService) { }

    ngOnInit() {
        this.getPosts();
        this.getTypes();
    }

    getPosts() {
        this.postService.getPosts(this.postParams).subscribe(response => {
            this.posts = response.data;
            this.postParams.pageNumber = response.pageIndex;
            this.postParams.pageSize = response.pageSize;
            this.totalCount = response.count;
            // console.log(this.posts);
        }, error => {
            // console.log(error);
        })
    }
    
    getTypes(){
        this.postService.getTypes().subscribe(response => {
            this.types = [{id: 0, name: 'All'}, ...response];
            // console.log(this.types);
        }, error => {
            // console.log(error);
        })
    }

    onTypeSelected(typeId: number){
        this.postParams.typeId = typeId;
        this.postParams.pageNumber = 1;
        this.getPosts();
    }

    onSortSelected(sort: string){
        this.postParams.sort = sort;
        this.getPosts();
    }

    onPageChanged(event: any){
        if(this.postParams.pageNumber !== event ){
            this.postParams.pageNumber = event;
            this.getPosts();
        }
    }

    onSearch(){
        this.postParams.search = this.searchTerm.nativeElement.value;
        this.postParams.pageNumber = 1;
        this.getPosts();
    }

    onReset(){
        this.searchTerm.nativeElement.value = "";
        this.postParams = new PostParams();
        this.getPosts();
    }

}
