import Icon from "@/Components/General/Icon/Icon";
import Select, { SelectProps } from "antd/es/select";
import Form, { Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
import React from "react";
import styles from "./FormSelectWithIcon.module.scss";

interface SelectOption {
  label: string;
  value: string;
}

interface FormSelectWithIconProps extends SelectProps {
  options: SelectOption[];
  rules?: Rule[];
  name: NamePath;
  icon: string;
}
export default function FormSelectWithIcon(props: FormSelectWithIconProps) {
  const { options = [], icon = "", rules, name } = props;
  const { Option } = Select;
  return (
    <Form.Item rules={rules} name={name} className={styles.select}>
      <Icon icon={icon} />
      <Select suffixIcon={<Icon icon="" />}>
        {options.map((o, index) => (
          <Option key={`o-${index}`} value={o.value} className={styles.option}>
            {o.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}
