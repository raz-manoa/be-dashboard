import { ReactNode } from "react";
import Input from "antd/lib/input";
import { UserOutlined } from "@ant-design/icons";
import "./Input.scss";
interface InputFieldProps {
  placeholder?: string;
  type: string;
  icon?: ReactNode;
}

export default function InputField(props: InputFieldProps) {
  const { placeholder, type, icon } = props;
  return (
    <>
      <Input
        size="large"
        placeholder={placeholder}
        prefix={<UserOutlined />}
        type={type}
      />
    </>
  );
}
