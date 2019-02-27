import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {data} from '../../data/smart-data-table';

@Injectable({
  providedIn: 'root'
})
//Service for getting list of products or searching in the list of products

export class ProductService {
  base_url :string = 'http://127.0.0.1:8000/api/admin/raw_product';
  constructor(
    private http: HttpClient
  ) { }
//Form the basic Query using the url
  query( url:string, params?: Array<string>): Observable<any>
  {
    let query_url = `${this.base_url}${url}`;
    if(params)
    {
      query_url = `${query_url}?${params.join('&')}`;
    }
    const  api_key = localStorage.getItem('x-auth-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${api_key}`
      })
    };
    return this.http.get(query_url,httpOptions).pipe();
  }
  get_products_list()
  {
    return this.query('');
  }

  search_products_list()
  {

  }
}
