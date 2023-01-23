import Card from "@/Components/Display/Card/Card";
import { formatCardAmount } from "@/Components/Display/CardAmount/CardAmount";
import CartAmountConfirm from "@/Components/Display/CardAmount/CartAmountConfirm/CartAmountConfirm";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Navigate } from "react-router-dom";
import { useBankTransferPageContext } from "../BankTransferPageContext";

export default function BankTransferPageSucces() {
  useSetAppLayoutTitle("Bank Transfer");
  const { form } = useBankTransferPageContext();

  if (!form) {
    return <Navigate to="/app/bank-transfer" />;
  }

  return (
    <Card className="common__card">
      <CardConfirm
        title="Request Submitted"
        date="11/06/2022, 10:27:41 PM"
        msg={
          <>
            An international transfer to John Smith from{" "}
            <span style={{ fontWeight: 600 }}>
              {formatCardAmount("from", form)}
            </span>{" "}
            to{" "}
            <span style={{ fontWeight: 600 }}>
              {formatCardAmount("to", form)}
            </span>{" "}
            has been submitted.
          </>
        }
        link={{
          label: "Transactions",
          path: "#",
        }}
      />
    </Card>
  );
}
