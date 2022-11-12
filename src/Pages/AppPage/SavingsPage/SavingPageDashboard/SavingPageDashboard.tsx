import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import Alert from "antd/es/alert";
import SavingPageAdd from "./SavingPageAdd/SavingPageAdd";
import SavingPageOffering from "./SavingPageOffering/SavingPageOffering";
import SavingPageTable from "./SavingPageTable/SavingPageTable";
import {useEffect, useState} from "react";
import api from "@/Api/api";
import {IAccount} from "@/Interfaces/Account";
import {ISaving} from "@/Pages/AppPage/DashboardPage/DashboarPageSavingAccount/SavingCard/SavingCard";

const SavingPageDashboard = () => {
  const showAlert = false;
  useSetAppLayoutTitle("Savings");
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [savings, setSavings] = useState<ISaving[]>([]);
  const [props, setProps] = useState<{ savings: ISaving[], accounts: IAccount[]}>(null);
  useEffect(() => {
        async function getInfo() {
            const companyId = localStorage.getItem('companyId') || '';
            const savings = await api.companyData.getSavings(companyId);
            const accounts = await api.companyData.getAccounts(companyId);
            setSavings(savings);
            setAccounts(accounts);
            setProps({ savings, accounts });
        }
        if (!accounts.length && !savings.length) {
            getInfo();
        }
  })

  return (
    <section className="mt-6">
      {showAlert && (
        <Alert
          message="Insufficient USD funds."
          type="error"
          className="mb-8"
        />
      )}
        {accounts.length && savings.length && props && <div className="grid grid-cols-2 gap-5">
        <SavingPageOffering savings={savings} />
        <SavingPageAdd props={props}/>
      </div>}
        {accounts.length && savings.length && <div>
        <SavingPageTable />
      </div>}
    </section>
  );
};

export default SavingPageDashboard;
