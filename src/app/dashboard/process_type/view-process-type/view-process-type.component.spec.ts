import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessTypeComponent } from './view-process-type.component';

describe('ViewProcessTypeComponent', () => {
  let component: ViewProcessTypeComponent;
  let fixture: ComponentFixture<ViewProcessTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProcessTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcessTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
