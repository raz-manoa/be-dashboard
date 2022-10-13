import format from "format-number";

export const currencyParser = (value: number): string => format()(value);
