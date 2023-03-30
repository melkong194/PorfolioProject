import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPagination } from '../shared/models/pagination';
import { PorfParams } from '../shared/models/porfParams';
import { IType } from '../shared/models/type';
import { config } from '../shared/config/config'; 

@Injectable({
    providedIn: 'root'
})

export class PorfService {
    baseUrl = config.url + 'Porf';
    // baseUrl = 'https://localhost:5001/api/Porf';
    constructor(private http: HttpClient) { }

    getPorfs(porfParams: PorfParams) {
        // console.log(this.baseUrl);
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
