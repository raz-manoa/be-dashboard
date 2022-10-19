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
        msg={
          <>
            An exchange request from{" "}
            <span style={{ fontWeight: 600 }}>17.00 USD</span>, to{" "}
            <span style={{ fontWeight: 600 }}>15.64 EUR</span> has been
            submitted.
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
