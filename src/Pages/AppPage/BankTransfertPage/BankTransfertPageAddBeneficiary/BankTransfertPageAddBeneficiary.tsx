import { useRef, useState } from "react";
import styles from "./BankTransfertPageAddBeneficiary.module.scss";
import BankTransfertPageAmount from "./BankTransfertPageAmount/BankTransfertPageAmount";
import BankTransfertPageRecipient from "./BankTransfertPageRecipient/BankTransfertPageRecipient";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import BankTransfertPageDashboardModal from "./BankTransfertPageDashboardModal/BankTransfertPageDashboardModal";
import { useNavigate } from "react-router-dom";

export default function BankTransfertPageAddBeneficiary() {
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
      <BankTransfertPageRecipient
        overlay={isModalOpen}
        onAddBeneficiary={handleShowModal}
        onContinue={handleContinue}
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
