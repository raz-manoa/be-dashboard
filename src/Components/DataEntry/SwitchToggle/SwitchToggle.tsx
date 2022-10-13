import { Switch } from "antd";
import styles from "./SwitchToggle.module.scss";
import React from "react";
import Text from "@/Components/General/Text/Text";
interface SwitchToggleProps {
  label: string;
  className?: string;
}

export default function SwitchToggle(props: SwitchToggleProps) {
  const { label, className } = props;
  return (
    <div className={`${styles.switch} ${className}`}>
      <Switch defaultChecked />
      <Text tag="p" type="p" variant="grey">
        {label}
      </Text>
    </div>
  );
}
