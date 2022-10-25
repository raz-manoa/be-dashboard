import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import TopUpPageNav from "./TopUpPageNav/TopUpPageNav";
import styles from "./TopUpPage.module.scss";
import CardConfirmItem from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "../../../Layouts/AppLayout/AppLayoutContext";
import CopyTextDisplay from "@/Components/Display/CopyTextDisplay/CopyTextDisplay";
import { useState } from "react";

const TopUpPage = () => {
  useSetAppLayoutTitle("Top Up");
  const [selected, setSelected] = useState(1);

  const moneyData = [
    {
      id: 1,
      label: "USD (Mauritius)",
    },
    {
      id: 2,
      label: "MUR (Mauritius)",
    },
    {
      id: 3,
      label: "ZAR (Mauritius)",
    },
    {
      id: 4,
      label: "EUR (Mauritius)",
    },
    {
      id: 5,
      label: "EUR (SEPA)",
    },
  ];
  const data = [
    {
      label: "Currency",
      value: "USD",
    },
    {
      label: "Beneficiary Name",
      value: "Be Mobile Limited",
    },
    {
      label: "Beneficiary Address",
      value:
        "Level 2, Alexander House, Silicon Avenue,Cibercity, Ebene, Mauritius ",
    },
    {
      label: "Bank Name",
      value: "The Mauritius Commercial Bank Ltd",
    },
    {
      label: "Bank Address",
      value: "9-15 Sir William Newton Street, Port Louis",
    },
    {
      label: "Bank Country",
      value: "Mauritius",
    },

    {
      label: "Account Number",
      value: <CopyTextDisplay value={"000449876447656"} />,
      icon: "bank-transfert",
    },
    {
      label: "IBAN",
      value: <CopyTextDisplay value={"MU38MCBL876165318323290823132"} />,
      icon: "copy",
    },
    {
      label: "Reference",
      value: <CopyTextDisplay value={"user BE_ID"} />,
      icon: "copy",
    },
  ];

  return (
    <Card className="common__card">
      <Text tag="p" type="p" className={styles.txt__header} variant="grey">
        To top up, please use the account information below to transfer funds:
      </Text>
      <div className={styles.card__nav__list}>
        {moneyData.map((m) => (
          <TopUpPageNav
            label={m.label}
            active={selected === m.id}
            key={`m-${m.id}`}
            onClick={() => setSelected(m.id)}
          />
        ))}
      </div>
      {data.map((d, id) => (
        <CardConfirmItem label={d.label} value={d.value} key={`d-${id}`} />
      ))}
    </Card>
  );
};

export default TopUpPage;
