import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitofmeasurementCreateComponent } from './unitofmeasurement-create.component';

describe('UnitofmeasurementCreateComponent', () => {
  let component: UnitofmeasurementCreateComponent;
  let fixture: ComponentFixture<UnitofmeasurementCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitofmeasurementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitofmeasurementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
