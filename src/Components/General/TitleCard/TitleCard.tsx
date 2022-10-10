import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Text from "../Text/Text";
import styles from "./TitleCard.module.scss";
interface TitleCardProps {
  title: string;
  label: string;
  link?: string;
}

export default function TitleCard(props: TitleCardProps) {
  const { title, label, link = "" } = props;
  return (
    <div className={styles.card__title}>
      <Text tag="h2" type="h2" variant="black">
        {title}
      </Text>
      <div className={styles.card__nav}>
        <Text
          tag="span"
          type="span"
          variant="grey"
          className={styles.balance}
          size={14}
        >
          {label}
        </Text>
        {link != "" && (
          <Text
            tag="span"
            type="span"
            variant="red"
            className={styles.link}
            size={14}
          >
            <Link to="/">{link}</Link>
          </Text>
        )}
      </div>
    </div>
  );
}
