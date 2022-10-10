import React from "react";
import Table from "antd/es/table";
import styles from "./Tabel.module.scss";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
import { Space, Tag } from "antd";
interface DataType {
  transactionType: string;
  name: string;
  be_ID: number;
  status: string;
  transactionFree?: string;
  amount: string;
  timestamp: string;
}
interface DataColumn {
  title: string;
}
interface TableContentProps {
  data: DataType[];
  column: DataColumn[];
}

export default function TableContent(props: TableContentProps) {
  const { data, column = [] } = props;

  return (
    <Table dataSource={data}>
      {column.map((col, index) => (
        <Column title={col.title} key={`col-${index}`} />
      ))}
    </Table>
  );
}
