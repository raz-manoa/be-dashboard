import React from "react";
import styles from "./SavingPage.module.scss";
import SavingPageOffering from "./SavingPageOffering/SavingPageOffering";

const SavingsPage = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-5">
        <SavingPageOffering />
      </div>
      <div></div>
    </section>
  );
};

export default SavingsPage;
