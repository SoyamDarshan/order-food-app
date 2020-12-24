import { TestBed } from '@angular/core/testing';

import { FoodItemListService } from './food-item-list.service';

describe('FoodItemListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodItemListService = TestBed.get(FoodItemListService);
    expect(service).toBeTruthy();
  });
});
