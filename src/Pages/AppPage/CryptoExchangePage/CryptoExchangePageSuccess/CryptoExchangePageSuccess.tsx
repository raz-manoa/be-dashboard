import CartAmountConfirm from "@/Components/Display/CardAmount/CartAmountConfirm/CartAmountConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useCryptoExchangePageContext } from "../CryptoExchangePageContext";

export default function CryptoExchangePageSuccess() {
  useSetAppLayoutTitle("Crypto Exchange");
  const context = useCryptoExchangePageContext();
  return <CartAmountConfirm form={context.form} />;
}
