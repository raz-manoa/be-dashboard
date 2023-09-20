import CryptoDepositPageItem from "./CryptoDepositPageItem/CryptoDepositPageItem";
import Ethereum from "@/Assets/Logo/Ethereum.svg";
import BitCoin from "@/Assets/Logo/BitCoin.svg";
import Solana from "@/Assets/Logo/Solana.svg";
import QRCode from "@/Assets/qr-code.svg";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import { useEffect, useState } from "react";
import { TransactionPageTableData } from "@/Pages/AppPage/TransactionPage/TransactionPageDashboard/TransactionPageTable/TransactionPageTableConfig";
import api from "@/Api/api";

const CryptoDepositPage = () => {
  useSetAppLayoutTitle("Crypto Deposit");
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    async function getInfo() {
      const companyId = localStorage.getItem("companyId") || "";
      const addresses = await api.companyData.getAddresses(companyId);
      const sol = addresses.find(item => item.currency.name === 'SOL');
      if (!sol) {
        setError(true);
      } else {
        const responseData = [
          {
            name: "Solana",
            id: "SOL",
            address: sol.address,
            logo: Solana,
            txt: "Please only send SOL to this address. Sending other crypto currencies may result in loss of funds",
            code: QRCode,
          },
          // {
          //   name: "Ethereum",
          //   id: "ETH",
          //   address: addresses.ETH,
          //   logo: Ethereum,
          //   txt: "Please only send ETH to this address. Sending other crypto currencies may result in loss of funds",
          //   code: QRCode,
          // },
          // {
          //   name: "Bitcoin",
          //   id: "BTC",
          //   address: addresses.BTC,
          //   logo: BitCoin,
          //   txt: "Please only send BTC to this address. Sending other crypto currencies may result in loss of funds",
          //   code: QRCode,
          // },
        ];
        setData(responseData);
      }
    }

    getInfo();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {error && <div><p>You don't have addresses</p></div>}
      {!error && data.length > 0 &&
        data.map((d, index) => (
          <CryptoDepositPageItem
            key={`d-${index}`}
            logo={d.logo}
            title={d.name}
            sup={d.id}
            txt={d.txt}
            identity={d.address}
            code={d.code}
          />
        ))}
    </div>
  );
};

export default CryptoDepositPage;
