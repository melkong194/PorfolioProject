import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { config } from './shared/config/config';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Nguyen\'s House';
    ad = false;

    constructor(private url:LocationStrategy) { }

    ngOnInit(): void {
        // console.log(this.url.path().startsWith("/admin"));
        if (this.url.path().startsWith("/admin")) {
            this.ad = true;
        }
        // console.log(config.url);
    }

}
