import React from "react";
import Input, { InputProps } from "antd/lib/input";
import { UserOutlined } from "@ant-design/icons";
import styles from "./FormInput.module.scss";
import Form, { Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
import Icon from "@/Components/General/Icon/Icon";
interface FormInputProps extends InputProps {
  icon?: string;
  label?: string;
  color?: string;
  rules?: Rule[];
}

export default function FormInput(props: FormInputProps) {
  const {
    placeholder,
    type = "text",
    icon,
    label,
    color = "red",
    name,
    rules,
    className = "",
    ...rest
  } = props;
  return (
    <Form.Item className={`${styles.input} ${className}`} rules={rules}>
      <label htmlFor="" className={styles.label}>
        {label}
      </label>
      <Input
        size="large"
        placeholder={placeholder}
        prefix={icon && <Icon icon={icon} />}
        type={type}
        name={name}
        className={`${styles.input__content} ${
          styles[`input__content--${color}`]
        }`}
        {...rest}
      />
    </Form.Item>
  );
}
