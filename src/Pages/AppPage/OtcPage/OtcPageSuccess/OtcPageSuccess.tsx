import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";

export default function OtcPageSuccess() {
  useSetAppLayoutTitle("OTC");
  return (
    <Card className="common__card">
      <CardConfirm
        title="Request Submitted"
        date="11/06/2022, 10:27:41 PM"
        msg={
          <>
            An exchange request from{" "}
            <span style={{ fontWeight: 600 }}>170.00 USD</span> to{" "}
            <span style={{ fontWeight: 600 }}>170.00 USDC</span> has been
            submitted.
          </>
        }
        link={{
          label: "Transactions",
          path: "#",
        }}
      />
    </Card>
  );
}
