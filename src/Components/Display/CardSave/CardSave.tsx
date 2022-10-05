import Text from "@/Components/General/Text/Text";
import React, { ReactNode } from "react";
import Canada from "../../../Assets/Flags/canada.svg";
import Card from "../Card/Card";
import styles from "./CardSave.module.scss";

interface CardSaveProps {
  src: string;
  money: string;
  principal: string;
  interest: string;
}

export default function CardSave(props: CardSaveProps) {
  const { src, money, principal, interest } = props;
  return (
    <Card className={styles.cardSave}>
      <div className={styles.cardSave__flag}>
        <img src={src} alt="flag" />
        <Text
          tag="h2"
          type="h2"
          variant="grey"
          className={styles.cardSave__flagName}
        >
          {money}
        </Text>
      </div>

      <div className={styles.cardSave__info}>
        <Text
          tag="h3"
          type="h3"
          variant="grey"
          className={styles.cardSave__infoTitle}
        >
          Principal
        </Text>
        <Text
          tag="p"
          variant="grey"
          size={23}
          className={styles.cardSave__infoNbr}
        >
          {principal}
        </Text>
      </div>
      <div className={styles.cardSave__info}>
        <Text
          tag="h3"
          type="h3"
          variant="grey"
          className={styles.cardSave__infoTitle}
        >
          Interest
        </Text>
        <Text
          tag="p"
          variant="red"
          size={23}
          className={styles.cardSave__infoNbr}
        >
          {interest}
        </Text>
      </div>
    </Card>
  );
}
