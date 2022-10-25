import { Spin as SpinAntd } from "antd";
import React from "react";
import styles from "./Spin.module.scss";

const antIcon = (
  <span
    role="img"
    aria-label="loading"
    className="anticon anticon-loading anticon-spin ant-spin-dot"
    style={{ fontSize: 24, color: "#e02b59" }}
  >
    <svg
      viewBox="0 0 1024 1024"
      focusable="false"
      data-icon="loading"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
    </svg>
  </span>
);

interface SpinProps {
  variant?: "default" | "fill";
  icon?: "default" | "simple";
  style?: React.CSSProperties;
}
const Spin = (props: SpinProps) => {
  const { style, variant = "default", icon = "default" } = props;

  const spinElement = (
    <SpinAntd
      spinning={true}
      indicator={icon === "default" ? undefined : antIcon}
    />
  );

  if (variant === "fill") {
    return (
      <div className={styles.spin__fill} style={style}>
        {spinElement}
      </div>
    );
  }

  return spinElement;
};

export default Spin;
