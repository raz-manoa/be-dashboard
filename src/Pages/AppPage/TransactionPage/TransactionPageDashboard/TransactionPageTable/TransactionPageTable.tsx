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

export default function TransactionPageTable() {
  const [transactions, setTransactions] =
    // TODO: remove useState default value if you do not want to use mocked transactions
    useState<ITransaction[]>(transactionsMock);

  useEffect(() => {
    api.transactions.getAll().then((response) => {
      if (response && response.data) {
        setTransactions(response.data);
      }
    });
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
        <Table<TransactionPageTableData>
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
        />
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
