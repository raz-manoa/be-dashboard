import CartAmountConfirm from "@/Components/Display/CardAmount/CartAmountConfirm/CartAmountConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useOtcPagePageContext } from "../OtcPageContext";

export default function OtcPageSuccess() {
  useSetAppLayoutTitle("OTC");
  const context = useOtcPagePageContext();
  return <CartAmountConfirm form={context.form} title="Request Submitted" />;
}
