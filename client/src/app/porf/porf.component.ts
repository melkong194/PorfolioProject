import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPost } from '../shared/models/posts';
import { IType } from '../shared/models/type';
import { PorfService } from './porf.service';
import { PorfParams } from '../shared/models/porfParams';

@Component({
    selector: 'app-porf',
    templateUrl: './porf.component.html',
    styleUrls: ['./porf.component.css']
})
export class PorfComponent implements OnInit {
    @ViewChild('search', {static: true}) searchTerm: ElementRef;
    porfs: IPost[];
    types: IType[];
    porfParams = new PorfParams(); 
    totalCount?: number;
    sortOptions = [
        {name: 'Alphabetical', value: 'nameAsc'},
        {name: 'Newest to oldest', value: 'idDesc'},
        {name: 'Oldest to newest', value: 'idAsc'},
        {name: 'Name: (A => Z)', value: 'nameAsc'},
        {name: 'Name: (Z => A)', value: 'nameDesc'},
    ]
    status: boolean = false;

    constructor(private porfService: PorfService) { }

    ngOnInit() {
        this.getPorfs();
        this.getTypes();
    }

    getPorfs() {
        this.porfService.getPorfs(this.porfParams).subscribe(response => {
            this.porfs = response.data;
            this.porfParams.pageNumber = response.pageIndex;
            this.porfParams.pageSize = response.pageSize;
            this.totalCount = response.count;
            // console.log(this.porfs);
        }, error => {
            // console.log(error);
        })
    }
    
    getTypes(){
        this.porfService.getTypes().subscribe(response => {
            this.types = [{id: 0, name: 'All'}, ...response];
            // console.log(this.types);
        }, error => {
            // console.log(error);
        })
    }

    onTypeSelected(typeId: number){
        this.porfParams.typeId = typeId;
        this.porfParams.pageNumber = 1;
        this.getPorfs();
    }

    onSortSelected(sort: string){
        this.porfParams.sort = sort;
        this.getPorfs();
    }

    onPageChanged(event: any){
        if(this.porfParams.pageNumber !== event ){
            this.porfParams.pageNumber = event;
            this.getPorfs();
        }
    }

    onSearch(){
        this.porfParams.search = this.searchTerm.nativeElement.value;
        this.porfParams.pageNumber = 1;
        this.getPorfs();
    }

    onReset(){
        this.searchTerm.nativeElement.value = "";
        this.porfParams = new PorfParams();
        this.getPorfs();
    }

    toggleMenu(){
        this.status = !this.status;  
    }

}
