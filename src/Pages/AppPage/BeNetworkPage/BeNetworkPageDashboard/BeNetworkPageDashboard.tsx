import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import Form from "antd/es/form";

import styles from "./BeNetworkPageDashboard.module.scss";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import Alert from "antd/es/alert";
import { useEffect, useMemo, useState } from "react";
import {
  BeNetworkFormType,
  useBeNetworkPageContext,
} from "../BeNetworkPageContext";
import companyDataEndpoint, {
  AccountsResponse,
} from "@/Api/endpoints/companyData.endpoint";
import { FormSelectProps } from "@/Components/DataEntry/FormSelect/FormSelect";
import { ITransactionFree } from "@/Components/Display/CardAmount/CardAmount";

const BeNetworkPageDashboard = () => {
  useSetAppLayoutTitle("Be Network");
  const navigate = useNavigate();
  const [form] = useForm<BeNetworkFormType>();
  const { setForm } = useBeNetworkPageContext();
  const [currentPhone, setCurrentPhone] = useState(false);
  const [currentBeId, setCurrentBeId] = useState(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);
  const [transactionFee, setTransactionFee] = useState<ITransactionFree>();
  const [recipient, setRecipient] = useState<{
    id: string;
    identity: string;
  }>();

  const fetchAccounts = async () => {
    const accountResponse = await companyDataEndpoint.getMyAccounts();
    if (accountResponse) {
      setAccounts(accountResponse);
      if (accountResponse[0]) {
        form.setFieldValue("currency", accountResponse[0].currency);
      }
    }
  };

  const checkIdentity = async (data: {
    type: "phone" | "beid";
    value: string;
  }): Promise<boolean> => {
    // TODO: check
    const response = await companyDataEndpoint.fetchIdentity(
      data.type,
      data.value
    );
    // validated if success !== false
    if (response && response.success !== false) {
      setRecipient({
        identity: response.identity,
        id: response.id,
      });

      return true;
    }
    return false;
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleContinue = async (e: any) => {
    e.preventDefault();
    const formData = await form.validateFields();
    if (setForm) {
      setForm({
        ...formData,
        transactionFee,
        recipient,
      });
    }
    navigate("review");
  };

  return (
    <Card className="common__card">
      <Text tag="h2" type="h2" variant="black2">
        Transfer Amount
      </Text>
      {!!accounts && !!accounts.length && (
        <FormCustom form={form}>
          <div className={`common__field-wrap`}>
            <FormCustom.Input
              name="amount"
              dependencies={["currency"]}
              placeholder="0.00"
              label="Leaving Account:"
              color="grey"
              type="number"
              className="common__field"
              rules={[
                {
                  required: true,
                  message: "Amount is required",
                },
                ({ getFieldValue }) => ({
                  validator: (rule, value, callback) => {
                    const data = parseFloat(value) || 0;
                    const selected = getFieldValue("currency");
                    const selectedItem = accounts.find(
                      (account) => account.currency === selected
                    );

                    if (selectedItem && data > selectedItem.balance) {
                      callback("The amount is not available");
                    }
                    callback();
                  },
                }),
                {
                  min: 0,
                  message: "Amount is required",
                },
              ]}
            />
            <FormCustom.Select
              name="currency"
              placeholder="USD"
              options={accounts.map((s) => ({
                label: s.currency,
                value: s.currency,
                data: s,
              }))}
              rules={[
                {
                  required: true,
                  message: "Current is required",
                },
              ]}
              optionLabelProp="value"
              dropdownMatchSelectWidth={false}
            />
          </div>
          <div className="common__txt">
            <Form.Item dependencies={["currency"]}>
              {({ getFieldValue }) => {
                const selected = getFieldValue("currency");
                const selectedItem = accounts.find(
                  (account) => account.currency === selected
                );
                return (
                  <Text type="p" tag="p" variant="grey">
                    <strong>
                      {selectedItem
                        ? `${selectedItem.balance} ${selectedItem.currency}`
                        : 0}
                    </strong>{" "}
                    available to transfer
                  </Text>
                );
              }}
            </Form.Item>

            {/* <Text type="p" tag="p" variant="grey">
              Transaction fee <strong>0 USD</strong>
            </Text> */}
            {/* <Text type="p" tag="p" variant="grey">
              1 USD equals 1 USD
            </Text> */}
          </div>
          <div className={styles.switch__field}>
            <FormCustom.Switch
              label="By Phone Number"
              className={styles.switch__toggle}
              name="withPhone"
              onChange={(value) => {
                if (!!value) {
                  form.setFields([
                    {
                      name: "withBeid",
                      value: false,
                    },
                    {
                      name: "beid",
                      value: null,
                    },
                  ]);
                  setCurrentBeId(false);
                }
                setCurrentPhone(value);
              }}
            />
            <FormCustom.Input
              name="phone"
              placeholder="Mobile number"
              color="grey"
              type="text"
              className={styles.input__field}
              dependencies={["withPhone", "withBeid"]}
              rules={[
                ({ getFieldValue }) => ({
                  validator: (rule, value, callback) => {
                    const isWithPhone: boolean = getFieldValue(["withPhone"]);

                    if (isWithPhone) {
                      const data = value;
                      if (!data) {
                        callback("Phone number is required");
                      } else {
                        checkIdentity({ type: "phone", value: data })
                          .then((res) => {
                            if (!res) {
                              callback(
                                "The Mobile phone entered is incorrect."
                              );
                            } else {
                              callback();
                            }
                          })
                          .catch(() => {
                            callback("Error on Mobile phone validation.");
                          });
                      }
                    } else {
                      callback();
                    }
                  },
                }),
              ]}
              disabled={!currentPhone}
            />
          </div>
          <div className={styles.switch__field}>
            <FormCustom.Switch
              label="By BE ID"
              name="withBeid"
              className={styles.switch__toggle}
              onChange={(value) => {
                if (!!value) {
                  form.setFields([
                    {
                      name: "withPhone",
                      value: false,
                    },
                    {
                      name: "phone",
                      value: null,
                    },
                  ]);
                  setCurrentPhone(false);
                }
                setCurrentBeId(value);
              }}
            />
            <FormCustom.Input
              name="beid"
              placeholder="BE ID"
              color="grey"
              type="text"
              className={styles.input__field}
              dependencies={["withBeid", "withPhone"]}
              rules={[
                ({ getFieldValue }) => ({
                  validator: (rule, value, callback) => {
                    const isWithBeid: boolean = getFieldValue(["withBeid"]);

                    if (isWithBeid) {
                      const data = value;
                      if (!data) {
                        callback("BE ID is required.");
                      } else {
                        checkIdentity({ type: "beid", value: data })
                          .then((res) => {
                            if (!res) {
                              callback("The BE ID entered is incorrect.");
                            } else {
                              callback();
                            }
                          })
                          .catch(() => {
                            callback("Error on BE ID validation.");
                          });
                      }
                    } else {
                      callback();
                    }
                  },
                }),
              ]}
              disabled={!currentBeId}
            />
          </div>
          <FormCustom.TextArea
            name="message"
            className={styles.textarea}
            label="Message : "
            option="Optional"
            placeholder="Message..."
          />

          <Form.Item dependencies={["beid", "phone"]}>
            {({ getFieldError }) => {
              const beIdError = getFieldError("beid");
              const phoneError = getFieldError("phone");
              return (
                <>
                  {!!beIdError && !!beIdError.length && (
                    <Alert
                      message="The BE ID entered is incorrect."
                      type="error"
                    />
                  )}
                  {!!phoneError && !!phoneError.length && (
                    <Alert
                      message="The Phone number entered is incorrect."
                      type="error"
                    />
                  )}
                </>
              );
            }}
          </Form.Item>

          <Button
            type="primary"
            onClick={handleContinue}
            className="common__btn"
          >
            Continue
          </Button>
        </FormCustom>
      )}
    </Card>
  );
};

export default BeNetworkPageDashboard;
