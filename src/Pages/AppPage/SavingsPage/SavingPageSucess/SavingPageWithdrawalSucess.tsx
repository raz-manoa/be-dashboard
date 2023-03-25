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
        title="Savings Withdrawal - Request Submitted"
        date={date.toLocaleString()}
        msg={
          <>
            A withdrawal request of{" "}
            <b style={{ fontWeight: 600 }}>
              {form?.value} {form?.currency}
            </b>{" "}
            has been submitted.
          </>
        }
        txt="You will be notified when the withdrawal has been completed."
        link={{
            label: "Transactions",
            path: "/app/transactions",
        }}
      />
    </Card>
  );
}
