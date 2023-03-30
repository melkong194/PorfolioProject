import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPagination } from '../shared/models/pagination';
import { PostParams } from '../shared/models/postParams';
import { IType } from '../shared/models/type';
import { config } from '../shared/config/config';

@Injectable({
    providedIn: 'root'
})

export class PostService {
    // baseUrl = 'https://localhost:5001/api/Post';
    baseUrl =  config.url + 'Post';

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

    getTypes() {
        return this.http.get<IType[]>(this.baseUrl + '/types');
    }

}
