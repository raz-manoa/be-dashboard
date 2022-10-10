import React from "react";
import LoginImg from "@/Assets/login__img.jpg";
import styles from "./LoginPage.module.scss";
import Text from "@/Components/General/Text/Text";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { Form } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Link } from "react-router-dom";
import Button from "@/Components/General/Button/Button";
const LoginPage = () => {
  const handleLogin = () => {
    localStorage.setItem("a", "logged");
  };
  return (
    <div className={styles.login}>
      <div className={styles.login__img}>
        <img src={LoginImg} alt="" loading="lazy" />
      </div>
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
        <FormCustom>
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
          <div className={styles.login__text}>
            <Checkbox className={styles.checkbox}>Remember me</Checkbox>
            <Link to="/">Forgot Password ?</Link>
          </div>
          <Button
            type="white"
            className={styles.login__btn}
            onClick={handleLogin}
          >
            Sign in
          </Button>
        </FormCustom>
        <Text tag="p" type="p" variant="white" className={styles.login__pg}>
          By signing in, you agree to the terms and conditions.
        </Text>
        <Text tag="p" type="p" variant="white" className={styles.create}>
          New here ?<Link to="/">Create an Account</Link>
        </Text>
        {/* <button onClick={handleLogin}>Fake login</button> */}
      </div>
    </div>
  );
};

export default LoginPage;
