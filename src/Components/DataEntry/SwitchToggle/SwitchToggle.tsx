import Switch, { SwitchProps } from "antd/es/switch";
import styles from "./SwitchToggle.module.scss";
import React from "react";
import Text from "@/Components/General/Text/Text";
import Form, { Rule } from "antd/es/form";
import { NamePath } from "antd/lib/form/interface";
interface SwitchToggleProps extends SwitchProps {
  label: string;
  className?: string;
  rules?: Rule[];
  name: NamePath;
}

export default function SwitchToggle(props: SwitchToggleProps) {
  const { label, className, rules, name, ...rest } = props;
  return (
    <Form.Item className={`${styles.switch} ${className}`}>
      <Form.Item rules={rules} name={name} valuePropName="checked" noStyle>
        <Switch {...rest} />
      </Form.Item>
      <Text tag="label" type="p" variant="grey">
        {label}
      </Text>
    </Form.Item>
  );
}
