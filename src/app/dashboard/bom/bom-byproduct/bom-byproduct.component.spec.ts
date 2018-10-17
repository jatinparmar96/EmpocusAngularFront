import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomByproductComponent } from './bom-byproduct.component';

describe('BomByproductComponent', () => {
  let component: BomByproductComponent;
  let fixture: ComponentFixture<BomByproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomByproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomByproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
