import Icon from "@/Components/General/Icon/Icon";
import Text from "@/Components/General/Text/Text";
import { ColumnType } from "antd/es/table";
import { statusColor } from "./TransactionPageTableModal";

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

export const transactionPageTableColumn: (options: {
  onShowDetail: (data: TransactionPageTableData) => void;
}) => Array<ColumnType<TransactionPageTableData>> = ({ onShowDetail }) => {
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
            color={"var(--red)"}
          />
        );
      },
    },
    {
      key: "transactionType",
      dataIndex: "transactionType",
      title: "Transaction type",
      width: 150,
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
      align: "center",
      width: 250,
      render: (value: TransactionPageTableData["name"]) => {
        const splitValue = value.split("/");
        return (
          <Text tag="div" weight={600} size={12} className="text-center">
            {splitValue[0]}{" "}
            {splitValue[1] ? (
              <>
                /
                <br />
                {splitValue[1]}
              </>
            ) : (
              <></>
            )}
          </Text>
        );
      },
    },
    {
      key: "beId",
      dataIndex: "beId",
      title: "BE ID",
      width: 100,
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
      align: "center",
      width: 150,
      render: (value: TransactionPageTableData["status"]) => {
        return (
          <Text
            tag="p"
            variant={statusColor[value.toLowerCase()]}
            size={12}
            className="text-center"
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
      width: 200,
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
      width: 200,
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
      width: 150,
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
      render: (_, data: TransactionPageTableData) => {
        return (
          <span className="cursor-pointer" onClick={() => onShowDetail(data)}>
            <Icon icon="eye" color="#546e7a" className="eye-table" />
          </span>
        );
      },
    },
  ];
};
