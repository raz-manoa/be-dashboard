import Checkbox, { CheckboxProps } from "antd/es/checkbox";
import styles from "./FormCheckBox.module.scss";
import { ComponentProps } from "react";
import Form, { Rule } from "antd/es/form";

interface IFormCheckBoxProps extends CheckboxProps {
  rules?: Rule[];
}

const FormCheckBox = (props: IFormCheckBoxProps) => {
  const { name, className = "", rules, ...restProps } = props;
  return (
    <Form.Item className={`${styles.input} ${className}`} rules={rules}>
      <Checkbox {...restProps} className={styles.checkbox} />
    </Form.Item>
  );
};

export default FormCheckBox;
