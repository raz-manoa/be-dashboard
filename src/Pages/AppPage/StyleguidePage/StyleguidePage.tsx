import CardSave from "@/Components/Display/CardSave/CardSave";
import Button from "~/Components/General/Button/Button";
import Text from "~/Components/General/Text/Text";
import UnitedState from "@/Assets/Flags/united states.svg";
import EuropUnion from "@/Assets/Flags/european union.svg";
import CurrentCardList from "@/Components/Display/CurrentCardList/CurrentCardList";
import TitleCard from "@/Components/General/TitleCard/TitleCard";
import FormInput from "@/Components/DataEntry/FormInput/FormInput";
import { Link } from "react-router-dom";
import Card from "@/Components/Display/Card/Card";
import CardModal, {
  CardModelItem,
} from "@/Components/Display/CardModal/CardModal";
import Icon from "@/Components/General/Icon/Icon";
import FormSelect from "@/Components/DataEntry/FormSelect/FormSelect";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { useForm } from "antd/es/form/Form";
import FormSelectWithIcon from "@/Components/DataEntry/FormSelectWithIcon/FormSelectWithIcon";
import FormDatePicker from "@/Components/DataEntry/FormDatePicker/FormDatePicker";
import Table from "@/Components/Display/Table/Table";
import type { ColumnType } from "antd/es/table";

interface TableSample {
  name: string;
  transactionType: string;
  transactionFee: string;
  transactionStatus: string;
  amount: number;
  timestamp: string;
}

const tableSampleData: TableSample[] = [
  {
    name: "John smith",
    transactionType: "Savings withdrawal",
    transactionFee: "0.00",
    transactionStatus: "completed",
    amount: -24.0,
    timestamp: "11/06/2022",
  },
  {
    name: "John smith",
    transactionType: "Savings withdrawal",
    transactionFee: "0.00",
    transactionStatus: "completed",
    amount: -24.0,
    timestamp: "11/06/2022",
  },
  {
    name: "John smith",
    transactionType: "Savings withdrawal",
    transactionFee: "0.00",
    transactionStatus: "completed",
    amount: -24.0,
    timestamp: "11/06/2022",
  },
];

const tableSampleColumn: () => Array<ColumnType<TableSample>> = () => {
  return [
    {
      key: "transactionType",
      dataIndex: "transactionType",
      title: "Transaction type",
      render: (value: TableSample["transactionType"]) => {
        return (
          <Text tag="span" size={12}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "name",
      dataIndex: "name",
      title: "Name",
      render: (value: TableSample["name"]) => {
        return (
          <Text tag="span" weight={600} size={12}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "transactionStatus",
      dataIndex: "transactionStatus",
      title: "Transaction status",
      render: (value: TableSample["transactionStatus"]) => {
        return (
          <Text tag="span" variant="green" size={12}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "transactionFee",
      dataIndex: "transactionFee",
      title: "Transaction Fee",
      render: (value: TableSample["transactionStatus"]) => {
        return (
          <Text tag="span" size={12}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "amount",
      dataIndex: "amount",
      title: "Amount",
      render: (value: TableSample["amount"]) => {
        return (
          <Text tag="span" weight={600} size={14}>
            {value}
          </Text>
        );
      },
    },
    {
      key: "timestamp",
      dataIndex: "timestamp",
      title: "Timestamp",
      render: (value: TableSample["timestamp"]) => {
        return (
          <Text tag="span" variant="grey" size={14}>
            {value}
          </Text>
        );
      },
    },
  ];
};

const StyleguidePage = () => {
  const [form] = useForm();

  const data: CardModelItem[] = [
    {
      label: "Test",
      value: "100",
      color: "red",
    },
    {
      label: "Test",
      value: "120",
      color: "black",
    },
  ];
  return (
    <div>
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
      <Card style={{ paddingTop: 10 }}>
        <CurrentCardList
          value="150.00"
          money="US Dollar (USD)"
          src={UnitedState}
        />
        <CurrentCardList
          value="398.00"
          money="Euro (EUR)"
          src={EuropUnion}
          valueUSD="= USD 403.83"
        />
      </Card>
      <TitleCard title="5% Savings Offering" label="balance" link="view all" />

      <CardModal
        title="Access"
        btnPrimary="Annuler"
        btnSecondary="Confirmer"
        data={data}
      />
      <CardModal title="Access" btnPrimary="Annuler" data={data} />
      <CardModal title="Access" data={data} />

      <FormCustom form={form}>
        <FormCustom.Input
          name="example"
          placeholder="test"
          color="grey"
          rules={[
            {
              required: true,
              message: "Ce champ est requis",
            },
          ]}
        />
        <FormCustom.Input
          name="example-2"
          color="grey"
          placeholder="TEST"
          icon="user"
        />

        <Button
          type="primary"
          onClick={() => {
            form.validateFields();
          }}
        >
          Validate
        </Button>
        <FormCustom.Select
          name="select"
          placeholder="Select"
          options={[
            {
              label: "USD",
              value: "usd",
            },
            {
              label: "EUR",
              value: "eur",
            },
          ]}
        />
      </FormCustom>
      <FormCustom.SelectIcon
        name="select"
        icon="transactions"
        placeholder="Transaction type"
        options={[
          {
            label: "Be Network",
            value: "Be Network",
          },
          {
            label: "Bank Transfer",
            value: "Be Network",
          },
        ]}
      />
      <FormDatePicker />
      <Table<TableSample>
        dataSource={tableSampleData}
        columns={tableSampleColumn()}
      />
    </div>
  );
};
export default StyleguidePage;
