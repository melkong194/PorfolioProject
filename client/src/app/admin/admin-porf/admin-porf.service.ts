import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IPagination } from 'src/app/shared/models/pagination';
import { PorfParams } from 'src/app/shared/models/porfParams';
import { IPost } from 'src/app/shared/models/posts';
import { IType } from 'src/app/shared/models/type';
import { config } from '../../shared/config/config'; 


@Injectable({
    providedIn: 'root'
})
export class AdminPorfService {
    // baseUrl = 'https://localhost:5001/api/Porf';
    baseUrl = config.url + 'Porf';
    constructor(private http: HttpClient) { }

    getPorfs(porfParams: PorfParams) {
        let params = new HttpParams();

        if (porfParams.typeId !== 0) {
            params = params.append("typeId", porfParams.typeId.toString());
        }

        if (porfParams.search) {
            params = params.append("search", porfParams.search);
        }

        params = params.append("sort", porfParams.sort);
        params = params.append('pageIndex', porfParams.pageNumber.toString());
        params = params.append('pageIndex', porfParams.pageSize.toString());

        return this.http.get<IPagination>(this.baseUrl, { observe: 'response', params })
            .pipe(
                map(response => {
                    return response.body;
                })
            );
    }

    getPorf(id: number) {
        return this.http.get<IPost>(this.baseUrl + "/" + id);
    }

    getTypes() {
        return this.http.get<IType[]>(this.baseUrl + '/types');
    }

    async addPorf(data: any) {
        var url = this.baseUrl + "/Add";
        let params = new HttpParams();
        params = params.set("porfTypeId", data[0]);
        params = params.set("name", data[1]);
        params = params.set("article", data[2]);
        params = params.set("imageurl", data[3]);
        params = params.set("videourl", data[4]);

        await this.http.post(url, '', { params }).subscribe(
            result => {

            },
            error => {
                console.log('There was an error: ')
            }
        );

    }

    async editPorf(data: any) {
        var url = this.baseUrl + "/Update";

        let params = new HttpParams();
        params = params.set("porfTypeId", data[0]);
        params = params.set("name", data[1]);
        params = params.set("article", data[2]);
        params = params.set("imageurl", data[3]);
        params = params.set("videourl", data[4]);
        params = params.set("porfId", data[5]);
        await this.http.put(url, '', { params }).subscribe(
            result => {

            },
            error => {
                console.log('There was an error: ')
            }
        );
    }

    async deletePorf(id: any) {
        var url = this.baseUrl + "/Delete";
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
