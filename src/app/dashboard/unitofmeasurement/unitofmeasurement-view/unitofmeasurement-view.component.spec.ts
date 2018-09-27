import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitofmeasurementViewComponent } from './unitofmeasurement-view.component';

describe('UnitofmeasurementViewComponent', () => {
  let component: UnitofmeasurementViewComponent;
  let fixture: ComponentFixture<UnitofmeasurementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitofmeasurementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitofmeasurementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
