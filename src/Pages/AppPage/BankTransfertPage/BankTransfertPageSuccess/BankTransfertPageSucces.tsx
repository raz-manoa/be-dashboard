import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useAppLayoutContext } from "@/Layouts/AppLayout/AppLayoutContext";
import React, { useEffect } from "react";

export default function BankTransfertPageSucces() {
  const { setHeaderTitle } = useAppLayoutContext();
  useEffect(() => {
    setHeaderTitle("Bank Transfers");
  });
  return (
    <Card className="common__card">
      <CardConfirm
        title="Request Submitted"
        date="11/06/2022, 10:27:41 PM"
        msg="An international transfer to John Smith, from 12.00 USD to 12.00 USD has been submitted."
        link={{
          label: "Transaction",
          path: "#",
        }}
      />
    </Card>
  );
}
