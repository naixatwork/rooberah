import { describe, test, expect } from 'vitest';
import calculateDiscountPrice from './calculateDiscountPrice';
import { subtractFloatsAccurately } from '#/shared/standard-number';

describe('calculateDiscountPrice', () => {
  test('should calculate discount price correctly with whole number discount', () => {
    const originalPrice = 100;
    const discount = 10;

    const result = calculateDiscountPrice({ originalPrice, discount });

    const expectedAccuratePrice = subtractFloatsAccurately(
      originalPrice,
      originalPrice * (discount / 100)
    );
    const expectedPrice = originalPrice - originalPrice * (discount / 100);

    expect(result.accuratePriceAfterDiscount).toBe(expectedAccuratePrice);
    expect(result.priceAfterDiscount).toBe(expectedPrice);
    expect(result.discount).toBe(discount);
  });

  test('should calculate discount price correctly with fractional discount', () => {
    const originalPrice = 100;
    const discount = 12.5;

    const result = calculateDiscountPrice({ originalPrice, discount });

    const expectedAccuratePrice = subtractFloatsAccurately(
      originalPrice,
      originalPrice * (discount / 100)
    );
    const expectedPrice = originalPrice - originalPrice * (discount / 100);

    expect(result.accuratePriceAfterDiscount).toBe(expectedAccuratePrice);
    expect(result.priceAfterDiscount).toBe(expectedPrice);
    expect(result.discount).toBe(discount);
  });

  test('should calculate discount price correctly with zero discount', () => {
    const originalPrice = 100;
    const discount = 0;

    const result = calculateDiscountPrice({ originalPrice, discount });

    const expectedAccuratePrice = subtractFloatsAccurately(
      originalPrice,
      originalPrice * (discount / 100)
    );
    const expectedPrice = originalPrice - originalPrice * (discount / 100);

    expect(result.accuratePriceAfterDiscount).toBe(expectedAccuratePrice);
    expect(result.priceAfterDiscount).toBe(expectedPrice);
    expect(result.discount).toBe(discount);
  });

  test('should calculate discount price correctly with full discount', () => {
    const originalPrice = 100;
    const discount = 100;

    const result = calculateDiscountPrice({ originalPrice, discount });

    const expectedAccuratePrice = subtractFloatsAccurately(
      originalPrice,
      originalPrice * (discount / 100)
    );
    const expectedPrice = originalPrice - originalPrice * (discount / 100);

    expect(result.accuratePriceAfterDiscount).toBe(expectedAccuratePrice);
    expect(result.priceAfterDiscount).toBe(expectedPrice);
    expect(result.discount).toBe(discount);
  });
});
