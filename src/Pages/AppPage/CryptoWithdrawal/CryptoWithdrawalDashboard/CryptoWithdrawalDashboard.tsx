import Card from "@/Components/Display/Card/Card";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import styles from "./CryptoWithdrawal.module.scss";
import { useEffect, useMemo, useState } from "react";
import Radio, { RadioChangeEvent } from "antd/es/radio";
import Text from "@/Components/General/Text/Text";
import Ethereum from "@/Assets/Logo/Ethereum.svg";
import Btc from "@/Assets/Logo/BitCoin.svg";
import Solana from "@/Assets/Logo/Solana.svg";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { useForm } from "antd/es/form/Form";
import Form from "antd/es/form";
import Button from "@/Components/General/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import companyDataEndpoint, {
  AccountsResponse,
  CurrencyInfo,
} from "@/Api/endpoints/companyData.endpoint";
import { ECurrency } from "@/Interfaces/Currency";
import { CryptoWithdrawalFormType } from "../CryptoWithdrawalContext";

const cryptoData: { [c in ECurrency]?: CurrencyInfo } = {
  [ECurrency.SOL]: {
    id: ECurrency.SOL,
    sign: "SOL",
    name: "Solana",
    isCrypto: true,
    precision: 8,
    icon: Solana,
  },
  [ECurrency.BTC]: {
    id: ECurrency.BTC,
    sign: "₿",
    name: "Bitcoin",
    isCrypto: true,
    precision: 8,
    icon: Btc,
  },
  [ECurrency.ETH]: {
    id: ECurrency.ETH,
    sign: "Ξ",
    name: "Ethereum",
    isCrypto: true,
    precision: 8,
    icon: Ethereum,
  },
};

