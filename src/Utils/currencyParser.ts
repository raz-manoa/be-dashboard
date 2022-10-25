import numbro from "numbro";

export const currencyParser = (value: number): string =>
  numbro(value).format({ thousandSeparated: true, mantissa: 2 });
