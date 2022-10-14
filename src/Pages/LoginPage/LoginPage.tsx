import styles from "./LoginPage.module.scss";
import Text from "@/Components/General/Text/Text";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import { Link } from "react-router-dom";
import Button from "@/Components/General/Button/Button";
import LoginInterface from "@/Components/Display/LoginInterface/LoginInterface";
const LoginPage = () => {
  const handleLogin = () => {
    localStorage.setItem("a", "logged");
  };
  return (
    <LoginInterface className={styles.login} title="login">
      <FormCustom>
        <FormCustom.Input
          name="example-2"
          color="red"
          placeholder="Email"
          icon="user"
          type="email"
        />
        <FormCustom.Input
          name="example-2"
          color="red"
          placeholder="Password"
          icon="password"
          type="password"
        />
        <div className={styles.login__text}>
          <FormCustom.Checkbox>Remember me</FormCustom.Checkbox>
          <Link to="forgot-password">Forgot Password ?</Link>
        </div>
        <Button
          type="white"
          className={styles.login__btn}
          onClick={handleLogin}
        >
          Sign in
        </Button>
        <div style={{ textAlign: "center" }}>
          <FormCustom.Checkbox>
            <Text tag="p" type="p" variant="white" className={styles.login__pg}>
              By signing in, you agree to the{" "}
              <a href="#">terms and conditions</a>.
            </Text>
          </FormCustom.Checkbox>
          <Text tag="p" type="p" variant="white" className={styles.create}>
            New here ?<Link to="/">Create an Account</Link>
          </Text>
        </div>
      </FormCustom>
      {/* <button onClick={handleLogin}>Fake login</button> */}
    </LoginInterface>
  );
};

export default LoginPage;
