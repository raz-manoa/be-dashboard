import CryptoDepositPageItem from "./CryptoDepositPageItem/CryptoDepositPageItem";
import Ethereum from "@/Assets/Logo/Ethereum.svg";
import BitCoin from "@/Assets/Logo/BitCoin.svg";
import Solana from "@/Assets/Logo/Solana.svg";
import QRCode from "@/Assets/qr-code.svg";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";

const CryptoDepositPage = () => {
  useSetAppLayoutTitle("Crypto Deposit");

  const data = [
    {
      title: "Ethereum ",
      sup: "ETH",
      identity: "0x0f7229B959FaB44b6a6B559 B7Bfa777E128aB020",
      logo: Ethereum,
      txt: "Please only send ETH and USDC to this address. Sending other crypto currencies may result in loss or runas.",
      code: QRCode,
    },
    {
      title: "Bitcoin ",
      sup: "BTC",
      identity: "bc1qe6e74tmgt79ezed9s463y pue0sgd7cx69j lnk9",
      logo: BitCoin,
      txt: "Please onlv send BTC to this address. Sending other croto currencies may result in loss of funds.",
      code: QRCode,
    },
    {
      title: "Solana ",
      sup: "SOL",
      identity: "9JgwohHnKxx4j3NAWi6QnYi6 2jeEs5XTUy1KFP9tgYjb",
      logo: Solana,
      txt: "Please only send SOL to this address. Sending other crypto currencies may result in loss or runas.",
      code: QRCode,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {data.map((d, index) => (
        <CryptoDepositPageItem
          key={`d-${index}`}
          logo={d.logo}
          title={d.title}
          sup={d.sup}
          txt={d.txt}
          identity={d.identity}
          code={d.code}
        />
      ))}
    </div>
  );
};

export default CryptoDepositPage;
