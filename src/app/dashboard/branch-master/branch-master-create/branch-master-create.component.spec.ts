import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchMasterCreateComponent } from './branch-master-create.component';

describe('BranchMasterCreateComponent', () => {
  let component: BranchMasterCreateComponent;
  let fixture: ComponentFixture<BranchMasterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchMasterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchMasterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
