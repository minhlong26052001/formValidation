import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPD } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  url: string ="./assets/data/drinks.json"
  pd_api_url="https://fakestoreapi.com/products"

  constructor(private _http: HttpClient) { }


getPDList(): Observable<IPD[] > {
    return this._http.get<IPD[]>(this.pd_api_url);  
}
}

