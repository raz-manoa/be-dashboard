import React, { Children, ReactNode } from "react";
import { Link } from "react-router-dom";
import Text from "../../General/Text/Text";
import styles from "./TitleCard.module.scss";
interface TitleCardProps {
  title: string;
  subtitle: string;
  link?: {
    label: string;
    url: string;
  };
  children?: ReactNode;
}

export default function TitleCard(props: TitleCardProps) {
  const { title, subtitle, link = "", children } = props;
  return (
    <div className={styles.card__title_wrap}>
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
            {subtitle}
          </Text>
          {link != "" && (
            <Text
              tag="span"
              type="span"
              variant="red"
              className={styles.link}
              size={14}
            >
              <Link to={link.url}>{link.label}</Link>
            </Text>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
