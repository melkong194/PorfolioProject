import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/shared/models/posts';
import { AdminPorfService } from '../admin-porf.service';

@Component({
    selector: 'app-admin-porf-edit',
    templateUrl: './admin-porf-edit.component.html',
    styleUrls: ['./admin-porf-edit.component.css']
})
export class AdminPorfEditComponent implements OnInit {

    id?: number;
    porf: IPost;
    constructor(
        private route: ActivatedRoute, 
        private porfService: AdminPorfService,
        private router: Router,
        ) { }

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.loadPorf();
    }

    loadPorf() {
        this.porfService.getPorf(this.id).subscribe(p => {
            this.porf = p;
        }, error => {
            console.log(error);
        })
    }

    async updatePorf() {
        var name = <HTMLInputElement>document.getElementById("name");
        var imageurl = <HTMLInputElement>document.getElementById("imageurl");
        var videourl = <HTMLInputElement>document.getElementById("videourl");
        var type = <HTMLInputElement>document.getElementById("type");
        var article = <HTMLInputElement>document.getElementById("article");
        if (name.value !== null && type.value !== null && article.value !== null) {
            let data = [type.value, name.value, article.value, imageurl.value, videourl.value, this.id];
            await this.porfService.editPorf(data);
            this.cancel();
        }
    }
    cancel() {
        this.router.navigate(["/admin/porf"]);
    }


}
