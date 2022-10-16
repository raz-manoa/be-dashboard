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
  inputStyle?: React.CSSProperties;
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
    style,
    inputStyle,
    ...rest
  } = props;
  return (
    <Form.Item
      // name={name}
      style={style}
      className={`${styles.input} ${className}`}
      rules={rules}
    >
      <Input
        size="large"
        placeholder={placeholder}
        prefix={icon && <Icon icon={icon} />}
        type={type}
        name={name}
        className={`${styles.input__content} ${
          styles[`input__content--${color}`]
        }`}
        style={inputStyle}
        {...rest}
      />
    </Form.Item>
  );
}
