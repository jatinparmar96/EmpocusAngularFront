import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadShowComponent } from './lead-show.component';

describe('LeadShowComponent', () => {
  let component: LeadShowComponent;
  let fixture: ComponentFixture<LeadShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
