import { formatCardAmount } from "@/Components/Display/CardAmount/CardAmount";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";
import Text from "@/Components/General/Text/Text";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useBankTransfertPageContext } from "../BankTransfertPageContext";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import Alert from "antd/es/alert";
import {useState} from "react";

export default function BankTransfertPageReview() {
  useSetAppLayoutTitle("Bank Transfer");
  const navigate = useNavigate();
  const { form } = useBankTransfertPageContext();
  const [ error, setError ] = useState<boolean>(false);


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

  const onSubmit = async () => {
    console.log("submit form", form);
    try {
      const companyId = localStorage.getItem("companyId") || "";
      const body = {
        currencyFrom: form.from.currency,
        currencyTo: form.to.currency,
        amount: Number(form.from.value),
        recipientName: form.beneficiary.name,
        country: form.beneficiary.country,
        city: form.beneficiary.city_or_district,
        address: form.beneficiary.name,
        bankName: form.beneficiary.bank_name,
        accountNumber: form.beneficiary.account_number,
        SWIFT: form.beneficiary.name,
        IBAN: form.beneficiary.account_number,
        message: form.beneficiary.message,
      };
      const data = await companyDataEndpoint.createBankTransfer(companyId, {
        currencyFrom: form.from.currency,
        currencyTo: form.to.currency,
        amount: form.from.value,
        type: "exchange",
      });
      navigate({
        pathname: "/app/bank-transfer/confirm",
      });
    } catch (e) {
      setError(true);
    }
  };
  return (
      <div>
        {error && <Alert message="Transfer failed" type="error" className="mb-8" />}
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
      </div>
  );
}
