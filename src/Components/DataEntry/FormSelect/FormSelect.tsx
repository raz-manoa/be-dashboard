import Icon from "@/Components/General/Icon/Icon";
import Form, { Rule } from "antd/es/form";
import styles from "./FormSelect.module.scss";
import { NamePath } from "antd/es/form/interface";
import Select, { SelectProps } from "antd/es/select";
import React from "react";
import FormInput from "../FormInput/FormInput";

interface FormSelectOption {
  label: string;
  value: string;
}

interface FormSelectProps extends SelectProps {
  options: FormSelectOption[];
  rules?: Rule[];
  name: NamePath;
  label?: string;
}

export default function FormSelect(props: FormSelectProps) {
  const { options, rules, name, label = "", ...rest } = props;
  const { Option } = Select;
  return (
    <Form.Item rules={rules} name={name} className={styles.select}>
      {label != "" && (
        <label htmlFor="" className={styles.label}>
          {label}
        </label>
      )}
      <Select
        suffixIcon={<Icon icon="chevron" />}
        {...rest}
        className={label != "" ? styles.select__item : ""}
      >
        {options.map((o, index) => (
          <Option value={o.value} key={`o-${index}`}>
            {o.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}
