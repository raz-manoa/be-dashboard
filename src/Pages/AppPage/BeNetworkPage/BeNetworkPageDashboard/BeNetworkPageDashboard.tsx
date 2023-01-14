import { FormCustom } from "@/Components/DataEntry/FormCustom";
import Card from "@/Components/Display/Card/Card";
import Button from "@/Components/General/Button/Button";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import styles from "./BeNetworkPageDashboard.module.scss";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useNavigate } from "react-router-dom";
import Alert from "antd/es/alert";
import { useEffect, useMemo, useState } from "react";
import { BeNetworkFormType } from "../BeNetworkPageContext";
import companyDataEndpoint, {
  AccountsResponse,
} from "@/Api/endpoints/companyData.endpoint";
import { FormSelectProps } from "@/Components/DataEntry/FormSelect/FormSelect";

const BeNetworkPageDashboard = () => {
  useSetAppLayoutTitle("Be Network");
  const navigate = useNavigate();
  const [form] = useForm<BeNetworkFormType>();

  const [currentPhone, setCurrentPhone] = useState(false);
  const [currentBeId, setCurrentBeId] = useState(false);
  const [accounts, setAccounts] = useState<AccountsResponse[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<AccountsResponse>();

  const fetchAccounts = async () => {
    const accountResponse = await companyDataEndpoint.getMyAccounts();
    if (accountResponse) {
      setAccounts(accountResponse);
      if (accountResponse[0] && !selectedAccount) {
        form.setFieldValue("currency", accountResponse[0].currency);
        setSelectedAccount(accountResponse[0]);
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
    if (response) {
      // validated if success !== false
      return response.success !== false;
    }
    return false;
  };

  useEffect(() => {
    fetchAccounts();
  }, []);
  const handleCurrencyChange: FormSelectProps<AccountsResponse>["onChange"] = (
    value,
    option
  ) => {
    if (!Array.isArray(option)) {
      setSelectedAccount(option.data);
    }
  };

  const handleContinue = async (e: any) => {
    e.preventDefault();
    try {
      const formData = await form.validateFields();

      navigate("review");
    } catch (error) {
      console.log(error);
    }
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
                {
                  validator: (rule, value, callback) => {
                    const data = parseFloat(value) || 0;
                    if (selectedAccount && data > selectedAccount.balance) {
                      callback("The amount is not available");
                    }
                    callback();
                  },
                },

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
              onChange={handleCurrencyChange}
            />
          </div>
          <div className="common__txt">
            <Text type="p" tag="p" variant="grey">
              <strong>
                {selectedAccount
                  ? `${selectedAccount.balance} ${selectedAccount.currency}`
                  : 0}
              </strong>{" "}
              available to transfer
            </Text>
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
              onChange={setCurrentPhone}
            />
            <FormCustom.Input
              name="phone"
              placeholder="Mobile number"
              color="grey"
              type="text"
              className={styles.input__field}
              dependencies={["withPhone"]}
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
              onChange={setCurrentBeId}
            />
            <FormCustom.Input
              name="beid"
              placeholder="BE ID"
              color="grey"
              type="text"
              className={styles.input__field}
              dependencies={["withBeid"]}
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
          <Alert message="The BE ID entered is incorrect." type="error" />

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
