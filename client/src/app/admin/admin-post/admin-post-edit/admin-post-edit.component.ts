import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/shared/models/posts';
import { AdminPostService } from '../admin-post.service';

@Component({
  selector: 'app-admin-post-edit',
  templateUrl: './admin-post-edit.component.html',
  styleUrls: ['./admin-post-edit.component.css']
})
export class AdminPostEditComponent implements OnInit {

    id?: number;
    post: IPost;
    constructor(
        private route: ActivatedRoute, 
        private postService: AdminPostService,
        private router: Router,
        ) { }

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.loadPost();
    }

    loadPost() {
        this.postService.getPost(this.id).subscribe(p => {
            this.post = p;
        }, error => {
            console.log(error);
        })
    }

    async updatePost() {
        var name = <HTMLInputElement>document.getElementById("name");
        var imageurl = <HTMLInputElement>document.getElementById("imageurl");
        var videourl = <HTMLInputElement>document.getElementById("videourl");
        var type = <HTMLInputElement>document.getElementById("type");
        var article = <HTMLInputElement>document.getElementById("article");
        if (name.value !== null && type.value !== null && article.value !== null) {
            let data = [type.value, name.value, article.value, imageurl.value, videourl.value, this.id];
            await this.postService.editPost(data);
            this.cancel();
        }
    }
    cancel() {
        this.router.navigate(["/admin/note"]);
    }


}
