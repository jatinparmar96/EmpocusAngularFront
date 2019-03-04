import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSelectComponent } from './lead-select.component';

describe('LeadSelectComponent', () => {
  let component: LeadSelectComponent;
  let fixture: ComponentFixture<LeadSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
