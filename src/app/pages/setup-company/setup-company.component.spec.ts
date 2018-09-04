import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCompanyComponent } from './setup-company.component';

describe('SetupCompanyComponent', () => {
  let component: SetupCompanyComponent;
  let fixture: ComponentFixture<SetupCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
