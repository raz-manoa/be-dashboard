import CryptoDepositPageItem from "./CryptoDepositPageItem/CryptoDepositPageItem";
import Ethereum from "@/Assets/Logo/Ethereum.svg";
import BitCoin from "@/Assets/Logo/BitCoin.svg";
import Solana from "@/Assets/Logo/Solana.svg";
import QRCode from "@/Assets/qr-code.svg";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import {useEffect, useState} from "react";
import {
  TransactionPageTableData
} from "@/Pages/AppPage/TransactionPage/TransactionPageDashboard/TransactionPageTable/TransactionPageTableConfig";

const CryptoDepositPage = () => {
  useSetAppLayoutTitle("Crypto Deposit");
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    async function getInfo() {
      const company = localStorage.getItem('company');
      const parsedCompany = JSON.parse(company);
      // @ts-ignore
      const addresses = JSON.parse(parsedCompany.addresses);
      const data = [
        {
          name: "Ethereum",
          id: "ETH",
          address: addresses.ETH,
          logo: Ethereum,
          txt: "Please only send ETH to this address. Sending other crypto currencies may result in loss of funds",
          code: QRCode,
        },
        {
          name: "Bitcoin",
          id: "BTC",
          address: addresses.BTC,
          logo: BitCoin,
          txt: "Please only send BTC to this address. Sending other crypto currencies may result in loss of funds",
          code: QRCode,
        },
        {
          name: "Solana",
          id: "SOL",
          address: addresses.SOL,
          logo: Solana,
          txt: "Please only send SOL to this address. Sending other crypto currencies may result in loss of funds",
          code: QRCode,
        },
      ];
      setData(data);
    }
    if (data.length === 0) {
      getInfo();
    }
  })

  return (
      <div className="grid grid-cols-3 gap-5 mt-5">
      {data.length && data.map((d, index) => (
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
