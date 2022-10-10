import React from "react";
import Table, { TableProps } from "antd/es/table";
import styles from "./Table.module.scss";

interface TableContentProps<T> extends TableProps<T> {}

export default function TableContent<T extends object>(
  props: TableContentProps<T>
) {
  const { className = "", ...rest } = props;
  return <Table<T> {...rest} className={`${styles.table} ${className}`} />;
}
