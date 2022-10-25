import React from "react";
import AntTable, { TableProps } from "antd/es/table";
import styles from "./Table.module.scss";

interface TableContentProps<T> extends TableProps<T> {}

export default function Table<T extends object>(props: TableContentProps<T>) {
  const { className = "", ...rest } = props;
  return <AntTable<T> {...rest} className={`${styles.table} ${className}`} />;
}
