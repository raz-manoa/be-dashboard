import Card from "@/Components/Display/Card/Card";
import Table from "@/Components/Display/Table/Table";
import {
  transactionPageTableColumn,
  TransactionPageTableData,
} from "./TransactionPageTableConfig";
import styles from "./TransactionPageTable.module.scss";
import TransactionPageTableModal from "./TransactionPageTableModal";
import { useEffect, useRef, useState } from "react";
import { ITransaction } from "@/Interfaces/Transaction";
import api from "@/Api/api";
import { transactionsMock } from "@/Api/mock/transactions.mock";

function getTransfer(transaction: ITransaction) {
  return transaction.Saving || transaction.BebankTransfer || transaction.InviteTransfer || transaction.Exchange || transaction.OtherBankTransfer || transaction.RemittanceTransfer;
}

function getAmount(transaction: ITransaction, companyId: string) {
  const transfer = transaction.Saving || transaction.BebankTransfer || transaction.InviteTransfer || transaction.Exchange || transaction.OtherBankTransfer || transaction.RemittanceTransfer;
  // @ts-ignore
  if (transfer.name === 'exchange' || transfer.name === 'crypto-exchange') {
    // @ts-ignore
    return `-${transfer.amountFromWithCommission} ${transfer.currencyFrom}/+${transfer.amountTo} ${transfer.currencyTo}`
  }
  if (companyId === transaction.sender.id) {
    // @ts-ignore
    return `-${transfer.amount || transfer.amountFromWithCommission} ${transfer.currency || transfer.currencyFrom}`
  }
  // @ts-ignore
  return `+${transfer.amount || transfer.amountTo} ${transfer.currency || transfer.currencyTo}`
}

export default function TransactionPageTable() {
  const [transactions, setTransactions] = useState<TransactionPageTableData[]>([]);

  useEffect(() => {
    async function getInfo() {
      const companyId = localStorage.getItem('companyId');
      // @ts-ignore
      const transactions = await api.companyData.getTransactions(companyId);
      const changed = transactions.map(item => {
        // @ts-ignore
        item.transfer = getTransfer(item);
        // @ts-ignore
        item.beid = item.sender.identifyNumber.toString().padStart(8, `${item.sender.identifyPrefix}000000`);
        // @ts-ignore
        item.amount = getAmount(item, companyId);
        // @ts-ignore
        item.fee = item.transfer.fee ? `${item.transfer.fee} ${item.currency ? item.currency : item.currencyFrom}` : ` - `;
        if (item.transactionType === 'exchange') {
          item.transactionType = 'fx';
        }
        return item;
      })
      // @ts-ignore
      setTransactions(changed);
    }
    getInfo();
  }, []);

  const [currentData, setCurrentData] = useState<TransactionPageTableData>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleShowDetail = (data: TransactionPageTableData) => {
    setCurrentData(data);
    setShowModal(true);
  };

  return (
    <div
      ref={wrapRef}
      className={`${styles.tableWrap} ${showModal ? styles.tableOverlay : ""}`}
    >
      <Card className={styles.tableTransaction}>
        {transactions && transactions.length > 0 && <Table<TransactionPageTableData>
          dataSource={transactions}
          columns={transactionPageTableColumn({
            onShowDetail: handleShowDetail,
          })}
          scroll={{ x: undefined, y: window.innerHeight - 380 }}
          tableLayout={"auto"}
          pagination={
            transactions.length <= 10
              ? false
              : {
                  defaultPageSize: 10,
                }
          }
        />}
        <TransactionPageTableModal
          open={showModal}
          onCancel={() => setShowModal(false)}
          data={currentData}
          destroyOnClose={true}
          getContainer={() => wrapRef.current || document.body}
          cancelText="BACK"
        />
        {/* <Modal title="Transaction Details" open={}></Modal> */}
      </Card>
    </div>
  );
}
