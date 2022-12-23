import CartAmountConfirm from "@/Components/Display/CardAmount/CartAmountConfirm/CartAmountConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useForeignExchangePageContext } from "../ForeignExchangePageContext";

export default function ForeignExchangePageSuccess() {
  useSetAppLayoutTitle("Foreign Exchange (FX)");
  const context = useForeignExchangePageContext();
  return <CartAmountConfirm form={context.form} title="Request Submitted" />;
}
