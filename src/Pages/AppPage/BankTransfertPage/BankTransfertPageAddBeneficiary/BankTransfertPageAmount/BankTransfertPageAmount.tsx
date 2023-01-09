import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import styles from "./BankTransfertPageAmount.module.scss";
import { useBankTransfertPageContext } from "../../BankTransfertPageContext";
import { formatCardAmount } from "@/Components/Display/CardAmount/CardAmount";

interface BankTransfertPageAmountProps {
  overlay?: boolean;
}

export default function BankTransfertPageAmount(
  props: BankTransfertPageAmountProps
) {
  const { overlay } = props;
  const { form } = useBankTransfertPageContext();
  if (!form) {
    return null;
  }
  return (
    <Card className={overlay ? styles.overlay : ""}>
      <Text tag="h2" type="h2" variant="black2">
        Amount
      </Text>
      <div className={styles.amount}>
        <Text
          tag="p"
          type="p"
          size={19}
          variant="grey"
          weight="normal"
          className={styles.amount__list}
        >
          Amount from:
          <strong className="common__strong--red">
            {formatCardAmount("from", form)}
          </strong>
        </Text>
        <Text
          tag="p"
          type="p"
          size={19}
          variant="grey"
          className={styles.amount__list}
        >
          Amount to:
          <strong className="common__strong--red">
            {formatCardAmount("to", form)}
          </strong>
        </Text>
        {/* <Text
          tag="p"
          type="p"
          size={19}
          variant="grey"
          className={styles.amount__list}
        >
          Amount from:
          <strong className="common__strong--red">12.00 USD</strong>
        </Text> */}
      </div>
    </Card>
  );
}
