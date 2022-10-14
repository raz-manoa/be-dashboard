import Card from "@/Components/Display/Card/Card";
import CardTransaction, {
  CardTransactionProps,
} from "@/Components/Display/CardTransaction/CardTransaction";
import Scrollbar from "@/Components/General/Scrollbar/Scrollbar";
import Text from "@/Components/General/Text/Text";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./DashboardPage.module.scss";

const paires = ["All", "USD", "EUR", "CHF", "GBP"];

const transaction: CardTransactionProps[] = [
  {
    company: "Company retreat",
    user: "Juan Perez",
    transaction: "+454.00 CHF",
    payment: "Electronic Fund Transfer",
    icon: "bank-transfert",
    date: "11/06/2022",
  },

  {
    user: "John Smith",
    transaction: "-330.00 GBP",
    payment: "  QR Code Payment",
    icon: "qr",
    date: "11/06/2022",
  },
  {
    user: "John Smith",
    transaction: "-24.00 USD",
    payment: "",
    icon: "saving-withdraw",
    date: "11/06/2022",
  },
  {
    company: "Company retreat",
    user: "Juan Perez",
    transaction: "+454.00 CHF",
    payment: "Savings Withdrawal",
    icon: "bank-transfert",
    date: "11/06/2022",
  },
  {
    company: "Coffee",
    user: "Russel Sprout",
    transaction: "-25.00 USD",
    payment: "Electronic Fund Transfer",
    icon: "qr",
    date: "11/06/2022",
  },
];

export default function DashboardPageTransaction() {
  const [currentFilter, setCurrentFilter] = useState<number>(0);
  const [offsetTop, setOffsetTop] = useState<number>(0);

  const psWrapRef = useRef<HTMLDivElement>(null);

  const handleFilter = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setCurrentFilter(index);
    // Ajax filter
  };

  useEffect(() => {
    if (psWrapRef.current) {
      const { top } = psWrapRef.current.getBoundingClientRect();
      setOffsetTop(top + 42);
    }
  }, []);

  return (
    <div className={`${styles.dashboardTransaction}`}>
      <div className={styles.dashbaordTransactionHead}>
        <Text tag="h2" type="h2" weight={600}>
          Recent Transactions
        </Text>
        <div className="flex justify-between">
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
          <Link to="" title="">
            <Text tag="span" variant="red" weight={500} size={14}>
              View All
            </Text>
          </Link>
        </div>
      </div>
      <div
        style={{ "--offset-top": `${offsetTop}px` } as React.CSSProperties}
        ref={psWrapRef}
        className="mt-4"
      >
        <Card className={styles.transactionCard}>
          <Scrollbar>
            <div>
              {transaction.map((t, index) => (
                <CardTransaction
                  date={t.date}
                  icon={t.icon}
                  payment={t.payment}
                  transaction={t.transaction}
                  user={t.user}
                  company={t.company}
                  key={`t-${index}`}
                />
              ))}
            </div>
          </Scrollbar>
        </Card>
      </div>
    </div>
  );
}
