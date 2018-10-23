import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomBasicDetailsComponent } from './bom-basic-details.component';

describe('BomBasicDetailsComponent', () => {
  let component: BomBasicDetailsComponent;
  let fixture: ComponentFixture<BomBasicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomBasicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
