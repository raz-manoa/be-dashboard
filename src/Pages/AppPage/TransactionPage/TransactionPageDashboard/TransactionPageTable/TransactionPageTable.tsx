import Card from "@/Components/Display/Card/Card";
import Table from "@/Components/Display/Table/Table";
import {
  transactionPageTableColumn,
  TransactionPageTableData,
} from "./TransactionPageTableConfig";
import useTransactionPageTableLogic from "./TransactionPageTableLogic";
import styles from "./TransactionPageTable.module.scss";
import Modal from "antd/lib/modal/Modal";

export default function TransactionPageTable() {
  const transactionPageTableDataTmp = useTransactionPageTableLogic();

  return (
    <Card className={styles.tableTransaction}>
      <Table<TransactionPageTableData>
        dataSource={transactionPageTableDataTmp}
        columns={transactionPageTableColumn()}
        scroll={{ x: undefined, y: window.innerHeight - 380 }}
        tableLayout={"auto"}
      />
      {/* <Modal title="Transaction Details" open={}></Modal> */}
    </Card>
  );
}
