import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class CribsService {

  cribData: any;


  constructor(private http: HttpClient) { }


  getAllCribs() {
    
    return this.http.get('src/res.json')
   
  }


 
}
