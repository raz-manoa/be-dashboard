import React from "react";
import InputField from "../../Components/DataEntry/Input/Input";
import CardSave from "../../Components/Display/CardSave/CardSave";
import Button from "../../Components/General/Button/Button";
import Sidebar from "../../Layouts/Sidebar/Sidebar";

const StyleguidePage = () => {
  return (
    <div>
      <Button type="primary">BUTTON</Button>
      <Button type="secondary">BUTTON</Button>
      <Button type="white">BUTTON</Button>
      <Button type="default">BUTTON</Button>
      <CardSave />
    </div>
  );
};
export default StyleguidePage;
