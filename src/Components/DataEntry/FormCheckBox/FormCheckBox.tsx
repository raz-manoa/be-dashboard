import Checkbox, { CheckboxProps } from "antd/es/checkbox";
import styles from "./FormCheckBox.module.scss";
import { ComponentProps } from "react";
import Form, { Rule } from "antd/es/form";

interface IFormCheckBoxProps extends CheckboxProps {
  rules?: Rule[];
}

const FormCheckBox = (props: IFormCheckBoxProps) => {
  const { name, className = "", rules, children, checked } = props;
  return (
    <Form.Item
      className={`${styles.input} ${className}`}
      name={name}
      rules={rules}
    >
      <Checkbox {...props} checked={checked} className={styles.checkbox}>
        {children}
      </Checkbox>
    </Form.Item>
  );
};

export default FormCheckBox;
