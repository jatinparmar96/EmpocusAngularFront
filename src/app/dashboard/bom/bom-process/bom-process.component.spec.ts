import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomProcessComponent } from './bom-process.component';

describe('BomProcessComponent', () => {
  let component: BomProcessComponent;
  let fixture: ComponentFixture<BomProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
