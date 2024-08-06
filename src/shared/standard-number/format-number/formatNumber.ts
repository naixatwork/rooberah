export default function formatNumber(inputNumber: string | number, decimalPlaces = 8): string {
  if (Number.isNaN(Number(inputNumber))) return '-';

  const formattedNumber = Number(inputNumber).toLocaleString(undefined, {
    maximumFractionDigits: decimalPlaces,
    useGrouping: true,
  });

  const parts = formattedNumber.split('.');

  function removeTrailingZeros() {
    if (parts.length > 1) {
      parts[1] = parts[1].replace(/0+$/, '');
    }
  }
  removeTrailingZeros();

  if (parts[1] === '') {
    return parts[0];
  }

  return parts.join('.');
}
