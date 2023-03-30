import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminPorfService } from '../admin-porf.service';

@Component({
    selector: 'app-admin-porf-add',
    templateUrl: './admin-porf-add.component.html',
    styleUrls: ['./admin-porf-add.component.css']
})
export class AdminPorfAddComponent implements OnInit {
    typeId?: string;

    constructor(
        private route: ActivatedRoute,
        private porfService: AdminPorfService,
        private router: Router,
    ) {
        this.typeId = this.route.snapshot.paramMap.get('idType');
    }

    ngOnInit(): void {
    }

    async addPorf() {
        var name = <HTMLInputElement>document.getElementById("name");
        var imageurl = <HTMLInputElement>document.getElementById("imageurl");
        var videourl = <HTMLInputElement>document.getElementById("videourl");
        var type = <HTMLInputElement>document.getElementById("type");
        var article = <HTMLInputElement>document.getElementById("article");
        console.log(name.value);
        if (name.value !== null && type.value !== null && article.value !== null) {
            let data = [type.value, name.value, article.value, imageurl.value, videourl.value];
            await this.porfService.addPorf(data);
            this.cancel();
        }
    }
    cancel() {
        this.router.navigate(["/admin/porf"]);
    }
}
