import { useRef, useState } from "react";
import styles from "./BankTransferPageAddBeneficiary.module.scss";
import BankTransfertPageAmount from "./BankTransfertPageAmount/BankTransfertPageAmount";
import BankTransferPageRecipient from "./BankTransferPageRecipient/BankTransferPageRecipient";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import BankTransferPageDashboardModal from "./BankTransferPageDashboardModal/BankTransferPageDashboardModal";
import { useNavigate } from "react-router-dom";

export default function BankTransferPageAddBeneficiary() {
  useSetAppLayoutTitle("Bank Transfer");

  const navigate = useNavigate();

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
  const handleContinue = () => {
    navigate("/app/bank-transfer/review");
  };

  return (
    <div className={styles.card__container} ref={cardRef}>
      <BankTransfertPageAmount overlay={isModalOpen} />
      <BankTransferPageRecipient
        overlay={isModalOpen}
        onAddBeneficiary={handleShowModal}
        onContinue={handleContinue}
      />
      <BankTransferPageDashboardModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        getContainer={() => cardRef.current || document.body}
      />
    </div>
  );
}
