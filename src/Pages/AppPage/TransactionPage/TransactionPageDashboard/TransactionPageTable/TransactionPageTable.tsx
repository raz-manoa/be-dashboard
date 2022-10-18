import Card from "@/Components/Display/Card/Card";
import Table from "@/Components/Display/Table/Table";
import {
  transactionPageTableColumn,
  TransactionPageTableData,
} from "./TransactionPageTableConfig";
import useTransactionPageTableLogic from "./TransactionPageTableLogic";

export default function TransactionPageTable() {
  const transactionPageTableDataTmp = useTransactionPageTableLogic();

  return (
    <Card className="mt-5">
      <Table<TransactionPageTableData>
        dataSource={transactionPageTableDataTmp}
        columns={transactionPageTableColumn()}
      />
    </Card>
  );
}
