import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useBeNetworkPageContext } from "../BeNetworkPageContext";

export default function BeNetworkPageConfirm() {
  useSetAppLayoutTitle("Be Network");
  const { form } = useBeNetworkPageContext();
  if (!form) {
    return null;
  }
  return (
    <Card className="common__card">
      <CardConfirm
        title="Transfer Complete"
        date={new Date().toLocaleDateString("default", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        msg={
          <>
            <span style={{ fontWeight: 600 }}>
              {form.amount} {form.currency}
            </span>{" "}
            has been sent to{" "}
            <span style={{ fontWeight: 600 }}>{form.recipient?.identity}</span>
          </>
        }
      />
    </Card>
  );
}
