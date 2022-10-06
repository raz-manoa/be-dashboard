import React, { ReactNode } from "react";
import Input from "antd/lib/input";
import { UserOutlined } from "@ant-design/icons";
import styles from "./FormInput.module.scss";
interface InputFieldProps {
  placeholder?: string;
  type: string;
  icon?: ReactNode;
  label?: string;
  color?: string;
}

export default function InputField(props: InputFieldProps) {
  const { placeholder, type, icon, label, color = "red" } = props;
  return (
    <div className={`${styles.input}`}>
      <label htmlFor="" className={styles.label}>
        {label}
      </label>
      <Input
        size="large"
        placeholder={placeholder}
        prefix={icon}
        type={type}
        className={`${styles.input__content} ${
          styles[`input__content--${color}`]
        }`}
      />
    </div>
  );
}
