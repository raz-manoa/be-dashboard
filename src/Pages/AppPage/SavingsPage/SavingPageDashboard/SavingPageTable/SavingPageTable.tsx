import Card from "@/Components/Display/Card/Card";
import Table from "@/Components/Display/Table/Table";
import Text from "@/Components/General/Text/Text";
import React, {useEffect, useState} from "react";
import {
    savingPageTableColumn,
    SavingPageTableData,
} from "./SavingPageTableConfig";
import useSavingPageTableLogic from "./SavingPageTableLogic";
import {ISaving} from "@/Pages/AppPage/DashboardPage/DashboardPageSavingAccount/SavingCard/SavingCard";
import api from "@/Api/api";
import {ITransaction} from "@/Interfaces/Transaction";

function getTransfer(transaction: ITransaction) {
    return transaction.Saving || transaction.BebankTransfer || transaction.InviteTransfer || transaction.Exchange || transaction.OtherBankTransfer || transaction.RemittanceTransfer;
}

function getAmount(transaction: ITransaction, companyId: string) {
    const transfer = transaction.Saving || transaction.BebankTransfer || transaction.InviteTransfer || transaction.Exchange || transaction.OtherBankTransfer || transaction.RemittanceTransfer;
    if (companyId === transaction.sender.id) {
        // @ts-ignore
        return `-${transfer.amount || transfer.amountFromWithCommission} ${transfer.currency || transfer.currencyFrom}`
    }
    // @ts-ignore
    return `+${transfer.amount || transfer.amountTo} ${transfer.currency || transfer.currencyTo}`
}

export default function SavingPageTable() {
    const { savingList } = useSavingPageTableLogic();
    const [savings, setSavings] = useState<ITransaction[]>([]);

    useEffect(() => {
        async function getInfo() {
            const companyId = localStorage.getItem('companyId');
            // @ts-ignore
            const savings = await api.companyData.getSavingsTransactions(companyId);
            const changed = savings.map(item => {
                // @ts-ignore
                item.type = `saving-${item.Saving.type}`;
                console.log(item.type);
                item.transfer = getTransfer(item);
                item.beid = item.sender.identifyNumber.toString().padStart(8, `${item.sender.identifyPrefix}000000`);
                // @ts-ignore
                item.amount = getAmount(item, companyId);
                item.name = `${item.sender.firstName} ${item.sender.lastName}`
                // @ts-ignore
                item.fee = item.transfer.fee || 0;
            })
            setSavings(savings);
        }
        getInfo();
    }, [])

    return (
        <Card className="mt-5">
            <Text tag="h2" type="h2" variant="black2">
                Savings Transactions
            </Text>
            { savings.length && <Table<SavingPageTableData>
                pagination={false}
                dataSource={savings}
                columns={savingPageTableColumn()}
                scroll={{ x: undefined, y: 506 }}
                tableLayout={"auto"}
            />}
        </Card>
    );
}
