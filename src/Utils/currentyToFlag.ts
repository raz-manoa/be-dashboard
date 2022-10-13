import {
  USDSvg,
  EURSvg,
  GBPSvg,
  CADSvg,
  ZARSvg,
  KESSvg,
  UGXSvg,
  TZSSvg,
  MWKSvg,
} from "@/Assets/CurrencyFlags";
import { ECurrency } from "@/Interfaces/Currency";

const mapCurrencyFlag: Record<ECurrency, string> = {
  [ECurrency.USD]: USDSvg,
  [ECurrency.EUR]: EURSvg,
  [ECurrency.GBP]: GBPSvg,
  [ECurrency.CAD]: CADSvg,
  [ECurrency.ZAR]: ZARSvg,
  [ECurrency.KES]: KESSvg,
  [ECurrency.UGX]: UGXSvg,
  [ECurrency.TZS]: TZSSvg,
  [ECurrency.MWK]: MWKSvg,
};
const mapCurrencyLabel: Record<ECurrency, string> = {
  [ECurrency.USD]: "US Dollar",
  [ECurrency.EUR]: "Euro",
  [ECurrency.GBP]: "Pound Sterling",
  [ECurrency.CAD]: "Canadian Dollar",
  [ECurrency.ZAR]: "South African Rand",
  [ECurrency.KES]: "Kenyan Shilling",
  [ECurrency.UGX]: "Ugandan Shilling",
  [ECurrency.TZS]: "Tanzanian Shilling",
  [ECurrency.MWK]: "Malawian Kwacha",
};

export const currencyToFlag = (currency: ECurrency) =>
  mapCurrencyFlag[currency] || "";
export const currenctyToLabel = (currency: ECurrency) =>
  mapCurrencyLabel[currency] || currency;
