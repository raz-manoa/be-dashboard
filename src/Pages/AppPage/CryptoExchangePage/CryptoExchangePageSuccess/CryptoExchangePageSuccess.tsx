import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import React from "react";

export default function CryptoExchangePageSuccess() {
  return (
    <Card className="common__card">
      <CardConfirm
        title="Exchange Complete"
        date="11/06/2022, 10:27:41 PM"
        msg="An exchange from 100.00 SOL, to 97 BTC has been approved."
      />
    </Card>
  );
}
