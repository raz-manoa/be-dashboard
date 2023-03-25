import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useSavingPageContext } from "../SavingPageContext";
import dayjs from "dayjs";

export default function SavingPageSucess() {
  useSetAppLayoutTitle("Savings");
  const { form } = useSavingPageContext();
  const date = new Date();

  return (
    <Card className="common__card">
      <CardConfirm
        title="Savings Deposit - Deposit Completed"
        date={date.toLocaleString()}
        msg={
          <>
            A deposit of{" "}
            <b style={{ fontWeight: 600 }}>
              {form?.value} {form?.currency}
            </b>{" "}
            has been made.
          </>
        }
        link={{
          label: "Transactions",
          path: "/app/transactions",
          beforeText: "To check the status of your transaction, please see",
        }}
      />
    </Card>
  );
}
