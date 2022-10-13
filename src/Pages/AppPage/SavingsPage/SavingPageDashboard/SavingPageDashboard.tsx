import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import Alert from "antd/es/alert";
import SavingPageAdd from "./SavingPageAdd/SavingPageAdd";
import SavingPageOffering from "./SavingPageOffering/SavingPageOffering";
import SavingPageTable from "./SavingPageTable/SavingPageTable";

const showAlert = false;
const SavingPageDashboard = () => {
  useSetAppLayoutTitle("Savings");

  return (
    <section className="mt-6">
      {showAlert && (
        <Alert
          message="Insufficient USD funds."
          type="error"
          className="mb-8"
        />
      )}
      <div className="grid grid-cols-2 gap-5">
        <SavingPageOffering />
        <SavingPageAdd />
      </div>
      <div>
        <SavingPageTable />
      </div>
    </section>
  );
};

export default SavingPageDashboard;
