import React from "react";
import Header from "@/Components/Common/Header/Header";
import CardSave from "@/Components/Display/CardSave/CardSave";
import Button from "~/Components/General/Button/Button";
import Text from "~/Components/General/Text/Text";
import UnitedState from "@/Assets/Flags/united states.svg";
import EuropUnion from "@/Assets/Flags/european union.svg";
import CurrentCardList from "@/Components/Display/CurrentCardList/CurrentCardList";
import TitleCard from "@/Components/General/TitleCard/TitleCard";
import { Link } from "react-router-dom";

const StyleguidePage = () => {
  return (
    <div>
      <Header title="Styleguide" />
      <Button tag="link" to="/" type="primary">
        BUTTON
      </Button>
      <Button type="secondary">BUTTON</Button>
      <Button type="white">BUTTON</Button>
      <Button type="default">BUTTON</Button>

      <Text tag="h1" type="h1">
        Heading H1
      </Text>
      <Text tag="h2" type="h2" variant="black">
        Heading H2
      </Text>
      <Text tag="h3" type="h3" variant="grey">
        Heading H3
      </Text>
      <Text tag="p" type="p" variant="green">
        Paragraph
      </Text>
      <Text tag="p" size={30}>
        Paragraph
      </Text>
      <CardSave
        principal="10,248.0"
        interest="128.00"
        src={UnitedState}
        money="USD"
      />
      <CardSave
        principal="245,624.32"
        interest="12,439.79"
        src={EuropUnion}
        money="EUR"
      />
      <CurrentCardList
        valor="398.00"
        money="Euro (EUR)"
        src={EuropUnion}
        valorUSD="= USD 403.83"
      />
      <CurrentCardList
        valor="150.00"
        money="US Dollar (USD)"
        src={UnitedState}
      />
      <TitleCard title="5% Savings Offering">
        <div>
          <Text tag="span" variant="grey">
            Balances
          </Text>
        </div>
      </TitleCard>
    </div>
  );
};
export default StyleguidePage;
