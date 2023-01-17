import React, { useState } from "react";
import Input, { InputProps } from "antd/lib/input";
import styles from "./FormInput.module.scss";
import Form, { FormItemProps, Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
import Icon from "@/Components/General/Icon/Icon";
import { clsx } from "clsx";
export interface FormInputProps extends Omit<InputProps, "name"> {
  icon?: string;
  label?: string;
  color?: string;
  rules?: Rule[];
  inputStyle?: React.CSSProperties;
  name?: NamePath;
  dependencies?: FormItemProps["dependencies"];
  help?: FormItemProps["help"];
  hidden?: FormItemProps["hidden"];
  hideError?: boolean;
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
    dependencies,
    help,
    hideError,
    hidden,
    ...rest
  } = props;
  const [currentValue, setCurrentValue] = useState<string>("");
  const handleChange = (e: any) => {
    setCurrentValue(e.target.value);
  };
  return (
    <Form.Item
      style={style}
      className={clsx([
        styles.input,
        className,
        currentValue !== "" && styles.active,
        hideError && "hideError",
      ])}
    >
      <label>{label}</label>
      <Form.Item
        name={name}
        hidden={hidden}
        help={help}
        noStyle
        dependencies={dependencies}
        rules={rules}
      >
        <Input
          size="large"
          onChange={handleChange}
          placeholder={placeholder}
          prefix={icon && <Icon icon={icon} />}
          type={type}
          className={`${styles.input__content} ${
            styles[`input__content--${color}`]
          }`}
          style={inputStyle}
          {...rest}
        />
      </Form.Item>
    </Form.Item>
  );
}
