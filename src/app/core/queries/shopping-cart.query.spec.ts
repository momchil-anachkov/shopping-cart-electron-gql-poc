import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCartQuery } from './shopping-cart.query';

import { describe, beforeEach, it, expect } from 'jasmine-core';

describe('ShoppingCartQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartQuery]
    });
  });

  it('should be created', inject([ShoppingCartQuery], (service: ShoppingCartQuery) => {
    expect(service).toBeTruthy();
  }));
});
