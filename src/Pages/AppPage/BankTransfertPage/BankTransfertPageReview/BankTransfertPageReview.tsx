import { formatCardAmount } from "@/Components/Display/CardAmount/CardAmount";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import Text from "@/Components/General/Text/Text";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useBankTransfertPageContext } from "../BankTransfertPageContext";

export default function BankTransfertPageReview() {
  useSetAppLayoutTitle("Bank Transfer");
  const navigate = useNavigate();
  const { form } = useBankTransfertPageContext();

  if (!form) {
    return <Navigate to="/app/bank-transfer" />;
  }

  const data: CardModalItemProps[] = [
    {
      label: "Amount from",
      value: formatCardAmount("from", form),
      color: "black",
    },
    {
      label: "Amount to",
      value: formatCardAmount("to", form),
      color: "black",
    },
    {
      label: "Transaction Fee",
      value: formatCardAmount("transactionFee", form),
      color: "black",
    },
    {
      label: "Recipient",
      value: "John Smith",
      color: "black",
    },
    {
      label: "Country",
      value: "USA",
      color: "black",
    },
    {
      label: "City",
      value: "Washington",
      color: "black",
    },
    {
      label: "Bank Name",
      value: "City Bank",
      color: "black",
    },
    {
      label: "Account Number",
      value: "000449876447656",
      color: "black",
    },
    {
      label: "BIC/SWIFT Code",
      value: "3003",
      color: "black",
    },
    {
      label: "IBAN",
      value: "876165318323290823132",
      color: "black",
    },
    {
      label: "Message",
      value: (
        <Text variant="black" size={14}>
          This is a message
        </Text>
      ),
      color: "black",
      align: "row",
      weight: 400,
    },
  ];

  const onSubmit = () => {
    console.log("submit form", form);
    // TODO: submit exchange
    navigate({
      pathname: "/app/bank-transfer/confirm",
    });
  };
  return (
    <CardConfirm
      data={data}
      title="Review"
      className="common__card"
      btnPrimary="back"
      btnSecondary="Confirm"
      itemStyle={{ padding: "20px 15px" }}
      onClickFirstBtn={() => {
        navigate({
          pathname: "/app/bank-transfer/add-beneficiary",
        });
      }}
      onClickSecondBtn={onSubmit}
    />
  );
}
