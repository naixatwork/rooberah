import { formatPrice } from '#/shared/standard-number';

describe('formatPrice', () => {
  test('should format the number as USD currency with two decimal places', () => {
    expect(formatPrice(1234.56)).toBe('$1,234.56');
    expect(formatPrice(0)).toBe('$0.00');
    expect(formatPrice(100)).toBe('$100.00');
  });

  test('should round the number to two decimal places', () => {
    expect(formatPrice(1234.567)).toBe('$1,234.57');
    expect(formatPrice(1234.564)).toBe('$1,234.56');
  });

  test('should handle negative numbers correctly', () => {
    expect(formatPrice(-1234.56)).toBe('-$1,234.56');
  });
});
