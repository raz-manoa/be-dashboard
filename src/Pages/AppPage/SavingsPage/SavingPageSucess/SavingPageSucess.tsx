import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import Text from "@/Components/General/Text/Text";
import { useAppLayoutContext } from "@/Layouts/AppLayout/AppLayoutContext";
import React, { useEffect } from "react";

export default function SavingPageSucess() {
  const { setHeaderTitle } = useAppLayoutContext();
  useEffect(() => {
    setHeaderTitle("Savings");
  }, []);

  return (
    <Card className="common__card">
      <CardConfirm
        title="Savings Withdrawal - Request Submitted"
        date="11/06/2022, 10:27:41 PM"
        msg="A withdrawal request of 100 USD has been submitted."
        txt="You will be notified when the withdrawal has been completed."
        link={{
          label: "Transaction",
          path: "#",
        }}
      />
    </Card>
  );
}
