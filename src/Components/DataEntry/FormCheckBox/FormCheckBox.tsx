import { Checkbox } from "antd";
import "./FormCheckBox.module.scss";
import { ComponentProps } from "react";

type CheckboxProps = ComponentProps<typeof Checkbox>;
interface IFormCheckBoxProps extends CheckboxProps {}

const FormCheckBox = (props: IFormCheckBoxProps) => {
  // TODO: Using Form.Item for checkbox
  return <Checkbox {...props}></Checkbox>;
};

export default FormCheckBox;
