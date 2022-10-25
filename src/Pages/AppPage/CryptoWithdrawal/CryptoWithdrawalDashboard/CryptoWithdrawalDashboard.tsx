import Card from "@/Components/Display/Card/Card";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import styles from "./CryptoWithdrawal.module.scss";
import React, { useState } from "react";
import Radio, { RadioChangeEvent } from "antd/es/radio";
import Text from "@/Components/General/Text/Text";
import Ethereum from "@/Assets/Logo/Ethereum.svg";
import Btc from "@/Assets/Logo/BitCoin.svg";
import Solana from "@/Assets/Logo/Solana.svg";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { useForm } from "antd/es/form/Form";
import Button from "@/Components/General/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
const CryptoWithdrawalDashboard = () => {
  useSetAppLayoutTitle("Crypto Withdrawal");

  const [form] = useForm();
  const [value, setValue] = useState(1);
  const [error, setError] = useState(false);
  const [currentValue, setCurrentValue] = useState("");

  const navigate = useNavigate();
  useSetAppLayoutTitle("Crypto Withdrawal");

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const handleWithdrawal = () => {
    form.validateFields();
    navigate("review");
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
          {value === 1 && (
            <>
              <img src={Ethereum} alt="logo ethereum" />
              <Text tag="h2" type="h2" variant="grey">
                Ethereum <sup> ETH</sup>
              </Text>
            </>
          )}
          {value === 2 && (
            <>
              <img src={Btc} alt="logo ethereum" />
              <Text tag="h2" type="h2" variant="grey">
                BitCoin <sup> BTC</sup>
              </Text>
            </>
          )}
          {value === 3 && (
            <>
              <img src={Solana} alt="logo ethereum" />
              <Text tag="h2" type="h2" variant="grey">
                Solana <sup> SOL</sup>
              </Text>
            </>
          )}
        </div>
      </div>
      <FormCustom
        form={form}
        className={`${styles.withdrawal__form} ${
          currentValue === "error"
            ? styles.error
            : currentValue === "success"
            ? styles.success
            : ""
        }`}
      >
        <FormCustom.Input
          name="example"
          label="Destination Address:"
          color="grey"
          className={styles.adress}
          rules={[
            {
              required: true,
              message: "Ce champ est requis",
            },
          ]}
          onInput={(e) => setCurrentValue((e.target as any).value)}
        />
        <Text
          tag="p"
          type="p"
          className={styles.withdrawal__validation}
          size={12}
        >
          Validation:{" "}
          {currentValue === "error" ? (
            <>Address is incorrect</>
          ) : currentValue === "success" ? (
            <>Address is correct</>
          ) : (
            <></>
          )}
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
                label: "SOL",
                value: "sol",
              },
            ]}
          />
        </div>
        <Text
          tag="p"
          type="p"
          className={`${styles.txt__info} common__txt`}
          variant="grey"
        >
          {value === 1 && <strong>0.00234129 ETH </strong>}
          {value === 2 && <strong>0.00234129 BTC </strong>}
          {value === 3 && <strong>0.00234129 SOL </strong>}
          available to withdraw
        </Text>

        <div className={styles.withdrawal__info}>
          {value === 1 && (
            <>
              <Text tag="p" type="p" variant="grey">
                1 ETH equals 1400 USDC
              </Text>
            </>
          )}
          {value === 2 && (
            <>
              <Text tag="p" type="p" variant="grey">
                1 BTC equals 30000 USDC
              </Text>
            </>
          )}
          {value === 3 && (
            <>
              <Text tag="p" type="p" variant="grey">
                1 SOL equals 50 USDC
              </Text>
            </>
          )}
          <Text tag="p" type="p" variant="grey">
            Estimated transaction fee: 0.00050000
          </Text>
          <Button
            type="primary"
            onClick={handleWithdrawal}
            className="common__btn"
          >
            Continue
          </Button>
        </div>
      </FormCustom>
    </Card>
  );
};

export default CryptoWithdrawalDashboard;
