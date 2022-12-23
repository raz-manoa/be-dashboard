import {
  formatCardAmount,
  ICardAmountForm,
} from "@/Components/Display/CardAmount/CardAmount";
import { Navigate } from "react-router-dom";
import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/ConfirmModal/CardConfirm";

interface ICartAmountConfirmProps<T> {
  form?: T;
}

const CartAmountConfirm = <T extends ICardAmountForm>(
  props: ICartAmountConfirmProps<T>
) => {
  const { form } = props;
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
};

export default CartAmountConfirm;
