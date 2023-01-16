import Form, { Rule } from "antd/es/form";
import TextArea from "antd/lib/input/TextArea";
import styles from "./FormTextArea.module.scss";
import React, { ChangeEventHandler, useState } from "react";
import { NamePath } from "antd/es/form/interface";
import { TextAreaProps } from "antd/es/input";
interface FormTextAreaProps {
  label: string;
  placeholder?: string;
  className?: string;
  option?: string;
  name: NamePath;
  rules?: Rule[];
}

export default function FormTextArea(props: FormTextAreaProps) {
  const { label, placeholder, className, option, rules, name } = props;
  const [currentValue, setCurrentValue] = useState<string>("");
  const handleChange = (e: any) => {
    setCurrentValue(e.target.value);
  };

  return (
    <Form.Item
      className={`${styles.textarea__container} ${className} ${
        currentValue !== "" ? `${styles.active}` : ""
      }`}
    >
      <div className={styles.textarea__label}>
        <label htmlFor="">{label}</label>
        {option && <span>({option})</span>}
      </div>
      <Form.Item name={name} rules={rules} noStyle>
        <TextArea
          rows={4}
          placeholder={placeholder}
          onChange={handleChange}
          className={` ${styles.textarea} `}
        />
      </Form.Item>
    </Form.Item>
  );
}
