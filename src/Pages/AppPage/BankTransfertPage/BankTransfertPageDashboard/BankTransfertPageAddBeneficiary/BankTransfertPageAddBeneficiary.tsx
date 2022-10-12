import React from "react";
import styles from "./BankTransfertPageAddBeneficiary.module.scss";
import BankTransfertPageAmount from "../BankTransfertPageAmount/BankTransfertPageAmount";
import BankTransfertPageRecipient from "../BankTransfertPageRecipient/BankTransfertPageRecipient";

export default function BankTransfertPageAddBeneficiary() {
  return (
    <div className={styles.card__container}>
      <BankTransfertPageAmount />
      <BankTransfertPageRecipient />
    </div>
  );
}
