import { TestBed, inject } from '@angular/core/testing';

import { RemoveItemFromCartMutation } from './remove-item-from-cart.mutation';

describe('RemoveItemFromCartMutation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveItemFromCartMutation]
    });
  });

  it('should be created', inject([RemoveItemFromCartMutation], (service: RemoveItemFromCartMutation) => {
    expect(service).toBeTruthy();
  }));
});
