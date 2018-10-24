import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRawProductComponent } from './show-raw-product.component';

describe('ShowRawProductComponent', () => {
  let component: ShowRawProductComponent;
  let fixture: ComponentFixture<ShowRawProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRawProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRawProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
