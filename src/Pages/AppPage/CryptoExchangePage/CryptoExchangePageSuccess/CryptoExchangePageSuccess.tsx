import CartAmountConfirm from "@/Components/Display/CardAmount/CartAmountConfirm/CartAmountConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useCryptoExchangePageContext } from "../CryptoExchangePageContext";

export interface CryptoExchangeConfirmData {}

export default function CryptoExchangePageSuccess() {
  useSetAppLayoutTitle("Crypto Exchange");
  const { form, confirmation } = useCryptoExchangePageContext();
  console.log("confirmation", confirmation);
  return <CartAmountConfirm form={form} />;
}
