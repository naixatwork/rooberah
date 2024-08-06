import { formatNumber } from '..';

export default function subtractFloatsAccurately(a: string | number, b: string | number) {
  const decimalA = formatNumber(a).toString().split('.')[1];
  const decimalB = formatNumber(b).toString().split('.')[1];

  const multiplier = 10 ** Math.max(decimalA?.length || 0, decimalB?.length || 0);
  const intA = Math.round(Number(a) * multiplier);
  const intB = Math.round(Number(b) * multiplier);

  return (intA - intB) / multiplier;
}
