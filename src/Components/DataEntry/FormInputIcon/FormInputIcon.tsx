import Icon from "@/Components/General/Icon/Icon";
import styles from "./FormInputIcon.module.scss";
import React from "react";
interface FormInputIconProps {
  placeholder: string;
  icon: string;
  className?: string;
}

export default function FormInputIcon(props: FormInputIconProps) {
  const { placeholder, icon, className = "" } = props;
  return (
    <div className={`${styles.field} ${className}`}>
      <Icon icon={icon} color="grey" />
      <input placeholder={placeholder} />
    </div>
  );
}
