import CardConfirmItem from "@/Components/Display/CardConfirm/CardConfirmItem";
import Text, { TextProps } from "@/Components/General/Text/Text";
import Modal, { ModalProps } from "antd/lib/modal";
import React from "react";
import { TransactionPageTableData } from "./TransactionPageTableConfig";
import {ITransaction} from "@/Interfaces/Transaction";
import dayjs from "dayjs";

interface TransactionPageTableModal extends ModalProps {
  data?: TransactionPageTableData;
}

function getAmount(transaction: ITransaction) {
  const companyId = localStorage.getItem('companyId');
  const transfer = transaction.Saving || transaction.BebankTransfer || transaction.InviteTransfer || transaction.Exchange || transaction.OtherBankTransfer || transaction.RemittanceTransfer;
  // @ts-ignore
  if (transfer.name === 'exchange' || transfer.name === 'crypto-exchange') {
    // @ts-ignore
    return `-${transfer.amountFromWithCommission} ${transfer.currencyFrom}/+${transfer.amountTo} ${transfer.currencyTo}`
  }
  if (companyId === transaction.sender.id) {
    // @ts-ignore
    return `-${transfer.amount || transfer.amountFromWithCommission} ${transfer.currency || transfer.currencyFrom}`
  }
  // @ts-ignore
  return `+${transfer.amount || transfer.amountTo} ${transfer.currency || transfer.currencyTo}`
}

export const statusColor: Record<string, TextProps["variant"]> = {
  completed: "green",
  initiated: "yellow",
  failed: "red",
};

function getMessage(transaction: ITransaction) {
  const transfer = transaction.Saving || transaction.BebankTransfer || transaction.InviteTransfer || transaction.Exchange || transaction.OtherBankTransfer || transaction.RemittanceTransfer;
  // @ts-ignore
  return transfer.message;
}

export default function TransactionPageTableModal(
  props: TransactionPageTableModal
) {
  const { data } = props;

  return (
    <Modal
      title="Transaction Details"
      okButtonProps={{ style: { display: "none" } }}
      {...props}
    >
      <CardConfirmItem
        label="Transaction Type"
        color="black"
        value={data?.transactionType}
      />
      <CardConfirmItem label="Name" color="black" value={data?.accountVersionType} />
      <CardConfirmItem label="BE ID" color="black" value={data?.beid} />
      <CardConfirmItem
        label="Status"
        color={statusColor[data?.status.toLowerCase() as string]}
        value={data?.status}
      />
      <CardConfirmItem label="Amount" color="black" value={data?.amount} />
      <CardConfirmItem
        label="Transaction Fee"
        color="black"
        value={data?.fee}
      />
      <CardConfirmItem
        weight={400}
        label="Timestamp"
        color="grey"
        value={data ? dayjs(data.createdAt).format('DD/MM/YYYY HH:MM') : ''}
      />
      <CardConfirmItem
        weight={400}
        label="Description"
        color="grey"
        value={
          <Text size={12} variant="black" weight={400}>{data ? getMessage(data) : ''}
          </Text>
        }
        align="row"
      />
    </Modal>
  );
}
