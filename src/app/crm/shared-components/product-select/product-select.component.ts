import { Component, OnInit, Input, Output } from '@angular/core';
import { concat, of, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, map } from 'rxjs/operators';
import { EventEmitter } from 'events';
import { ProductService } from 'app/crm/crm_services/product-service/product.service';

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.scss']
})
export class ProductSelectComponent implements OnInit {
  @Input() parentForm:string;
  @Input() controlName:string;
  @Output() value = new EventEmitter()

  product:Observable<any>
  productLoading:boolean = false;
  productInput = new Subject<string>();

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.loadItems();
  }
  private loadItems() {
    this.product = concat(
        of([]), // default items
        this.productInput.pipe(
           debounceTime(200),
           distinctUntilChanged(),
           tap(() => this.productLoading= true),
           switchMap(term => this.productService.search(term).pipe(
               catchError(() => of([])), // empty list on error
               map((val:any)=> val = val.data),
               tap(() => {
                 this.productLoading = false;
               })
           ))
        )
    );
  }
}
