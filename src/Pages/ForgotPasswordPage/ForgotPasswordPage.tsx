import { FormCustom } from "@/Components/DataEntry/FormCustom";
import LoginLayout from "@/Components/Display/LoginLayout/LoginLayout";
import styles from "./ForgotPasswordPage.module.scss";
import Text from "@/Components/General/Text/Text";
import { useForm } from "antd/es/form/Form";
import React from "react";
import Button from "@/Components/General/Button/Button";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [form] = useForm();
  const navigate = useNavigate();
  const navigateReset = () => {
    navigate({
      pathname: "confirmation",
    });
  };
  return (
    <LoginLayout className={styles.forgot__password} title="Forgot Password?">
      <FormCustom form={form}>
        <FormCustom.Input
          name="example-2"
          color="red"
          placeholder="Email"
          icon="user"
          type="email"
        />
        <Button type="white" className={styles.btn} onClick={navigateReset}>
          Reset password
        </Button>
      </FormCustom>
    </LoginLayout>
  );
}
