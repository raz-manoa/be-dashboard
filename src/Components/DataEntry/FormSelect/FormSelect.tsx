import Icon from "@/Components/General/Icon/Icon";
import Form, { Rule } from "antd/es/form";
import styles from "./FormSelect.module.scss";
import { NamePath } from "antd/es/form/interface";
import Select, { SelectProps } from "antd/es/select";
import { useState } from "react";
import clsx from "clsx";

export interface FormSelectOption<T extends object = object> {
  label: string;
  value: string;
  optionDisable?: boolean;
  data?: T;
}

export interface FormSelectProps<T extends object = object>
  extends SelectProps<any, FormSelectOption<T>> {
  options: FormSelectOption<T>[];
  rules?: Rule[];
  name: NamePath;
  label?: string;
  className?: string;
}

export default function FormSelect<T extends object = object>(
  props: FormSelectProps<T>
) {
  const {
    options,
    rules,
    name,
    className = "",
    label,
    onChange,
    ...rest
  } = props;
  const { Option } = Select;

  const [currentValue, setCurrentValue] = useState("");

  return (
    <Form.Item
      className={`${styles.select} ${className} ${
        currentValue !== "" ? styles.selectActive : ""
      }`}
    >
      {!!label && (
        <label htmlFor="" className={styles.label}>
          {label}
        </label>
      )}
      <Form.Item noStyle rules={rules} name={name}>
        <Select
          suffixIcon={<Icon icon="chevron" />}
          {...rest}
          className={!!label ? styles.select__item : ""}
          onChange={(e, option) => {
            setCurrentValue(e);
            onChange && onChange(e, option);
          }}
        >
          {options.map((o, index) => (
            <Option
              value={o.value}
              key={`o-${index}`}
              className={clsx(styles.option, {
                [styles.option__disabled]: o.optionDisable,
              })}
              disabled={o.optionDisable}
            >
              {o.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form.Item>
  );
}
