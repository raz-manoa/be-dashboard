import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";

export default function SavingPageSucess() {
  useSetAppLayoutTitle("Savings");

  return (
    <Card className="common__card">
      <CardConfirm
        title="Savings Deposit - Deposit Completed"
        date="11/06/2022, 10:27:41 PM"
        msg={
          <>
            A deposit of <b style={{ fontWeight: 600 }}>100 USD</b> has been
            made.
          </>
        }
        link={{
          label: "Transactions",
          path: "#",
          beforeText: "To check the status of your transaction, please see",
        }}
      />
    </Card>
  );
}
