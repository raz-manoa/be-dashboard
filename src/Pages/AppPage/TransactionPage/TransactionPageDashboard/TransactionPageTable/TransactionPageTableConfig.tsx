import Icon from "@/Components/General/Icon/Icon";
import Text from "@/Components/General/Text/Text";
import { ColumnType } from "antd/es/table";

export interface TransactionPageTableData {
  name: string;
  transactionType: string;
  transactionFee: string;
  status: string;
  beId: string;
  amount: string;
  timestamp: string;
  icon: string;
}

export const transactionPageTableColumn: () => Array<
  ColumnType<TransactionPageTableData>
> = () => {
  return [
    {
      key: "icon",
      dataIndex: "transactionType",
      title: "",
      width: 40,
      render: (value: TransactionPageTableData["icon"]) => {
        return (
          <Icon
            icon={`${
              value.includes("Bank Transfer")
                ? "bank-transfert"
                : value.includes("QR Code Payment")
                ? "qr"
                : "saving-withdraw"
            }`}
            size={16}
            color="red"
          />
        );
      },
    },
    {
      key: "transactionType",
      dataIndex: "transactionType",
      title: "Transaction type",
      render: (value: TransactionPageTableData["transactionType"]) => {
        return (
          <Text tag="span" size={12}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "name",
      dataIndex: "name",
      title: "Name",
      render: (value: TransactionPageTableData["name"]) => {
        return (
          <Text tag="span" weight={600} size={12}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "beId",
      dataIndex: "beId",
      title: "BE ID",
      render: (value: TransactionPageTableData["beId"]) => {
        return (
          <Text tag="span" variant="grey" size={12}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "status",
      dataIndex: "status",
      title: "Status",
      render: (value: TransactionPageTableData["status"]) => {
        return (
          <Text
            tag="span"
            variant={`${
              value.includes("completed" || "Completed")
                ? "green"
                : value.includes("Initiated" || "initiated")
                ? "yellow"
                : "red"
            }`}
            size={12}
          >
            {value}
          </Text>
        );
      },
    },
    {
      key: "transactionFee",
      dataIndex: "transactionFee",
      title: "Transaction Fee",
      render: (value: TransactionPageTableData["transactionFee"]) => {
        return (
          <Text tag="span" size={12}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "amount",
      dataIndex: "amount",
      title: "Amount",
      render: (value: TransactionPageTableData["amount"]) => {
        return (
          <Text tag="span" weight={600} size={14}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "timestamp",
      dataIndex: "timestamp",
      title: "Timestamp",
      width: 100,
      render: (value: TransactionPageTableData["timestamp"]) => {
        return (
          <Text tag="span" variant="grey" size={14}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "icon",
      dataIndex: "transactionType",
      title: "",
      width: 5,
      render: (value: TransactionPageTableData["transactionType"]) => {
        return <Icon icon="eye" size={20} color="#546e7a" />;
      },
    },
  ];
};
