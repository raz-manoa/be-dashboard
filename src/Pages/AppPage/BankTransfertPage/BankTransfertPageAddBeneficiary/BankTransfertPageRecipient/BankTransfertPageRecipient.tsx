import Card from "@/Components/Display/Card/Card";
import styles from "./BankTransfertPageRecipient.module.scss";
import React, { useEffect, useState } from "react";
import Text from "@/Components/General/Text/Text";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { useForm } from "antd/es/form/Form";
import Button from "@/Components/General/Button/Button";
import { useNavigate } from "react-router-dom";
import Icon from "@/Components/General/Icon/Icon";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";
import { useBankTransfertPageContext } from "../../BankTransfertPageContext";

// TODO: set recipient type
export interface IRecipientForm {
  name: string;
  city_or_district: string;
  bank_name: string;
  bic: string;
  iban: string;
  country: string;
  beneficiary_address: string;
  account_number: string;
  message: string;
}
interface BankTransfertPageRecipientProps {
  onAddBeneficiary?(e: React.MouseEvent): void;
  overlay: boolean;
  onContinue?: () => void;
}

export default function BankTransfertPageRecipient(
  props: BankTransfertPageRecipientProps
) {
  const { onAddBeneficiary, onContinue, overlay } = props;
  const [countries, setCountries] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const { setForm } = useBankTransfertPageContext();
  const navigate = useNavigate();
  const [form] = useForm<IRecipientForm>();

  const handleContinue = async () => {
    const formdata = await form.validateFields();
    if (setForm) {
      setForm((mainForm) =>
        mainForm ? { ...mainForm, beneficiary: formdata } : undefined
      );
    }
    onContinue && onContinue();
  };
  const handleFormChange = () => {
    const formData = form.getFieldsValue();
    if (setForm)
      setForm((mainForm) =>
        mainForm ? { ...mainForm, beneficiary: { ...formData } } : undefined
      );
  };

  useEffect(() => {
    companyDataEndpoint.country().then((data) => {
      setCountries(data.map(({ label, name: value }) => ({ value, label })));
    });
  }, []);

  return (
    <Card className={`${styles.card} modal ${overlay ? styles.overlay : ""}`}>
      <div className={`${styles.card__header} mb-6`}>
        <Text tag="h2" type="h2" variant="black2">
          Recipient
        </Text>
        <div className={styles.search}>
          <Icon icon="search" color="var(--red)" />
          <input
            type="text"
            placeholder="Search Beneficiary"
            style={{ width: 120 }}
          />
        </div>
      </div>
      <FormCustom
        form={form}
        onChange={handleFormChange}
        className={styles.card__field}
      >
        <div>
          <FormCustom.Input
            name="name"
            label="Beneficiary Name:"
            placeholder="Name"
            color="grey"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
          <FormCustom.Input
            name="city_or_district"
            label="Beneficiary City or District:"
            placeholder="City/District Name"
            color="grey"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
          <FormCustom.Input
            name="bank_name"
            label="Bank Name:"
            placeholder="Bank"
            color="grey"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
          <FormCustom.Input
            name="bic"
            label="BIC/SWIFT Code:"
            placeholder="Code"
            color="grey"
            type="text"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
          <FormCustom.Input
            name="iban"
            label="IBAN:"
            placeholder="Code"
            color="grey"
            type="text"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
        </div>
        <div>
          <FormCustom.Select
            className={styles.select}
            label="Beneficiary Country:"
            name="country"
            placeholder="Select"
            options={countries}
            onChange={handleFormChange}
          />
          <FormCustom.Input
            name="beneficiary_address"
            label="Beneficiary Address:"
            placeholder="Street Address"
            color="grey"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
          <FormCustom.Input
            name="account_number"
            label="Account Number:"
            placeholder="Number"
            color="grey"
            type="text"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
          <FormCustom.TextArea
            name="message"
            label="Message : "
            option="optional"
            placeholder="Message"
            className={styles.textarea}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          />
        </div>
        <div className={styles.btn__group}>
          <Button
            type="secondary"
            onClick={() => {
              form.validateFields();
              navigate({ pathname: "/app/bank-transfer" });
            }}
          >
            Back
          </Button>
          <Button type="default" onClick={onAddBeneficiary}>
            ADD BENEFICIARY
          </Button>
          <Button type="primary" onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </FormCustom>
    </Card>
  );
}
