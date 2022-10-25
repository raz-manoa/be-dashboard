import Icon from "@/Components/General/Icon/Icon";
import styles from "./FormInputIcon.module.scss";
import React, { FormEvent, useState } from "react";
import Form, { Rule } from "antd/es/form";
import Input, { InputProps } from "antd/es/input";
import { FormItemInputProps } from "antd/es/form/FormItemInput";
interface FormInputIconProps extends InputProps {
  placeholder: string;
  icon: string;
  className?: string;
  rules?: Rule[];
}

export default function FormInputIcon(props: FormInputIconProps) {
  const { placeholder, icon, rules, className = "", ...rest } = props;
  const [isFocus, setIsFocus] = useState(false);
  const [currentValue, setCurrentValue] = useState("");

  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setCurrentValue(target.value);
  };

  return (
    <Form.Item
      rules={rules}
      className={`${styles.field} ${isFocus ? "focus" : ""} ${
        currentValue !== "" ? "active" : ""
      } ${className}`}
    >
      <Icon icon={icon} />
      <Input
        placeholder={placeholder}
        {...rest}
        onInput={handleChange}
        onFocus={handleFocus}
        onBlur={handleFocus}
      />
    </Form.Item>
  );
}
