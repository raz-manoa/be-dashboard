import Checkbox from "antd/es/checkbox";
import styles from "./FormCheckBox.module.scss";
import { ComponentProps } from "react";

type CheckboxProps = ComponentProps<typeof Checkbox>;
interface IFormCheckBoxProps extends CheckboxProps {}

const FormCheckBox = (props: IFormCheckBoxProps) => {
  // TODO: Using Form.Item for checkbox
  return <Checkbox {...props} className={styles.checkbox}></Checkbox>;
};

export default FormCheckBox;
