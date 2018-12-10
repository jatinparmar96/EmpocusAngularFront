import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCreateComponent } from './billing-create.component';

describe('BillingCreateComponent', () => {
  let component: BillingCreateComponent;
  let fixture: ComponentFixture<BillingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
