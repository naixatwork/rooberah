import subtractFloatsAccurately from './subtract';

describe(subtractFloatsAccurately.name, () => {
  it('should subtract floats accurately', () => {
    expect(subtractFloatsAccurately(10.1, 0.3)).toBe(9.8);
    expect(subtractFloatsAccurately(544, 306.09)).toBe(237.91);
    expect(subtractFloatsAccurately('10.1', '0.3')).toBe(9.8);
    expect(subtractFloatsAccurately('544', '306.09')).toBe(237.91);
  });

  it('should handle large numbers', () => {
    expect(subtractFloatsAccurately(1000000000.1, 0.3)).toBe(999999999.8);
    expect(subtractFloatsAccurately('1000000000.1', '0.3')).toBe(999999999.8);
  });

  it('should handle negative numbers', () => {
    expect(subtractFloatsAccurately(-10.1, 0.3)).toBe(-10.4);
    expect(subtractFloatsAccurately('-10.1', '0.3')).toBe(-10.4);
  });
});
