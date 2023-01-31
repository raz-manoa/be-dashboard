import numbro from "numbro";

export const currencyParser = (value: number, precision = 2): string =>
  numbro(value).format({ thousandSeparated: true, mantissa: precision });
