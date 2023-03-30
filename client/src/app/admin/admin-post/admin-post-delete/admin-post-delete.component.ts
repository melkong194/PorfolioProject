import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminPostService } from '../admin-post.service';

@Component({
  selector: 'app-admin-post-delete',
  templateUrl: './admin-post-delete.component.html',
  styleUrls: ['./admin-post-delete.component.css']
})
export class AdminPostDeleteComponent implements OnInit {

    id?: string;

    constructor(
        private route: ActivatedRoute,
        private postService: AdminPostService,
        private router: Router,
    ) {
        this.id = this.route.snapshot.paramMap.get('id');
        this.postService.deletePost(this.id);
        this.router.navigate(["/admin/note"]);
    }

    ngOnInit(): void {
    }

}
