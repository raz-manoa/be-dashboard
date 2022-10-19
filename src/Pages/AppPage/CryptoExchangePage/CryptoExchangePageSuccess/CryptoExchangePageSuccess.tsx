import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";

export default function CryptoExchangePageSuccess() {
  useSetAppLayoutTitle("Crypto Exchange");
  return (
    <Card className="common__card">
      <CardConfirm
        title="Transfer Complete"
        date="11/06/2022, 10:27:41 PM"
        msg="5.00 USD has been sent to YR Main"
      />
    </Card>
  );
}
