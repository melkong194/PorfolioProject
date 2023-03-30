import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    pt?: any;
    pf?: any;
    constructor(
        private service: HomeService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.getPostType();
        this.getPorfType();
    }

    async getPostType() {
        await this.service.getPostTypes().subscribe(response => {
            this.pt = response;
        }, error => {
            console.log(error);
        })
    }

    async getPorfType() {
        await this.service.getPorfTypes().subscribe(response => {
            this.pf = response;
        }, error => {
            console.log(error);
        })
    }

    async createPf(){
        var name = <HTMLInputElement>document.getElementById("pf_inputName");
        if (name.value !== null) {
            await this.service.addPorfType(name.value);
            this.navigate();
        }
    }

    async editPf(){
        var id = <HTMLInputElement>document.getElementById("pf_inputId");
        var name = <HTMLInputElement>document.getElementById("pf_inputName");
        if (name.value !== null) {
            let data = [ id.value,name.value ];
            await this.service.editPorfType(data);
            this.navigate();
        }
    }


    async createPt(){
        var name = <HTMLInputElement>document.getElementById("pt_inputName");
        if (name.value !== null) {
            await this.service.addPostType(name.value);
            this.navigate();
        }
    }

    async editPt(){
        var id = <HTMLInputElement>document.getElementById("pt_inputId");
        var name = <HTMLInputElement>document.getElementById("pt_inputName");
        if (name.value !== null) {
            let data = [ id.value,name.value ];
            await this.service.editPostType(data);
            this.navigate();
        }
    }

    async delPf(id: any){
        await this.service.deletePorfType(id);
        this.navigate();
    }
    async delPt (id: any){
        await this.service.deletePostType(id);
        this.navigate();
    }

    navigate(){
        window.location.reload();
    }

}
