import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, concat, of } from 'rxjs';
import { ContactService } from 'app/crm/crm_services/contact-service/contact.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-select',
  templateUrl: './contact-select.component.html',
  styleUrls: ['./contact-select.component.scss']
})
export class ContactSelectComponent implements OnInit {
  @Input() parentForm:string;
  @Input() controlName:string;
  @Output() value = new EventEmitter()

  contact:Observable<any>
  contactLoading:boolean = false;
  contactInput = new Subject<string>();

  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit() {
    this.loadItems();
  }
  private loadItems() {
    this.contact = concat(
        of([]), // default items
        this.contactInput.pipe(
           debounceTime(200),
           distinctUntilChanged(),
           tap(() => this.contactLoading= true),
           switchMap(term => this.contactService.search(term).pipe(
               catchError(() => of([])), // empty list on error
               map((val:any)=> val = val.data),
               tap(() => {
                 this.contactLoading = false;
               })
           ))
        )
    );
  }
}