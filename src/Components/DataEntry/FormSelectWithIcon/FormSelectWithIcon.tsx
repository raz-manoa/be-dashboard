import Icon from "@/Components/General/Icon/Icon";
import Select, { SelectProps } from "antd/es/select";
import Form, { Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
import React, { useState } from "react";
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
  placeholder?: string;
}
export default function FormSelectWithIcon(props: FormSelectWithIconProps) {
  const {
    options = [],
    icon = "",
    rules,
    name,
    placeholder,
    className = "",
    ...rest
  } = props;
  const { Option } = Select;
  const [isFocus, setIsFocus] = useState(false);
  const [currentValue, setCurrentValue] = useState<string>("");

  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  const handleChange = (value: string) => {
    setCurrentValue(value);
  };

  return (
    <Form.Item
      rules={rules}
      name={name}
      className={`${styles.select} ${isFocus ? "focus" : ""} ${
        currentValue !== "" ? "active" : ""
      } ${className}`}
    >
      <Icon icon={icon} />
      <Select
        suffixIcon={<Icon icon="" />}
        placeholder={placeholder}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleFocus}
      >
        {options.map((o, index) => (
          <Option key={`o-${index}`} value={o.value} className={styles.option}>
            {o.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}
