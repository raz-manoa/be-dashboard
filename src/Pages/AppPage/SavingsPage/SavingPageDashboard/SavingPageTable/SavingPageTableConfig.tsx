import Icon from "@/Components/General/Icon/Icon";
import Text from "@/Components/General/Text/Text";
import { ColumnType } from "antd/es/table";

export interface SavingPageTableData {
  name: string;
  transactionType: string;
  transactionFee: string;
  transactionStatus: string;
  amount: string;
  timestamp: string;
}

export const savingPageTableColumn: () => Array<
  ColumnType<SavingPageTableData>
> = () => {
  return [
    {
      key: "icon",
      dataIndex: "transactionType",
      title: "",
      width: 40,
      render: (value: SavingPageTableData["transactionType"]) => {
        return (
          <Icon
            icon={`${
              value.includes("withdrawal")
                ? "saving-withdraw"
                : "saving-deposit"
            }`}
            size={16}
            color="var(--red)"
          />
        );
      },
    },
    {
      key: "transactionType",
      dataIndex: "transactionType",
      title: "Transaction type",
      render: (value: SavingPageTableData["transactionType"]) => {
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
      align: "center",
      render: (value: SavingPageTableData["name"]) => {
        return (
          <Text tag="span" weight={600} size={12}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "transactionStatus",
      dataIndex: "transactionStatus",
      title: "Transaction status",
      align: "center",
      render: (value: SavingPageTableData["transactionStatus"]) => {
        return (
          <Text tag="span" variant="green" size={12}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "transactionFee",
      dataIndex: "transactionFee",
      title: "Transaction Fee",
      align: "center",
      render: (value: SavingPageTableData["transactionStatus"]) => {
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
      align: "center",
      render: (value: SavingPageTableData["amount"]) => {
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
      align: "center",
      render: (value: SavingPageTableData["timestamp"]) => {
        return (
          <Text tag="span" variant="grey-light" size={12}>
            {value}
          </Text>
        );
      },
    },
  ];
};
