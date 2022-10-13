import React from "react";
import styles from "./BankTransfertPageAddBeneficiary.module.scss";
import BankTransfertPageAmount from "../BankTransfertPageAmount/BankTransfertPageAmount";
import BankTransfertPageRecipient from "../BankTransfertPageRecipient/BankTransfertPageRecipient";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";

export default function BankTransfertPageAddBeneficiary() {
  useSetAppLayoutTitle("Bank Transfert");
  return (
    <div className={styles.card__container}>
      <BankTransfertPageAmount />
      <BankTransfertPageRecipient />
    </div>
  );
}
