import Icon from "@/Components/General/Icon/Icon";
import DatePicker, { RangePickerProps } from "antd/es/date-picker";
import Form from "antd/es/form";
import { SelectProps } from "antd/es/select";
import styles from "./FormDatePicker.module.scss";
import React, { useEffect, useState } from "react";
import Text from "@/Components/General/Text/Text";
import { useTransactionsPageContext } from "@/Pages/AppPage/TransactionPage/TransactionsPageContext";

interface FormDatePickerProps {
  className?: string;
  onChange?: RangePickerProps["onChange"];
}

export default function FormDatePicker(props: FormDatePickerProps) {
  const { RangePicker } = DatePicker;
  const { className, onChange } = props;
  const { form, setForm } = useTransactionsPageContext();
  console.log(form, setForm);
  const [open, setOpen] = useState<boolean>(false);
  const [hasDate, setHasDate] = useState<boolean>(false);

  const handleOpenCalendar = () => {
    setOpen(!open);
  };

  const handleChange = async (values: any, dateString: [string, string]) => {
    onChange && onChange(values, dateString);
    if (setForm) {
      console.log('set form');
      await setForm({
        dateFrom: dateString[0],
        dateTo: dateString[1],
        type: form?.type,
        name: form?.name
      })
      console.log(form);
    }
    setHasDate(true);
  };

  useEffect(() => {
    window.addEventListener("click", function (this: Window, ev: MouseEvent) {
      const target = ev.target as HTMLDivElement;
      if (
        !target.closest(`.${styles.datepicker}`) &&
        !target.closest("[class*='ant-picker']")
      ) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <Form.Item className={`${styles.datepicker} ${className}`}>
      <button
        className={`${styles.datepickerTrigger} ${
          open
            ? styles.datepickerTriggerActive
            : hasDate
            ? styles.datepickerTriggerFilled
            : ""
        }`}
        onClick={handleOpenCalendar}
      >
        <Icon icon="calendar" color={open || hasDate ? "#fff" : "#90a4ae"} />
        <Text variant={open || hasDate ? "white" : "grey-light"}>
          Date Selection
        </Text>
      </button>
      <RangePicker
        open={open}
        autoFocus={true}
        onChange={handleChange}
        suffixIcon=""
      />
    </Form.Item>
  );
}
