import CardSave from "@/Components/Display/CardSave/CardSave";
import Button from "~/Components/General/Button/Button";
import Text from "~/Components/General/Text/Text";
import UnitedState from "@/Assets/Flags/united states.svg";
import EuropUnion from "@/Assets/Flags/european union.svg";
import CurrentCardList from "@/Components/Display/CurrentCardList/CurrentCardList";
import TitleCard from "@/Components/Display/TitleCard/TitleCard";
import Card from "@/Components/Display/Card/Card";
import CardConfirm from "@/Components/Display/CardConfirm/CardConfirm";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { useForm } from "antd/es/form/Form";
import FormDatePicker from "@/Components/DataEntry/FormDatePicker/FormDatePicker";
import Table from "@/Components/Display/Table/Table";
import type { ColumnType } from "antd/es/table";
import { useSetAppLayoutTitle } from "@/Layouts/AppLayout/AppLayoutContext";
import CardTransaction from "@/Components/Display/CardTransaction/CardTransaction";
import SwitchToggle from "@/Components/DataEntry/SwitchToggle/SwitchToggle";
import { CardModalItemProps } from "@/Components/Display/CardConfirm/CardConfirmItem";

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

const transactionData = {
  company: "Company retreat",
  user: "Juan Perez",
  transaction: "454.00 CHF",
  payment: "QR Code payment",
  icon: "bank-transfert",
  date: "11/06/2022",
};

const StyleguidePage = () => {
  const [form] = useForm();
  useSetAppLayoutTitle("Style Guide");

  const data: CardModalItemProps[] = [
    {
      label: "Test",
      value: "100",
      color: "red",
    },
    {
      label: "Test",
      value: "120",
      color: "black",
      icon: "bank-transfert",
    },
  ];
  return (
    <div>
      <Button tag="link" to="/" type="primary">
        Primary
      </Button>
      <Button type="secondary">Secondary</Button>
      <Button type="white">White</Button>
      <Button type="default">default</Button>

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
        country={UnitedState}
        currency="USD"
      />
      <CardSave
        principal="245,624.32"
        interest="12,439.79"
        country={EuropUnion}
        currency="EUR"
      />
      <Card style={{ paddingTop: 10 }}>
        <CurrentCardList
          value="150.00"
          currency="US Dollar (USD)"
          country={UnitedState}
        />
        <CurrentCardList
          value="398.00"
          currency="Euro (EUR)"
          country={EuropUnion}
          convertValue="= USD 403.83"
        />
      </Card>
      <TitleCard
        title="5% Savings Offering"
        subtitle="balance"
        link={{
          url: "/",
          label: "View all",
        }}
      />

      <CardConfirm
        title="Access"
        btnPrimary="Annuler"
        btnSecondary="Confirmer"
        data={data}
      />
      <CardConfirm title="Access" btnPrimary="Annuler" data={data} />
      <CardConfirm title="Access" data={data} />

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
        <FormCustom.TextArea
          name="message"
          label="message : "
          option="optional"
          placeholder="messages"
        />
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
        <CardTransaction {...transactionData} />
        <SwitchToggle name={""} label="By Phone Number" />
      </FormCustom>
    </div>
  );
};
export default StyleguidePage;
