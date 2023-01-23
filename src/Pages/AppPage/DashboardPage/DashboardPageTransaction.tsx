import Card from "@/Components/Display/Card/Card";
import CardTransaction, {
  CardTransactionProps,
} from "@/Components/Display/CardTransaction/CardTransaction";
import Scrollbar from "@/Components/General/Scrollbar/Scrollbar";
import Text from "@/Components/General/Text/Text";
import { Tabs, TabsProps } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./DashboardPage.module.scss";
import CompanyData from "@/Api/endpoints/companyData.endpoint";
import {ITransaction} from "@/Interfaces/Transaction";
import {IUser} from "@/Interfaces/IUser";

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
    payment: "Savings Withdrawal",
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

function getFullName(user: IUser) {
  return `${user.firstName} ${user.lastName}`;
}

function getAmount(transaction: ITransaction) {
  const transfer = transaction.Saving || transaction.BebankTransfer || transaction.InviteTransfer || transaction.Exchange || transaction.OtherBankTransfer || transaction.RemittanceTransfer;
  const companyId = localStorage.getItem('companyId');
  // @ts-ignore
  if (transfer.name === 'exchange' || transfer.name === 'crypto-exchange') {
    // @ts-ignore
    return `-${transfer.amountFromWithCommission} ${transfer.currencyFrom}/+${transfer.amountTo} ${transfer.currencyTo}`
  }
  if (companyId === transaction.sender.id) {
    // @ts-ignore
    return `-${transfer.amount} ${transfer.currency}`
  }
  // @ts-ignore
  return `+${transfer.amount} ${transfer.currency}`
}

export default function DashboardPageTransaction(transactions: { transactions: ITransaction[] }) {
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

  const tabItems: TabsProps["items"] = paires.map((paire, index) => {
    return {
      label: <span style={{ textTransform: "none" }}>{paire}</span>,
      key: `${index}`,
      children: (
        <div
          style={{ "--offset-top": `${offsetTop}px` } as React.CSSProperties}
          ref={psWrapRef}
        >
          <Card className={styles.transactionCard}>
            <Scrollbar>
              <div>
                {transactions.transactions.map((t, index) => (
                  <CardTransaction
                    date={t.date}
                    icon={t.transactionType}
                    payment={t.transactionType}
                    transaction={getAmount(t)}
                    user={getFullName(t.sender)}
                    company={getFullName(t.recipient)}
                    key={`t-${index}`}
                  />
                ))}
              </div>
            </Scrollbar>
          </Card>
        </div>
      ),
    };
  });

  return (
    <div className={`${styles.dashboardTransaction}`}>
      <div className={styles.dashbaordTransactionHead}>
        <Text tag="h2" type="h2" variant="black2" weight={600}>
          Recent Transactions
        </Text>
      </div>

      <Tabs
        tabBarStyle={{ marginBottom: 16, padding: "0 25px" }}
        defaultActiveKey="1"
        items={tabItems}
        tabBarExtraContent={{
          right: (
            <Link to="" title="">
              <Text tag="span" variant="red" weight={500} size={14}>
                View All
              </Text>
            </Link>
          ),
        }}
      />
    </div>
  );
}
