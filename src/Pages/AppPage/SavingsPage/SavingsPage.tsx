import React from "react";
import styles from "./SavingPage.module.scss";
import SavingPageAdd from "./SavingPageAdd/SavingPageAdd";
import SavingPageOffering from "./SavingPageOffering/SavingPageOffering";
import SavingPageTable from "./SavingPageTable/SavingPageTable";

const SavingsPage = () => {
  return (
    <section className="mt-6">
      <div className="grid grid-cols-2 gap-5">
        <SavingPageOffering />
        <SavingPageAdd />
      </div>
      <div>
        <SavingPageTable />
      </div>
    </section>
  );
};

export default SavingsPage;
