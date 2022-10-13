import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";

export default function ForeignExchangePageSuccess() {
  useSetAppLayoutTitle("Foreign Exchange (FX)");

  return (
    <Card className="common__card">
      <CardConfirm
        title="Request Submitted"
        date="11/06/2022, 10:27:41 PM"
        msg="An exchange request from 17.00 USD, to 15.64 EUR has been 
submitted."
        link={{
          label: "Transaction",
          path: "#",
        }}
      />
    </Card>
  );
}
