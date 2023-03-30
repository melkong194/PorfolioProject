import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminPorfService } from '../admin-porf.service';

@Component({
  selector: 'app-admin-porf-delete',
  templateUrl: './admin-porf-delete.component.html',
  styleUrls: ['./admin-porf-delete.component.css']
})
export class AdminPorfDeleteComponent implements OnInit {

    id?: string;

    constructor(
        private route: ActivatedRoute,
        private porfService: AdminPorfService,
        private router: Router,
    ) {
        this.id = this.route.snapshot.paramMap.get('id');
        this.porfService.deletePorf(this.id);
        this.router.navigate(["/admin/porf"]);
    }

    ngOnInit(): void {
    }

}
