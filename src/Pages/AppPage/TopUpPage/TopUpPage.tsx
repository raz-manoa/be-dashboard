import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import React, { useEffect } from "react";
import TopUpPageNav from "./TopUpPageNav/TopUpPageNav";
import styles from "./TopUpPage.module.scss";
import CardConfirmItem from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useAppLayoutContext } from "@/Layouts/AppLayout/AppLayoutContext";
const moneyData = [
  {
    label: "USD (Mauritius)",
    path: "#",
  },
  {
    label: "MUR (Mauritius)",
    path: "#",
  },
  {
    label: "ZAR (Mauritius)",
    path: "#",
  },
  {
    label: "EUR (Mauritius)",
    path: "#",
  },
  {
    label: "EUR (SEPA)",
    path: "#",
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
    value: "000449876447656",
    icon: "bank-transfert",
  },
  {
    label: "IBAN",
    value: "MU38MCBL876165318323290823132",
    icon: "bank-transfert",
  },
];
const TopUpPage = () => {
  const { setHeaderTitle } = useAppLayoutContext();
  useEffect(() => {
    setHeaderTitle("Top Up");
  });
  return (
    <Card className="common__card">
      <Text tag="p" type="p" className={styles.txt__header} variant="grey">
        To top up, please use the account information below to transfer funds:
      </Text>
      <div className={styles.card__nav__list}>
        {moneyData.map((m, id) => (
          <TopUpPageNav label={m.label} to={m.path} key={`m-${id}`} />
        ))}
      </div>
      {data.map((d, id) => (
        <CardConfirmItem
          label={d.label}
          value={d.value}
          icon={d.icon}
          key={`d-${id}`}
        />
      ))}
    </Card>
  );
};

export default TopUpPage;
