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
  BTCSvg,
  ETHSvg,
  SOLSvg,
  USDCSvg
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
  [ECurrency.BTC]: BTCSvg,
  [ECurrency.ETH]: ETHSvg,
  [ECurrency.SOL]: SOLSvg,
  [ECurrency.USDC]: USDCSvg
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
  [ECurrency.BTC]: "Bitcoin",
  [ECurrency.ETH]: "Ethereum",
  [ECurrency.SOL]: "Solana",
  [ECurrency.USDC]: "USD Coin"
};

export const currencyToFlag = (currency: ECurrency) =>
  mapCurrencyFlag[currency] || "";
export const currenctyToLabel = (currency: ECurrency) =>
  mapCurrencyLabel[currency] || currency;
