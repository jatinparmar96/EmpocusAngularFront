import { Component, OnInit, Input, Output } from '@angular/core';
import { concat, of, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, map } from 'rxjs/operators';
import { EventEmitter } from 'events';
import { LeadService } from 'app/crm/crm_services/lead-service/lead.service';

@Component({
  selector: 'app-lead-select',
  templateUrl: './lead-select.component.html',
  styleUrls: ['./lead-select.component.scss']
})
export class LeadSelectComponent implements OnInit {
  @Input() parentForm:string;
  @Input() controlName:string;
  @Output() value = new EventEmitter()

  lead:Observable<any>
  leadLoading:boolean = false;
  leadInput = new Subject<string>();

  constructor(
    private leadService:LeadService
  ) { }

  ngOnInit() {
    this.loadItems();
  }
  private loadItems() {
    this.lead = concat(
        of([]), // default items
        this.leadInput.pipe(
           debounceTime(200),
           distinctUntilChanged(),
           tap(() => this.leadLoading= true),
           switchMap(term => this.leadService.search(term).pipe(
               catchError(() => of([])), // empty list on error
               map((val:any)=> val = val.data),
               tap(() => {
                 this.leadLoading = false;
               })
           ))
        )
    );
  }
}
