import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCartItemsComponent } from './checkout-cart-items.component';

describe('CheckoutCartItemsComponent', () => {
  let component: CheckoutCartItemsComponent;
  let fixture: ComponentFixture<CheckoutCartItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCartItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
