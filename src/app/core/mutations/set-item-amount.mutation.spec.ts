import { TestBed, inject } from '@angular/core/testing';
import { SetItemAmountMutation } from './set-item-amount.mutation';

describe('SetItemAmountMutation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetItemAmountMutation]
    });
  });

  it('should be created', inject([SetItemAmountMutation], (service: SetItemAmountMutation) => {
    expect(service).toBeTruthy();
  }));
});
