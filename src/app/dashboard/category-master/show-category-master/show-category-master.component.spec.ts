import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategoryMasterComponent } from './show-category-master.component';

describe('ShowCategoryMasterComponent', () => {
  let component: ShowCategoryMasterComponent;
  let fixture: ComponentFixture<ShowCategoryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCategoryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCategoryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
