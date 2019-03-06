import { Injectable } from '@angular/core';
import { ApiService } from 'app/shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  accounts:any
  url:string = 'admin/product'
  constructor(
    private apiService: ApiService,
  ) { }
  get()
  {
    return this.apiService.observableGet(this.url);
  }

  search(term):Observable<any>
  {
    return this.apiService.observableGet(this.url+"?search[product_name]="+term);
  }

}