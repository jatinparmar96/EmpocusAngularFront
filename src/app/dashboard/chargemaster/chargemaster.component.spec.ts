import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargemasterComponent } from './chargemaster.component';

describe('ChargemasterComponent', () => {
  let component: ChargemasterComponent;
  let fixture: ComponentFixture<ChargemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
