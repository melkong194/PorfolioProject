import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IPagination } from 'src/app/shared/models/pagination';
import { PostParams } from 'src/app/shared/models/postParams';
import { IPost } from 'src/app/shared/models/posts';
import { IType } from 'src/app/shared/models/type';
import { config } from '../../shared/config/config'; 

@Injectable({
  providedIn: 'root'
})
export class AdminPostService {

    // baseUrl = 'https://localhost:5001/api/Post';
    baseUrl = config.url + 'Post';

    constructor(private http: HttpClient) { }

    getPosts(postParams: PostParams) {
        let params = new HttpParams();

        if (postParams.typeId !== 0) {
            params = params.append("typeId", postParams.typeId.toString());
        }

        if (postParams.search) {
            params = params.append("search", postParams.search);
        }

        params = params.append("sort", postParams.sort);
        params = params.append('pageIndex', postParams.pageNumber.toString());
        params = params.append('pageSize', postParams.pageSize.toString());

        return this.http.get<IPagination>(this.baseUrl, {observe: 'response', params})
            .pipe(
                map(response => {
                    return response.body;
                })
            );
    }

    getPost(id: number) {
        return this.http.get<IPost>(this.baseUrl + "/" + id);
    }

    getTypes() {
        return this.http.get<IType[]>(this.baseUrl + '/types');
    }

    async addPost(data: any) {
        var url = this.baseUrl + "/Add";
        let params = new HttpParams();
        params = params.set("postTypeId", data[0]);
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

    async editPost(data: any) {
        var url = this.baseUrl + "/Update";

        let params = new HttpParams();
        params = params.set("postTypeId", data[0]);
        params = params.set("name", data[1]);
        params = params.set("article", data[2]);
        params = params.set("imageurl", data[3]);
        params = params.set("videourl", data[4]);
        params = params.set("postId", data[5]);
        await this.http.put(url, '', { params }).subscribe(
            result => {

            },
            error => {
                console.log('There was an error: ')
            }
        );
    }

    async deletePost(id: any) {
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
