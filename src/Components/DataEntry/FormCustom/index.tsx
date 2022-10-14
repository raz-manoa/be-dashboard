import Form, { FormProps } from "antd/lib/form";
import FormInput from "../FormInput/FormInput";
import FormSelect from "../FormSelect/FormSelect";
import FormSelectWithIcon from "../FormSelectWithIcon/FormSelectWithIcon";
import FormTextArea from "../FormTextArea/FormTextArea";
import FormCheckBox from "../FormCheckBox/FormCheckBox";

interface FormCustomProps<Values = any> extends FormProps<Values> {}

export function FormCustom<T = any>(props: FormCustomProps<T>) {
  // @ts-ignore
  return <Form<T> {...props} />;
}

FormCustom.Input = FormInput;
FormCustom.Select = FormSelect;
FormCustom.SelectIcon = FormSelectWithIcon;
FormCustom.TextArea = FormTextArea;
FormCustom.Checkbox = FormCheckBox;
