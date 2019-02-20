import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealShowComponent } from './deal-show.component';

describe('DealShowComponent', () => {
  let component: DealShowComponent;
  let fixture: ComponentFixture<DealShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
