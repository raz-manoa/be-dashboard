import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";

export default function BeNetworkPageConfirm() {
  useSetAppLayoutTitle("Be Network");
  return (
    <Card className="common__card">
      <CardConfirm
        title="Transfer Complete"
        date="11/06/2022, 10:27:41 PM"
        msg={
          <>
            <span style={{ fontWeight: 600 }}>5.00 USD</span> has been sent to{" "}
            <span style={{ fontWeight: 600 }}>YR Main</span>
          </>
        }
      />
    </Card>
  );
}
