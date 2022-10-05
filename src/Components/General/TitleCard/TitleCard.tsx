import React, { ReactNode } from "react";
import Text from "../Text/Text";
interface TitleCardProps {
  children: ReactNode;
  title: string;
}

export default function TitleCard(props: TitleCardProps) {
  const { children, title } = props;
  return (
    <div className="card__title">
      <Text tag="h2" type="h2" variant="black">
        {title}
      </Text>
      {children}
    </div>
  );
}
