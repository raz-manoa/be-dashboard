import Icon from "@/Components/General/Icon/Icon";
import { DatePicker } from "antd";
import Form from "antd/es/form";
import { SelectProps } from "antd/es/select";
import styles from "./FormDatePicker.module.scss";
import React from "react";

interface FormDatePickerProps {}

export default function FormDatePicker(props: FormDatePickerProps) {
  // const { icon } = props;
  return (
    <Form.Item className={styles.select}>
      <Icon icon="calendar" />
      <DatePicker suffixIcon="" placeholder="Date Selection" />
    </Form.Item>
  );
}
