import Icon from "@/Components/General/Icon/Icon";
import { Select } from "antd";
import React from "react";
import FormInput from "../FormInput/FormInput";

export default function Amout() {
  const { Option } = Select;
  return (
    <div>
      <FormInput label="from:" type="number" color="grey" />
      <Select suffixIcon={<Icon icon="chevron" />}>
        <Option value="test">test</Option>
        <Option value="test1">test2</Option>
      </Select>
    </div>
  );
}
