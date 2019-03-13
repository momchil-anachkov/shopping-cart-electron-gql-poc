import { TestBed, inject } from '@angular/core/testing';

import { CatalogueQuery } from './catalogue.query';

import { describe, beforeEach, it, expect } from 'jasmine-core';

describe('ShoppingCartQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogueQuery]
    });
  });

  it('should be created', inject([CatalogueQuery], (service: CatalogueQuery) => {
    expect(service).toBeTruthy();
  }));
});
