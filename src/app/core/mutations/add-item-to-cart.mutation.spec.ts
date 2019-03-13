import { TestBed, inject } from '@angular/core/testing';
import { AddItemToCartMutation } from './add-item-to-cart.mutation';

describe('AddItemToCartMutation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddItemToCartMutation]
    });
  });

  it('should be created', inject([AddItemToCartMutation], (service: AddItemToCartMutation) => {
    expect(service).toBeTruthy();
  }));
});
