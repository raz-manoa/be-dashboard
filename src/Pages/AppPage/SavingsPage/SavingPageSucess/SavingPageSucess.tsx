import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useSavingPageContext } from "../SavingPageContext";

export default function SavingPageSucess() {
  useSetAppLayoutTitle("Savings");
  const { form } = useSavingPageContext();

  return (
    <Card className="common__card">
      <CardConfirm
        title="Savings Withdrawal - Request Submitted"
        date="11/06/2022, 10:27:41 PM"
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
          label: "Transaction",
          path: "#",
        }}
      />
    </Card>
  );
}
