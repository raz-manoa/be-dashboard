import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import React, { useEffect, useMemo } from "react";
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

const TopUpPage = () => {
  const { setHeaderTitle } = useAppLayoutContext();

  const data = useMemo(() => {
    return [
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
        value: (
          <div className="flex items-center">
            <Text size={12} weight={600} variant="black">
              000449876447656
            </Text>
            <span className="ml-4 cursor-pointer">
              <Icon icon="copy" size={19} color="#e02b59" />
            </span>
          </div>
        ),
        icon: "copy",
      },
      {
        label: "IBAN",
        value: (
          <div className="flex items-center">
            <Text size={12} weight={600} variant="black">
              MU38MCBL876165318323290823132
            </Text>
            <span className="ml-4 cursor-pointer">
              <Icon icon="copy" size={19} color="#e02b59" />
            </span>
          </div>
        ),
        icon: "copy",
      },
    ];
  }, []);

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
