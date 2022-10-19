import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import React, { useEffect } from "react";
import TopUpPageNav from "./TopUpPageNav/TopUpPageNav";
import styles from "./TopUpPage.module.scss";
import CardConfirmItem from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useAppLayoutContext } from "@/Layouts/AppLayout/AppLayoutContext";
import Icon from "@/Components/General/Icon/Icon";
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
    value: (
      <Text tag="p" size={14} weight={600}>
        USD
      </Text>
    ),
  },
  {
    label: "Beneficiary Name",
    value: (
      <Text tag="p" size={14} weight={600}>
        Be Mobile Limited
      </Text>
    ),
  },
  {
    label: "Beneficiary Address",
    value: (
      <Text tag="p" size={14} weight={600}>
        Level 2, Alexander House, Silicon Avenue,Cibercity, Ebene, Mauritius
      </Text>
    ),
  },
  {
    label: "Bank Name",
    value: (
      <Text tag="p" size={14} weight={600}>
        The Mauritius Commercial Bank Ltd
      </Text>
    ),
  },
  {
    label: "Bank Address",
    value: (
      <Text tag="p" size={14} weight={600}>
        9-15 Sir William Newton Street, Port Louis
      </Text>
    ),
  },
  {
    label: "Bank Country",
    value: (
      <Text tag="p" size={14} weight={600}>
        Mauritius
      </Text>
    ),
  },
  {
    label: "Account Number",
    value: (
      <div className="flex items-center">
        <Text tag="p" size={14} weight={600}>
          000449876447656
        </Text>
        <Text tag="span" className="ml-4 cursor-pointer">
          <Icon icon="copy" color="red" size={19} />
        </Text>
      </div>
    ),
    icon: "bank-transfert",
  },
  {
    label: "IBAN",
    value: (
      <div className="flex items-center">
        <Text tag="p" size={14} weight={600}>
          MU38MCBL876165318323290823132
        </Text>
        <Text tag="span" className="ml-4 cursor-pointer">
          <Icon icon="copy" color="red" size={19} />
        </Text>
      </div>
    ),
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
        <CardConfirmItem label={d.label} value={d.value} key={`d-${id}`} />
      ))}
    </Card>
  );
};

export default TopUpPage;
