import { TestBed, inject } from '@angular/core/testing';
import { CheckoutMutation } from './checkout.mutation';

describe('CheckoutMutation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckoutMutation]
    });
  });

  it('should be created', inject([CheckoutMutation], (service: CheckoutMutation) => {
    expect(service).toBeTruthy();
  }));
});
