import CardDisposit from "@/Components/Display/CardDisposit/CardDisposit";
import Text from "@/Components/General/Text/Text";
import styles from "./SavingPageAdd.module.scss";
import { Tabs, TabsProps } from "antd";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {ISaving} from "@/Pages/AppPage/DashboardPage/DashboarPageSavingAccount/SavingCard/SavingCard";
import {IAccount} from "@/Interfaces/Account";

export default function SavingPageAdd(props: { props: { savings: ISaving[], accounts: IAccount[] }}) {
    const navigate = useNavigate();
    // const [usdSaving, setUSDSaving] = useState<ISaving>(null);
    // const [eurSaving, setEURSaving] = useState<ISaving>(null);
    // const [usdAccount, setUsdAccount] = useState<IAccount>(null);
    // const [eurAccount, setEurAccount] = useState<IAccount>(null);
    const [tabItems, setTabItems] = useState<TabsProps["items"]>(null)
    useEffect(() => {
        async function getInfo() {
            const savingsData = props.props.savings;
            const accountsData = props.props.accounts;
            // @ts-ignore
            const usdSaving = savingsData.find(item => item.currency.id === 'USD');
            const eurSaving = savingsData.find(item => item.currency.id === 'EUR');
            const usdAccount = accountsData.find(item => item.currency === 'USD');
            const eurAccount = accountsData.find(item => item.currency === 'EUR');
            // setUSDSaving(savingsData.find(item => item.currency.id === 'USD'));
            // // @ts-ignore
            // setEURSaving(savingsData.find(item => item.currency.id === 'EUR'));
            // // @ts-ignore
            // setUsdAccount(accountsData.find(item => item.currency === 'USD'));
            // // @ts-ignore
            // setEurAccount(accountsData.find(item => item.currency === 'EUR'));
            console.log(usdAccount, eurAccount, usdSaving, eurSaving);
            const tabItems: TabsProps["items"] = [
                {
                    label: "Deposit",
                    key: "1",
                    children: (
                        <>
                            <CardDisposit
                                save="USD Savings"
                                placeholder="0.0 USD"
                                money={`${usdAccount.balance} USD`}
                                btnLabel="Deposit"
                                className={styles.card}
                                onAction={() =>
                                    navigate({
                                        pathname: "confirm-deposit",
                                    })
                                }
                            />
                            <CardDisposit
                                save="EUR Savings"
                                placeholder="0.0 EUR"
                                money={`${eurAccount.balance} EUR`}
                                btnLabel="Deposit"
                                className={styles.card}
                                onAction={() =>
                                    navigate({
                                        pathname: "confirm-deposit",
                                    })
                                }
                            />
                        </>
                    ),
                },
                {
                    label: "Withdraw",
                    key: "2",
                    children: (
                        <>
                            <CardDisposit
                                save="USD Savings"
                                placeholder="0.0 USD"
                                money={`${usdSaving.amount} USD`}
                                className={styles.card}
                                btnLabel="Withdraw"
                                onAction={() =>
                                    navigate({
                                        pathname: "review-withdrawal",
                                    })
                                }
                            />
                            <CardDisposit
                                save="EUR Savings"
                                placeholder="0.0 EUR"
                                money={`${eurSaving.amount} EUR`}
                                className={styles.card}
                                btnLabel="Withdraw"
                                onAction={() =>
                                    navigate({
                                        pathname: "review-withdrawal",
                                    })
                                }
                            />
                        </>
                    ),
                },
            ];
            setTabItems(tabItems);
        }
        if (!tabItems) {
            getInfo();
        }
    },[]);

    return (
        <div>
            <Text
                type="h2"
                tag="h2"
                variant="black2"
                style={{ lineHeight: "normal" }}
                className={styles.card__title}
            >
                Add/Withdraw Funds
            </Text>
            {tabItems &&  <Tabs defaultActiveKey="1" items={tabItems} />}
        </div>
    );
}
