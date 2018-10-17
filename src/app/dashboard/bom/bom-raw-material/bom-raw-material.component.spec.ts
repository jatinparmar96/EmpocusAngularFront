import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomRawMaterialComponent } from './bom-raw-material.component';

describe('BomRawMaterialComponent', () => {
  let component: BomRawMaterialComponent;
  let fixture: ComponentFixture<BomRawMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomRawMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
