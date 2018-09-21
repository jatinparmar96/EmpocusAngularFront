import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesmasterComponent } from './chargesmaster.component';

describe('ChargesmasterComponent', () => {
  let component: ChargesmasterComponent;
  let fixture: ComponentFixture<ChargesmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargesmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
