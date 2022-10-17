import React from "react";
import styles from "./ButtonWithIcon.module.scss";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
interface ButtonWithIconProps {
  icon?: string;
  label: string;
  className?: string;
}

export default function ButtonWithIcon(props: ButtonWithIconProps) {
  const { icon, label, className } = props;

  return (
    <button className={`${styles.button} ${className}`}>
      {icon && <Icon icon={icon} color="grey" className={styles.icon} />}
      <Text tag="span" type="span" size={14} variant="grey">
        {label}
      </Text>
    </button>
  );
}
