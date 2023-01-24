import Icon from "@/Components/General/Icon/Icon";
import Text from "@/Components/General/Text/Text";
import { ColumnType } from "antd/es/table";
import { statusColor } from "./TransactionPageTableModal";
import { ITransaction } from "@/Interfaces/Transaction";

// @ts-ignore
export interface TransactionPageTableData extends ITransaction {
  transfer: object;
  beid: string;
  amount: number;
  fee: number;
  createdAt: Date;
}

export const transactionPageTableColumn: (options: {
  onShowDetail: (data: TransactionPageTableData) => void;
}) => Array<ColumnType<TransactionPageTableData>> = ({ onShowDetail }) => {
  return [
    {
      key: "icon",
      dataIndex: "icon",
      title: "",
      width: 40,
      render: (value: TransactionPageTableData["icon"]) => {
        return (
          <Icon
            icon={value}
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
      key: "accountVersionType",
      dataIndex: "accountVersionType",
      title: "Name",
      align: "center",
      width: 250,
      render: (value: TransactionPageTableData["accountVersionType"]) => {
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
      key: "beid",
      dataIndex: "beid",
      title: "BE ID",
      width: 100,
      render: (value: TransactionPageTableData["beid"]) => {
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
      dataIndex: "fee",
      title: "Transaction Fee",
      width: 200,
      render: (value: TransactionPageTableData["fee"]) => {
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
      key: "createdAt",
      dataIndex: "createdAt",
      title: "Created At",
      width: 150,
      render: (value: TransactionPageTableData["createdAt"]) => {
        // @ts-ignore
        return (
          <Text tag="span" variant="grey" size={14}>
            {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit' ,day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(Date.parse(value))}
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
