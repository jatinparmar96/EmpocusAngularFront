import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountsViewComponent } from './chart-of-accounts-view.component';

describe('ChartOfAccountsViewComponent', () => {
  let component: ChartOfAccountsViewComponent;
  let fixture: ComponentFixture<ChartOfAccountsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartOfAccountsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAccountsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
