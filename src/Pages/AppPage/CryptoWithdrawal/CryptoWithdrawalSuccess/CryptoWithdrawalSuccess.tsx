import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import {
  useAppLayoutContext,
  useSetAppLayoutTitle,
} from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";

export default function CryptoWithdrawalSuccess() {
  useSetAppLayoutTitle("Crypto Withdrawal");
  return (
    <Card className="common__card">
      <CardConfirm
        title="Transfer Complete"
        date="11/06/2022, 10:27:41 PM"
        msg={
          <>
            <span style={{ fontWeight: 600 }}> 0.00111111 ETH </span> has been
            sent.
          </>
        }
      />
    </Card>
  );
}
