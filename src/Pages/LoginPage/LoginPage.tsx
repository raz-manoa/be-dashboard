import React from "react";
import LoginImg from "@/Assets/login__img.jpg";
import styles from "./LoginPage.module.scss";
const LoginPage = () => {
  const handleLogin = () => {
    localStorage.setItem("a", "logged");
  };
  return (
    <div className={styles.login}>
      <img src={LoginImg} alt="login__img" className={styles.login__img} />
      <div className={styles.login__content}></div>
      <button onClick={handleLogin}>Fake login</button>
    </div>
  );
};

export default LoginPage;
