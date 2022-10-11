import Card from "@/Components/Display/Card/Card";
import Table from "@/Components/Display/Table/Table";
import Text from "@/Components/General/Text/Text";
import React from "react";
import {
  savingPageTableColumn,
  SavingPageTableData,
} from "./SavingPageTableConfig";
import useSavingPageTableLogic from "./SavingPageTableLogic";

export default function SavingPageTable() {
  const savingPageTableDataTmp = useSavingPageTableLogic();

  return (
    <Card className="mt-5">
      <Text tag="h2" type="h2">
        Savings Transactions
      </Text>
      <Table<SavingPageTableData>
        pagination={false}
        dataSource={savingPageTableDataTmp}
        columns={savingPageTableColumn()}
      />
    </Card>
  );
}
