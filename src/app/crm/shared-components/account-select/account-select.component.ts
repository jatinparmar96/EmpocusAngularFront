import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable, concat, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, map } from 'rxjs/operators';
import { AccountService } from 'app/crm/crm_services/account-service/account.service';

@Component({
  selector: 'app-account-select',
  templateUrl: './account-select.component.html',
  styleUrls: ['./account-select.component.scss']
})
export class AccountSelectComponent implements OnInit {

  @Input() parentForm:string;
  @Input() controlName:string;
  @Output() value = new EventEmitter()

  account:Observable<any>
  accountLoading:boolean = false;
  accountInput = new Subject<string>();

  constructor(
    private accountService:AccountService
  ) { }

  private loadAccounts() {
    this.account = concat(
        of([]), // default items
        this.accountInput.pipe(
           debounceTime(200),
           distinctUntilChanged(),
           tap(() => this.accountLoading= true),
           switchMap(term => this.accountService.search(term).pipe(
               catchError(() => of([])), // empty list on error
               map((val:any)=> val = val.data),
               tap(() => {
                 this.accountLoading = false;
               })
           ))
        )
    );
  }
  ngOnInit() {
    this.loadAccounts();
  }

}
