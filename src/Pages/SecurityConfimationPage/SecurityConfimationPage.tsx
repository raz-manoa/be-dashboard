import { FormCustom } from "@/Components/DataEntry/FormCustom";
import LoginInterface from "@/Components/Display/LoginInterface/LoginInterface";
import Button from "@/Components/General/Button/Button";
import styles from "./SecurityConfimationPage.module.scss";
import React from "react";

export default function SecurityConfimationPage() {
  return (
    <LoginInterface title="Security  Confirmation">
      <FormCustom>
        <FormCustom.Input
          name="example-2"
          color="red"
          placeholder="Enter OTP PIN received by text"
          type="number"
          className={styles.field__confirm}
        />
        <Button type="white" className={styles.btn}>
          Confirm
        </Button>
      </FormCustom>
    </LoginInterface>
  );
}
