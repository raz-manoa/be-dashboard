import Text from "@/Components/General/Text/Text";
import React, { useState } from "react";
import styles from "./DashboardPage.module.scss";

const paires = ["All", "USD", "EUR", "CHF", "GBP"];

export default function DashboardPageTransaction() {
  const [currentFilter, setCurrentFilter] = useState<number>(0);

  const handleFilter = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setCurrentFilter(index);
    // Ajax filter
  };

  return (
    <div className={`${styles.dashboardTransaction}`}>
      <Text tag="h2" type="h2" weight={600}>
        Recent Transactions
      </Text>
      <div>
        <div className={styles.dashboardTransactionFilter}>
          {paires.map((p, index) => (
            <a
              href=""
              title=""
              className={currentFilter === index ? styles.active : ""}
              key={`p-${index}`}
              onClick={(e) => handleFilter(e, index)}
            >
              <Text
                tag="span"
                variant={currentFilter === index ? "grey" : "grey-light"}
                weight={currentFilter === index ? 600 : 400}
              >
                {p}
              </Text>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
