import Card from "@/Components/Display/Card/Card";
import Text from "@/Components/General/Text/Text";
import styles from "./CryptoDepositPageItem.module.scss";
import React from "react";
import Button from "@/Components/General/Button/Button";
import QRCode from "react-qr-code";
import copy from "copy-to-clipboard";
interface CryptoDepositPageItemProps {
  title: string;
  sup: string;
  identity: string;
  logo: string;
  code: string;
  txt?: string;
}

export default function CryptoDepositPageItem(
  props: CryptoDepositPageItemProps
) {
  const { title, logo, sup, code, identity, txt } = props;
  const handleCopy = async () => {
      copy(identity);
  };
  return (
    <Card className={styles.card__crypto}>
      <Text type="h2" tag="h2" variant="black2" className={styles.title}>
        {title}
        <sup>{sup}</sup>
      </Text>
      <div className={styles.logo__container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <Text
          type="span"
          tag="span"
          variant="grey"
          size={20}
          className={styles.identity}
        >
          {identity}
        </Text>
      </div>
      <Button type="primary" className={styles.btn} onClick={handleCopy} active={true}>
        Copy Address
      </Button>
      <QRCode
        value={identity}
        size={256}
        viewBox={`0 0 256 256`}
        className={styles.QR_code}
      />
      <Text type="p" tag="p" className={styles.txt__footer} variant="grey">
        {txt}
      </Text>
    </Card>
  );
}
