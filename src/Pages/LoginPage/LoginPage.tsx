import React from "react";
import LoginImg from "@/Assets/login__img.jpg";
import styles from "./LoginPage.module.scss";
import Text from "@/Components/General/Text/Text";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { Form } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const handleLogin = () => {
    localStorage.setItem("a", "logged");
  };
  return (
    <div className={styles.login}>
      <img src={LoginImg} alt="login__img" className={styles.login__img} />
      <div className={styles.login__content}>
        <Text
          tag="h1"
          type="h1"
          variant="white"
          size={32}
          className={styles.title}
        >
          Sign In
        </Text>
        <Form>
          <FormCustom.Input
            name="example-2"
            color="red"
            placeholder="Email"
            icon="user"
          />
          <FormCustom.Input
            name="example-2"
            color="red"
            placeholder="Password"
            icon="password"
          />
        </Form>
        <div className={styles.login__text}>
          <Checkbox className={styles.checkbox}>Remember me</Checkbox>
          <Link to="/">Forgot Password?</Link>
        </div>
        <button onClick={handleLogin}>Fake login</button>
      </div>
    </div>
  );
};

export default LoginPage;
