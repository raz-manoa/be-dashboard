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
import {useState} from "react";
import Alert from "antd/es/alert";

const LoginPage = () => {
  const [form] = useForm<ISignInArgs>();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleLogin = async () => {
    if (!checked) {
      setError('Please accept terms.')
      return
    } else {
      setError(null);
    }
    try {
      const data = await form.validateFields();
      data.password = sha256(data.password).toString()
      const response = await api.auth.login(data);

      if (response && response.data.email) {
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('password', data.password);
        navigate({
          pathname: "confirmation",
        });
      }
    } catch (error) {
      setError('Wrong email or password.')
    }
  };

  const sharedStyle = {
    opacity: 0.8,
  };

  return (
        <LoginLayout className={styles.login} title="Sign In">
          <div>
            {error && (
                <Alert message={error} type="info" className="mb-8" />
            )}
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
                active={checked}
                type="white"
                className={styles.login__btn}
                onClick={handleLogin}
            >
              Sign in
            </Button>
            <div style={{ textAlign: "center" }}>
              <FormCustom.Checkbox
                  value={checked}
                  onChange={() => {
                    setChecked(!checked);
                    console.log(checked);
                  }}
              >
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
          </div>

          {/* <button onClick={handleLogin}>Fake login</button> */}
        </LoginLayout>
  );
};

export default LoginPage;
