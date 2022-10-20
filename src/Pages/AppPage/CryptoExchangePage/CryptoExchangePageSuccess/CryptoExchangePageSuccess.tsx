import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";

export default function CryptoExchangePageSuccess() {
  useSetAppLayoutTitle("Crypto Exchange");
  return (
    <Card className="common__card">
      <CardConfirm
        title="Exchange Complete"
        date="11/06/2022, 10:27:41 PM"
        msg={
          <>
            exchange from<span style={{ fontWeight: 600 }}> 100.00 SOL</span> ,
            to
            <span style={{ fontWeight: 600 }}> 97 BTC </span>has been approved.
          </>
        }
      />
    </Card>
  );
}
