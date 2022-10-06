import Text from "@/Components/General/Text/Text";
import React from "react";
import Card from "../Card/Card";
import "./CurrentCardList.scss";
interface CurrentCardListProps {
  money: string;
  valor: string;
  valorUSD?: string;
  src: string;
}
export default function CurrentCardList(props: CurrentCardListProps) {
  const { money, valor, src, valorUSD } = props;
  return (
    <div className="card__content">
      <div className="card__money">
        <img src={src} alt="flag" />
        <Text tag="h3" type="h3" variant="grey">
          {money}
        </Text>
      </div>
      <div className="card__money-nbr">
        <Text size={31} tag="p" variant="grey">
          {valor}
        </Text>
        <Text size={13} tag="span" variant="grey">
          {valorUSD}
        </Text>
      </div>
    </div>
  );
}
