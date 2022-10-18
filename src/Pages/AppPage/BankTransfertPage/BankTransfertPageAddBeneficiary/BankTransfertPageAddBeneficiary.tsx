import React, { useRef, useState } from "react";
import styles from "./BankTransfertPageAddBeneficiary.module.scss";
import BankTransfertPageAmount from "./BankTransfertPageAmount/BankTransfertPageAmount";
import BankTransfertPageRecipient from "./BankTransfertPageRecipient/BankTransfertPageRecipient";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import BankTransfertPageDashboardModal from "./BankTransfertPageDashboardModal/BankTransfertPageDashboardModal";

export default function BankTransfertPageAddBeneficiary() {
  useSetAppLayoutTitle("Bank Transfert");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.card__container} ref={cardRef}>
      <BankTransfertPageAmount overlay={isModalOpen} />
      <BankTransfertPageRecipient
        overlay={isModalOpen}
        onAddBeneficiary={handleShowModal}
      />
      <BankTransfertPageDashboardModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        getContainer={() => cardRef.current || document.body}
      />
    </div>
  );
}
