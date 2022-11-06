import styles from "./LoginPage.module.scss";
import Text from "@/Components/General/Text/Text";
import { FormCustom } from "@/Components/DataEntry/FormCustom";
import {Link, useNavigate} from "react-router-dom";
import Button from "@/Components/General/Button/Button";
import LoginLayout from "@/Components/Display/LoginLayout/LoginLayout";
import api from "@/Api/api";
import { useForm } from "antd/lib/form/Form";
import { ISignInArgs } from "@/Api/endpoints/auth.endpoint";
import sha256 from 'crypto-js/sha256';

const LoginPage = () => {
  const [form] = useForm<ISignInArgs>();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await form.validateFields();
      console.log("data", data);
      data.password = sha256(data.password).toString()
      const response = await api.auth.login(data);

      if (response && response.data.email) {
        localStorage.setItem('email', response.data.email);
        navigate({
          pathname: "confirmation",
        });
      }
    } catch (error) {
      console.log('login error', error);
    }
  };

  const sharedStyle = {
    opacity: 0.8,
  };

  return (
    <LoginLayout className={styles.login} title="Sign In">
      <FormCustom form={form}>
        <FormCustom.Input
          name="email"
          color="red"
          placeholder="Email"
          icon="user"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
          className={styles.login__input}
          type="text"
          inputStyle={sharedStyle}
          style={{ marginBottom: 8 }}
        />
        <FormCustom.Input
          name="password"
          color="red"
          placeholder="Password"
          className={styles.login__input}
          icon="password"
          type="password"
          inputStyle={sharedStyle}
          style={{ marginBottom: 8 }}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {
              min: 6,
            },
          ]}
        />
        <div className={styles.login__text}>
          <FormCustom.Checkbox name="remember" className="mb-0">
            <Text variant="white" weight={400} style={sharedStyle}>
              Remember me
            </Text>
          </FormCustom.Checkbox>
          <Link to="forgot-password">
            <Text variant="white" weight={400} style={sharedStyle}>
              Forgot Password?
            </Text>
          </Link>
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
            <Text
              tag="p"
              type="p"
              variant="white"
              weight={400}
              className={styles.login__pg}
              style={sharedStyle}
            >
              By signing in, you agree to the{" "}
              <a href="#">terms and conditions</a>.
            </Text>
          </FormCustom.Checkbox>
          <Text
            tag="p"
            type="p"
            variant="white"
            weight={400}
            className={styles.create}
          >
            <span style={sharedStyle}>New here?</span>
            <Link to="/">Create an Account</Link>
          </Text>
        </div>
      </FormCustom>
      {/* <button onClick={handleLogin}>Fake login</button> */}
    </LoginLayout>
  );
};

export default LoginPage;
