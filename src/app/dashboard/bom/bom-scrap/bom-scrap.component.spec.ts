import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BomScrapComponent } from './bom-scrap.component';

describe('BomScrapComponent', () => {
  let component: BomScrapComponent;
  let fixture: ComponentFixture<BomScrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BomScrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BomScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
