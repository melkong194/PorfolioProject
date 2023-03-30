import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminPostService } from '../admin-post.service';

@Component({
  selector: 'app-admin-post-add',
  templateUrl: './admin-post-add.component.html',
  styleUrls: ['./admin-post-add.component.css']
})
export class AdminPostAddComponent implements OnInit {
    typeId?: string;

    constructor(
        private route: ActivatedRoute,
        private postService: AdminPostService,
        private router: Router,
    ) {
        this.typeId = this.route.snapshot.paramMap.get('idType');
    }

    ngOnInit(): void {
    }

    async addPost() {
        var name = <HTMLInputElement>document.getElementById("name");
        var imageurl = <HTMLInputElement>document.getElementById("imageurl");
        var videourl = <HTMLInputElement>document.getElementById("videourl");
        var type = <HTMLInputElement>document.getElementById("type");
        var article = <HTMLInputElement>document.getElementById("article");
        console.log(name.value);
        if (name.value !== null && type.value !== null && article.value !== null) {
            let data = [type.value, name.value, article.value, imageurl.value, videourl.value];
            await this.postService.addPost(data);
            this.cancel();
        }
    }
    cancel() {
        this.router.navigate(["/admin/note"]);
    }
}
