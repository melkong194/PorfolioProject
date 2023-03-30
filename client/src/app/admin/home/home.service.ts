import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../shared/config/config'; 

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    // pf_url = 'https://localhost:5001/api/PorfType';
    // pt_url = 'https://localhost:5001/api/PostType';
    pf_url = config.url + 'PorfType';
    pt_url = config.url + 'PostType';
    constructor(private http: HttpClient) { }
    getPostTypes() {
        return this.http.get(this.pt_url);
    }
    getPorfTypes() {
        return this.http.get(this.pf_url);
    }

    async addPostType(name: any) {
        var url = this.pt_url + "/Add";
        let params = new HttpParams();
        params = params.set("name", name);

        await this.http.post(url, '', { params }).subscribe(
            result => {

            },
            error => {
                console.log('There was an error: ')
            }
        );

    }

    async editPostType(data: any) {
        var url = this.pt_url + "/Update";

        let params = new HttpParams();
        params = params.set("id", data[0]);
        params = params.set("name", data[1]);

        await this.http.put(url, '', { params }).subscribe(
            result => {

            },
            error => {
                console.log('There was an error: ')
            }
        );
    }

    async deletePostType(id: any) {
        var url = this.pt_url + "/Delete";
        let params = new HttpParams();
        params = params.set("id", id);
        await this.http.delete(url, { params }).subscribe(
            result => {
            },
            error => {
                console.log('There was an error: ')
            }
        );
    }

    async addPorfType(name: any) {
        var url = this.pf_url + "/Add";
        let params = new HttpParams();
        params = params.set("name", name);

        await this.http.post(url, '', { params }).subscribe(
            result => {

            },
            error => {
                console.log('There was an error: ')
            }
        );

    }

    async editPorfType(data: any) {
        var url = this.pf_url + "/Update";

        let params = new HttpParams();
        params = params.set("id", data[0]);
        params = params.set("name", data[1]);

        await this.http.put(url, '', { params }).subscribe(
            result => {

            },
            error => {
                console.log('There was an error: ')
            }
        );
    }

    async deletePorfType(id: any) {
        var url = this.pf_url + "/Delete";
        let params = new HttpParams();
        params = params.set("id", id);
        await this.http.delete(url, { params }).subscribe(
            result => {
            },
            error => {
                console.log('There was an error: ')
            }
        );
    }
    
}
