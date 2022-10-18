import CardConfirmItem from "@/Components/Display/CardConfirm/CardConfirmItem";
import Text, { TextProps } from "@/Components/General/Text/Text";
import Modal, { ModalProps } from "antd/lib/modal";
import React from "react";
import { TransactionPageTableData } from "./TransactionPageTableConfig";

interface TransactionPageTableModal extends ModalProps {
  data?: TransactionPageTableData;
}

export const statusColor: Record<string, TextProps["variant"]> = {
  completed: "green",
  initiated: "yellow",
  failed: "red",
};

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
      <CardConfirmItem label="Name" color="black" value={data?.name} />
      <CardConfirmItem label="BE ID" color="black" value={data?.beId} />
      <CardConfirmItem
        label="Status"
        color={statusColor[data?.status.toLowerCase() as string]}
        value={data?.status}
      />
      <CardConfirmItem label="Amount" color="black" value={data?.amount} />
      <CardConfirmItem
        label="Transaction Fee"
        color="black"
        value={`${data?.transactionFee} CHF`}
      />
      <CardConfirmItem
        weight={400}
        label="Timestamp"
        color="grey"
        value={data?.timestamp}
      />
      <CardConfirmItem
        weight={400}
        label="Description"
        color="grey"
        value={
          <Text size={12} variant="black" weight={400}>
            Lorem ipsum dolor sit amet, consectetur.
          </Text>
        }
        align="row"
      />
    </Modal>
  );
}