const CryptoWithdrawalDashboard = () => {
  useSetAppLayoutTitle("Crypto Withdrawal");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);

  const [form] = useForm<CryptoWithdrawalFormType>();
  const [error, setError] = useState<boolean | null>(null);

  const navigate = useNavigate();

  const handleTransactionFee = async () => {
    const { amount, currency, address } = form.getFieldsValue();
    const response = await companyDataEndpoint.getMyCryptoWithdrawalFee({
      amount,
      coin: currency,
      address,
    });

    if (response.success === true) {
      form.setFields([
        {
          name: "fee",
          value: response.fee,
        },
      ]);
    } else {
      form.setFields([
        {
          name: "fee",
          value: null,
        },
      ]);
    }
  };

  const handleWithdrawal = async (e: any) => {
    try {
      e.preventDefault();
      console.log("handle withdrawal");
      const formData = await form.validateFields();
      console.log("formData", formData);
      // navigate("review");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    companyDataEndpoint
      .getMyAccounts()
      .then((data) => {
        if (data) {
          setAccounts(data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  const availableCurrency = useMemo(() => {
    const availableSign: ECurrency[] = Object.keys(cryptoData) as ECurrency[];
    return accounts.filter((account) =>
      availableSign.includes(account.currency)
    );
  }, [cryptoData, accounts]);

  useEffect(() => {
    const fieldValue = form.getFieldsValue();
    if (!fieldValue.chain) {
      form.setFields([
        {
          name: ["chain"],
          value: availableCurrency[0] && availableCurrency[0].currency,
        },
      ]);
    }
    if (!fieldValue.currency) {
      form.setFields([
        {
          name: ["currency"],
          value: availableCurrency[0] && availableCurrency[0].currency,
        },
      ]);
    }
  }, [availableCurrency]);

  return (
    <Card className="common__card">
      <TitleCard
        title="Crypto Withdrawal"
        subtitle="Select the blockchain"
        className={styles.withdrawal__title}
      />

      <FormCustom<CryptoWithdrawalFormType>
        form={form}
        className={`${styles.withdrawal__form} ${
          error === true ? styles.error : error === false ? styles.success : ""
        }`}
      >
        <div className={styles.withdrawal__type}>
          <FormCustom.Input name="fee" hidden label="" />
          <Form.Item
            name="chain"
            rules={[
              {
                required: true,
                message: "Chain is required",
              },
            ]}
          >
            <Radio.Group className={styles.withdrawal__radio}>
              {availableCurrency.map((item, index) => {
                return (
                  <Radio key={item.currency} value={item.currency}>
                    {item.currency}
                  </Radio>
                );
              })}
            </Radio.Group>
          </Form.Item>
          <div className={styles.withdrawal__logo}>
            <Form.Item shouldUpdate={() => true} noStyle>
              {({ getFieldValue }) => {
                const chain = getFieldValue("chain");
                const chainItem = availableCurrency.find(
                  (c) => c.currency === chain
                );
                if (!chainItem) return null;
                const data = cryptoData[chainItem.currency];
                return (
                  <>
                    <img src={data?.icon || ""} alt={data?.name || "icon"} />
                    <Text tag="h2" type="h2" variant="grey">
                      {data?.name} <sup> {chainItem.currency}</sup>
                    </Text>
                  </>
                );
              }}
            </Form.Item>
          </div>
        </div>
        <FormCustom.Input
          name="address"
          label="Destination Address:"
          color="grey"
          className={styles.adress}
          help={"test"}
          rules={[
            {
              validator: (rule, value, callback) => {
                if (!value) {
                  callback("Address is required");
                } else if (value.length < 23 || value.length > 45) {
                  callback("The address is not valid");
                } else {
                  callback();
                }
              },
            },
          ]}
          hideError={true}
        />
        <Form.Item dependencies={["address"]} noStyle>
          {({ getFieldError, getFieldValue }) => {
            const address = getFieldValue("address");
            const addressError = getFieldError("address");

            if (address) {
              const hasError: boolean = !!addressError && !!addressError.length;
              if (error !== hasError) {
                setError(hasError);
              }
            } else if (!address && error !== null) {
              setError(null);
            }
            return (
              <Text
                tag="p"
                type="p"
                className={styles.withdrawal__validation}
                size={12}
              >
                Validation:{" "}
                {!address ? (
                  ""
                ) : addressError ? (
                  <>Address is incorrect</>
                ) : (
                  <>Address is correct</>
                )}
              </Text>
            );
          }}
        </Form.Item>
        <div className={`${styles.select}`}>
          <FormCustom.Input
            name="amount"
            label="Amount to be sent:"
            color="grey"
            type="number"
            dependencies={["currency"]}
            className={styles.select__input}
            placeholder="0"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
              ({ getFieldValue }) => ({
                validator: (rule, value, callback) => {
                  const currency = getFieldValue("currency");
                  const parsedValue = parseFloat(value) || 0;
                  const currencyItem = availableCurrency.find(
                    (c) => c.currency === currency
                  );
                  if (!currencyItem) {
                    callback();
                  } else if (
                    currencyItem &&
                    parsedValue > currencyItem.balance
                  ) {
                    callback("The amount is not available");
                  }
                },
              }),
            ]}
            onChange={handleTransactionFee}
          />
          <FormCustom.Select
            name="currency"
            placeholder="currency"
            options={availableCurrency.map(({ currency }) => ({
              label: currency,
              value: currency,
            }))}
            onChange={handleTransactionFee}
          />
        </div>
        <Form.Item shouldUpdate={() => true} noStyle>
          {({ getFieldValue }) => {
            const currency = getFieldValue("currency");
            const currencyItem = availableCurrency.find(
              (c) => c.currency === currency
            );
            if (!currencyItem) return null;
            return (
              <Text
                tag="p"
                type="p"
                className={`${styles.txt__info} common__txt`}
                variant="grey"
              >
                <strong key={currencyItem.currency}>
                  {currencyItem.balance} {currencyItem.currency}{" "}
                </strong>
                available to withdraw
              </Text>
            );
          }}
        </Form.Item>

        <div className={styles.withdrawal__info}>
          {/*  {value === 1 && (
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
          )} */}
          <Form.Item dependencies={["fee", "currency"]} noStyle>
            {({ getFieldValue }) => {
              const fee = getFieldValue("fee");
              const currency = getFieldValue("currency");
              if (!fee) return null;
              return (
                <Text tag="p" type="p" variant="grey">
                  Estimated transaction fee: {fee} {currency}
                </Text>
              );
            }}
          </Form.Item>
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
