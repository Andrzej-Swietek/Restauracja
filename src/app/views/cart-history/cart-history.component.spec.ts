import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartHistoryComponent } from './cart-history.component';

describe('CartHistoryComponent', () => {
  let component: CartHistoryComponent;
  let fixture: ComponentFixture<CartHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
