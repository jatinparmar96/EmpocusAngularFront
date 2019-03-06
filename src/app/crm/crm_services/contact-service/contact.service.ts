import { Injectable } from '@angular/core';
import { ApiService } from 'app/shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url_list:string = 'admin/crm/contact'
  url_full_list:string = 'admin/crm/contact/full_list'
  url_show:string = 'admin/crm/contact'
 constructor(
   private apiService:ApiService
 ) {

 }
 search(term) :Observable<any>
 {
   return this.apiService.observableGet(this.url_full_list+'?search[first_name]='+term);
 }
}
