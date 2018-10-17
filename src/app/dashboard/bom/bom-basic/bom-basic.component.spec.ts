import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomBasicComponent } from './bom-basic.component';

describe('BomBasicComponent', () => {
  let component: BomBasicComponent;
  let fixture: ComponentFixture<BomBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
