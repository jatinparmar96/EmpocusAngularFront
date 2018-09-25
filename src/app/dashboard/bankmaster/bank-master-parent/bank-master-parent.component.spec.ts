import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankMasterParentComponent } from './bank-master-parent.component';

describe('BankMasterParentComponent', () => {
  let component: BankMasterParentComponent;
  let fixture: ComponentFixture<BankMasterParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankMasterParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankMasterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
