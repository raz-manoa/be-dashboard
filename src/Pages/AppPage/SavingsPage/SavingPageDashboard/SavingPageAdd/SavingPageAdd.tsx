import CardDisposit from "@/Components/Display/CardDisposit/CardDisposit";
import Text from "@/Components/General/Text/Text";
import styles from "./SavingPageAdd.module.scss";
import { Tabs, TabsProps } from "antd";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {ISaving} from "@/Pages/AppPage/DashboardPage/DashboarPageSavingAccount/SavingCard/SavingCard";
import {IAccount} from "@/Interfaces/Account";
import {currencyParser} from "@/Utils/currencyParser";
import axios from "axios";
import apiInstance from "@/Api/apiInstance";
import companyDataEndpoint from "@/Api/endpoints/companyData.endpoint";

export default function SavingPageAdd(props: { props: { savings: ISaving[], accounts: IAccount[] }}) {
    const navigate = useNavigate();
    const [currency, setCurrency] = useState<any>(null);
    const [amount, setAmount] = useState<number>(0);
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
                                money={`${currencyParser(usdAccount.balance)} USD`}
                                btnLabel="Deposit"
                                currency={'USD'}
                                className={styles.card}
                                setCurrency={setCurrency}
                                setAmount={setAmount}
                                onAction={() => {
                                    navigate({
                                        pathname: "confirm-deposit",
                                    })}
                                }
                            />
                            <CardDisposit
                                save="EUR Savings"
                                placeholder="0.0 EUR"
                                money={`${currencyParser(eurAccount.balance)} EUR`}
                                btnLabel="Deposit"
                                currency={'EUR'}
                                className={styles.card}
                                setCurrency={setCurrency}
                                setAmount={setAmount}
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
                                money={`${currencyParser(usdSaving.amount)} USD`}
                                className={styles.card}
                                currency={'USD'}
                                setCurrency={setCurrency}
                                setAmount={setAmount}
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
                                money={`${currencyParser(eurSaving.amount)} EUR`}
                                className={styles.card}
                                currency={'EUR'}
                                setCurrency={setCurrency}
                                setAmount={setAmount}
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
