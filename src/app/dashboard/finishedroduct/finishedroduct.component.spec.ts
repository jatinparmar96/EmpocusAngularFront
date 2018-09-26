import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedroductComponent } from './finishedroduct.component';

describe('FinishedroductComponent', () => {
  let component: FinishedroductComponent;
  let fixture: ComponentFixture<FinishedroductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedroductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedroductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
