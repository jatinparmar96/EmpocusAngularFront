import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationTableRowsComponent } from './quotation-table-rows.component';

describe('QuotationTableRowsComponent', () => {
  let component: QuotationTableRowsComponent;
  let fixture: ComponentFixture<QuotationTableRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationTableRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationTableRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
