import Card from "@/Components/Display/Card/Card";
import { formatCardAmount } from "@/Components/Display/CardAmount/CardAmount";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import React from "react";
import { Navigate } from "react-router-dom";
import { useCryptoExchangePageContext } from "../CryptoExchangePageContext";

export default function CryptoExchangePageSuccess() {
  useSetAppLayoutTitle("Crypto Exchange");
  const { form } = useCryptoExchangePageContext();
  if (!form) {
    return <Navigate to="" />;
  }

  return (
    <Card className="common__card">
      <CardConfirm
        title="Exchange Complete"
        date="11/06/2022, 10:27:41 PM"
        msg={
          <>
            An exchange from
            <span style={{ fontWeight: 600 }}>
              {" "}
              {formatCardAmount("from", form)}
            </span>{" "}
            to
            <span style={{ fontWeight: 600 }}>
              {" "}
              {formatCardAmount("to", form)}{" "}
            </span>
            has been approved.
          </>
        }
      />
    </Card>
  );
}
