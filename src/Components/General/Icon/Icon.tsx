import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "~/Assets/Icomoon/selection.json";

interface IconProps {
  icon: string;
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Icon(props: IconProps) {
  const { size = 17 } = props;
  return <IcomoonReact size={size} iconSet={iconSet} {...props} />;
}
