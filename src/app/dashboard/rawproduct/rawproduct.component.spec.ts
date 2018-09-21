import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawproductComponent } from './rawproduct.component';

describe('RawproductComponent', () => {
  let component: RawproductComponent;
  let fixture: ComponentFixture<RawproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
