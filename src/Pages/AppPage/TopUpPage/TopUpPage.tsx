import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import TopUpPageNav from "./TopUpPageNav/TopUpPageNav";
import styles from "./TopUpPage.module.scss";
import CardConfirmItem from "@/Components/Display/CardConfirm/CardConfirmItem";
import { useSetAppLayoutTitle } from "../../../Layouts/AppLayout/AppLayoutContext";
import CopyTextDisplay from "@/Components/Display/CopyTextDisplay/CopyTextDisplay";
import { useEffect, useMemo, useState } from "react";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";

export interface ITopUpItem {
  id: string;
  currencyId: string;
  name: string;
  bankName: string;
  bankAddress: string;
  bankCountry: string;
  accountNumber: string;
  transit: string;
  bankCode: string;
  swiftCode: string;
  beneficiaryName: string;
  beneficiaryAddress: string;
  intermediaryBankName: string;
  intermediaryBankAddress: string;
  intermediaryAccountNumber: string;
  intermediarySwiftCode: string;
  iban: string;
  intermediaryIban: string;
  appTypeId: number;
  createdAt: string;
  updatedAt: string;
}

const TopUpPage = () => {
  useSetAppLayoutTitle("Top Up");
  const [selected, setSelected] = useState<ITopUpItem>();
  const [list, setList] = useState<ITopUpItem[] | undefined>(undefined);

  useEffect(() => {
    const fetchTopUp = async () => {
      const response = await companyDataEndpoint.getTopUP();
      if (response && response.topUpOptions) {
        setList(response.topUpOptions);
        if (response.topUpOptions[0]) {
          setSelected(response.topUpOptions[0]);
        }
      } else {
        setList([]);
      }
    };

    if (!list) {
      fetchTopUp();
    }
  }, []);

  const data = useMemo(() => {
    if (!selected) {
      return [];
    }
    const {
      name,
      beneficiaryName,
      beneficiaryAddress,
      bankName,
      bankAddress,
      bankCountry,
      accountNumber,
      iban,
    } = selected;
    return [
      {
        label: "Currency",
        value: name,
      },
      {
        label: "Beneficiary Name",
        value: beneficiaryName,
      },
      {
        label: "Beneficiary Address",
        value: beneficiaryAddress,
      },
      {
        label: "Bank Name",
        value: bankName,
      },
      {
        label: "Bank Address",
        value: bankAddress,
      },
      {
        label: "Bank Country",
        value: bankCountry,
      },

      {
        label: "Account Number",
        value: <CopyTextDisplay value={accountNumber} />,
        icon: "bank-transfert",
      },
      {
        label: "IBAN",
        value: <CopyTextDisplay value={iban} />,
        icon: "copy",
      },
      {
        label: "Reference",
        // TODO use be id ???
        value: <CopyTextDisplay value={"use BE ID"} />,
        icon: "copy",
      },
    ];
  }, [selected]);

  const handleClickItem = (item: ITopUpItem) => () => {
    setSelected(item);
  };

  return (
    <Card className="common__card">
      <Text tag="p" type="p" className={styles.txt__header} variant="grey">
        To top up, please use the account information below to transfer funds:
      </Text>
      <div className={styles.card__nav__list}>
        {!!list &&
          list.map((item) => (
            <TopUpPageNav
              label={`${item.name} (${item.bankName})`}
              active={selected && selected.id === item.id}
              key={`m-${item.id}`}
              onClick={handleClickItem(item)}
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
