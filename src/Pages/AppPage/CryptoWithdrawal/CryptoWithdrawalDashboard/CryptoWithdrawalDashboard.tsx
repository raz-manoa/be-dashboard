import Card from "@/Components/Display/Card/Card";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import styles from "./CryptoWithdrawal.module.scss";
import React, { useState } from "react";
import Radio, { RadioChangeEvent } from "antd/es/radio";
import Text from "@/Components/General/Text/Text";
import Ethereum from "@/Assets/Logo/Ethereum.svg";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { useForm } from "antd/es/form/Form";
import Button from "@/Components/General/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
const CryptoWithdrawalDashboard = () => {
  useSetAppLayoutTitle("Crypto Withdrawal");

  const [form] = useForm();
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  useSetAppLayoutTitle("Crypto Withdrawal");
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleWithdrawal = () => {
    form.validateFields();
    navigate("crypto-withdraw-review");
  };
  return (
    <Card className="common__card">
      <TitleCard
        title="Crypto Withdrawal"
        subtitle="Select the blockchain"
        className={styles.withdrawal__title}
      />
      <div className={styles.withdrawal__type}>
        <Radio.Group
          onChange={onChange}
          value={value}
          className={styles.withdrawal__radio}
        >
          <Radio value={1}>ETH</Radio>
          <Radio value={2}>BTC</Radio>
          <Radio value={3}>SOL</Radio>
        </Radio.Group>
        <div className={styles.withdrawal__logo}>
          <img src={Ethereum} alt="logo ethereum" />
          <Text tag="h2" type="h2" variant="grey">
            Ethereum <sup> ETH</sup>
          </Text>
        </div>
      </div>
      <FormCustom form={form}>
        <FormCustom.Input
          name="example"
          label="Destination Address:"
          color="grey"
          rules={[
            {
              required: true,
              message: "Ce champ est requis",
            },
          ]}
        />
        <Text
          tag="p"
          type="p"
          className={styles.withdrawal__validation}
          size={12}
        >
          validation :
        </Text>
        <div className={`${styles.select}`}>
          <FormCustom.Input
            name="sent"
            label="Amount to be sent:"
            color="grey"
            type="number"
            className={styles.select__input}
            placeholder="0"
            rules={[
              {
                required: true,
                message: "Ce champ est requis",
              },
            ]}
          />
          <FormCustom.Select
            name="select"
            placeholder="ETH"
            options={[
              {
                label: "ETH",
                value: "eth",
              },
              {
                label: "BTC",
                value: "btc",
              },
              {
                label: "SQL",
                value: "sql",
              },
            ]}
          />
        </div>
        <Text tag="p" type="p" className="common__txt" variant="grey">
          <strong>0.00234129 ETH </strong>
          available to withdraw
        </Text>
        <div className={styles.withdrawal__info}>
          <Text tag="p" type="p" variant="grey">
            1 BTC equals 1.07398994 SOL
          </Text>
          <Text tag="p" type="p" variant="grey">
            Estimated transaction fee: 0.00050000
          </Text>
          <Button
            type="primary"
            onClick={handleWithdrawal}
            className="common__btn"
          >
            Continuer
          </Button>
        </div>
      </FormCustom>
    </Card>
  );
};

export default CryptoWithdrawalDashboard;
