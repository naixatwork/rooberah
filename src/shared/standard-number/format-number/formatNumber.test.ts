import formatNumber from './formatNumber';

describe('formatNumber function', () => {
  it('should format a number with default decimal places', () => {
    const result: string = formatNumber(123456.7800060000);
    expect(result).toBe('123,456.780006');
  });

  it('should format a number with custom decimal places', () => {
    const result = formatNumber(123456.7800060000, 4);
    expect(result).toBe('123,456.78');
  });

  it('should format a string number with default decimal places', () => {
    const result = formatNumber('123456.7800060000');
    expect(result).toBe('123,456.780006');
  });

  it('should remove trailing zeros from the fractional part', () => {
    const result = formatNumber(123456.120000);
    expect(result).toBe('123,456.12');
  });

  it('should handle whole numbers with no fractional part', () => {
    const result = formatNumber(123456);
    expect(result).toBe('123,456');
  });

  it('should handle input with multiple trailing zeros', () => {
    const result = formatNumber(123000.000);
    expect(result).toBe('123,000');
  });

  it('should return an empty string for invalid input', () => {
    const result = formatNumber('invalidInput');
    expect(result).toBe('-');
  });
});
