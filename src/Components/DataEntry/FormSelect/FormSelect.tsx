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
}

export default function FormSelect(props: FormSelectProps) {
  const { options, rules, name, ...rest } = props;
  const { Option } = Select;
  return (
    <Form.Item rules={rules} name={name} className={styles.select}>
      <Select suffixIcon={<Icon icon="chevron" />} {...rest}>
        {options.map((o, index) => (
          <Option value={o.value} key={`o-${index}`}>
            {o.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}
