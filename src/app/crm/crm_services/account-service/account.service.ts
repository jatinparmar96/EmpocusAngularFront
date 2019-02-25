import { Injectable } from '@angular/core';
import { ApiService } from 'app/shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts:any
  url:string = 'admin/coa_full_list'
  constructor(
    private apiService: ApiService,
  ) { }
  get()
  {
    return this.apiService.observableGet(this.url);
  }

  search(term):Observable<any>
  {
    return this.apiService.observableGet(this.url+"?search[ca_company_display_name]="+term);
  }

}
