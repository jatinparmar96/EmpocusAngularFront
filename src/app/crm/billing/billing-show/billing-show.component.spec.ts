import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingShowComponent } from './billing-show.component';

describe('BillingShowComponent', () => {
  let component: BillingShowComponent;
  let fixture: ComponentFixture<BillingShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
