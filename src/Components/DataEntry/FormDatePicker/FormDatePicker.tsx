import Icon from "@/Components/General/Icon/Icon";
import { DatePicker } from "antd";
import Form from "antd/es/form";
import { SelectProps } from "antd/es/select";
import styles from "./FormDatePicker.module.scss";
import React from "react";

interface FormDatePickerProps {
  className?: string;
}

export default function FormDatePicker(props: FormDatePickerProps) {
  const { RangePicker } = DatePicker;
  const { className } = props;

  return (
    <Form.Item className={`${styles.select} ${className}`}>
      <Icon icon="calendar" />
      {/* <DatePicker
        suffixIcon=""
        placeholder="Date Selection"
        className={styles.calendar}
      /> */}
      <RangePicker suffixIcon="" />
    </Form.Item>
  );
}
