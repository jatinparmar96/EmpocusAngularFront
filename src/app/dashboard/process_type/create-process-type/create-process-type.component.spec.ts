import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProcessTypeComponent } from './create-process-type.component';

describe('CreateProcessTypeComponent', () => {
  let component: CreateProcessTypeComponent;
  let fixture: ComponentFixture<CreateProcessTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProcessTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProcessTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
