import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPost } from '../shared/models/posts';
import { IType } from '../shared/models/type';
import { PostService } from './post.service';
import { PostParams } from '../shared/models/postParams';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
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
    status: boolean = false;
    
    constructor(private postService: PostService) { }

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

    toggleMenu(){
        this.status = !this.status;  
    }

}
