import {Outlet} from "react-router-dom";
import TransactionsPageContext, {TransactionsFormType} from "@/Pages/AppPage/TransactionPage/TransactionsPageContext";
import {useState} from "react";

const Transaction = () => {
    const [form, setForm] = useState<TransactionsFormType>();

    return (
        <TransactionsPageContext.Provider value={{ form, setForm }}>
            <Outlet></Outlet>
        </TransactionsPageContext.Provider>
    );
};

export default Transaction;
