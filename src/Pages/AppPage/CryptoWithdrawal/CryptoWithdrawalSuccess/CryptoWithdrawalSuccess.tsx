import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useCryptoWithdrawalContext } from "../CryptoWithdrawalContext";

export default function CryptoWithdrawalSuccess() {
  useSetAppLayoutTitle("Crypto Withdrawal");
  const { form, confirmation } = useCryptoWithdrawalContext();
  if (!form) return null;
  return (
    <Card className="common__card">
      <CardConfirm
        title="Transfer Complete"
        date="11/06/2022, 10:27:41 PM"
        msg={
          <>
            <span style={{ fontWeight: 600 }}>
              {" "}
              {form.amount} {form.currency}{" "}
            </span>{" "}
            has been sent.
          </>
        }
      />
    </Card>
  );
}
