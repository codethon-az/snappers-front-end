import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class CribsService {

  cribData: any;


  constructor(private http: Http) { }


  getAllCribs() {
    
    return this.http.get('../src/res.json')
    .map(res => res.json());
  }


 
}
