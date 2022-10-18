import Card from "@/Components/Display/Card/Card";
import Table from "@/Components/Display/Table/Table";
import {
  transactionPageTableColumn,
  TransactionPageTableData,
} from "./TransactionPageTableConfig";
import useTransactionPageTableLogic from "./TransactionPageTableLogic";
import styles from "./TransactionPageTable.module.scss";

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
    </Card>
  );
}
