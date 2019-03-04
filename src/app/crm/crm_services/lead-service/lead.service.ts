import { Injectable } from '@angular/core';
import { ApiService } from 'app/shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
   url_list:string = 'admin/crm/leads'
   url_full_list:string = 'admin/crm/leads_full_list'
   url_show:string = 'admin/crm/leads'
  constructor(
    private apiService:ApiService
  ) {

  }
  search(term) :Observable<any>
  {
    return this.apiService.observableGet(this.url_full_list+'?search[company_name]='+term);
  }
}
