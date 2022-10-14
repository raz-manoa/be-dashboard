import Form, { Rule } from "antd/es/form";
import TextArea from "antd/lib/input/TextArea";
import styles from "./FormTextArea.module.scss";
import React from "react";
import { NamePath } from "antd/es/form/interface";
interface FormTextAreaProps {
  label: string;
  placeholder?: string;
  className?: string;
  option?: string;
  name: NamePath;
  rules?: Rule[];
}

export default function FormTextArea(props: FormTextAreaProps) {
  const { label, placeholder, className, option, name, rules } = props;
  return (
    <Form.Item
      name={name}
      className={`${styles.textarea__container} ${className}`}
      rules={rules}
    >
      <div className={styles.textarea__label}>
        <label htmlFor="">{label}</label>
        {option && <span>({option})</span>}
      </div>
      <TextArea
        rows={4}
        placeholder={placeholder}
        maxLength={6}
        className={styles.textarea}
      />
    </Form.Item>
  );
}