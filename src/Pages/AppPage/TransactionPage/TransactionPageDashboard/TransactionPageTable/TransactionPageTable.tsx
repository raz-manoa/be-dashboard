import Card from "@/Components/Display/Card/Card";
import Table from "@/Components/Display/Table/Table";
import {
  transactionPageTableColumn,
  TransactionPageTableData,
} from "./TransactionPageTableConfig";
import useTransactionPageTableLogic from "./TransactionPageTableLogic";
import styles from "./TransactionPageTable.module.scss";
import Modal from "antd/lib/modal/Modal";
import TransactionPageTableModal from "./TransactionPageTableModal";
import { useRef, useState } from "react";

export default function TransactionPageTable() {
  const transactionPageTableDataTmp = useTransactionPageTableLogic();

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
          dataSource={transactionPageTableDataTmp}
          columns={transactionPageTableColumn({
            onShowDetail: handleShowDetail,
          })}
          scroll={{ x: undefined, y: window.innerHeight - 380 }}
          tableLayout={"auto"}
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
