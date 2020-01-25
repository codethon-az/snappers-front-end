import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { PropertySearchResponse } from '../models/Responses/PropertySearchResponse';
import { API_PROPERTYSEARCH } from '../constants';
@Injectable()
export class CribsService {
    cribData: any;

    constructor(private http: HttpClient) {}

    getAllCribs(imageUri: string) {
        const userName = 'princess';
        const params = new HttpParams().set('image', imageUri);
        //return this.http.get('../../src/res.json');
        return this.http.get<PropertySearchResponse>(
            API_PROPERTYSEARCH + `/${userName}`,
            { params }
        );
    }
}
