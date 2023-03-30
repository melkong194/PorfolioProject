import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/models/posts';

@Component({
  selector: 'app-admin-porf-items',
  templateUrl: './admin-porf-items.component.html',
  styleUrls: ['./admin-porf-items.component.css']
})
export class AdminPorfItemsComponent implements OnInit {

    @Input() porf: IPost;
    
  constructor() { }

  ngOnInit(): void {

  }

}
