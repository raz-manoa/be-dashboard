import { FormCustom } from "@/Components/DataEntry/FormCustom";
import LoginLayout from "@/Components/Display/LoginLayout/LoginLayout";
import Button from "@/Components/General/Button/Button";
import styles from "./SecurityConfimationPage.module.scss";
import api from "@/Api/api";
import {useForm} from "antd/lib/form/Form";
import {Link, useNavigate} from "react-router-dom";
import CompanyData from "@/Api/endpoints/companyData.endpoint";
import {IUser} from "@/Interfaces/IUser";
import Alert from "antd/es/alert";
import { useState } from "react";
import Text from "@/Components/General/Text/Text";

export default function SecurityConfimationPage() {
    const [form] = useForm<{ otp: string }>();
    const navigate = useNavigate();
    const [error, setError] = useState<any>(null);
    const [message, setMessage] = useState<any>(null);
    const sharedStyle = {
        opacity: 0.8,
        color: 'white'
    };
    const divStyle = {
        display: 'flex',
        marginTop: 30,
        justifyContent: 'end'
    }

    const verify = async () => {
        try {
            const data = await form.validateFields();
            const email = localStorage.getItem('email');
            if (email) {
                const payload = {
                    email: localStorage.getItem('email') || '',
                    otp: data.otp,
                    role: 'companyAdmin',
                };
                const response = await api.auth.verify(payload);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('companyId', response.data.company);
                const company = await api.companyData.getCompany(response.data.company, response.data.token);
                // @ts-ignore
                // const admin = company.CompanyAdmins.find(admin => admin.email === email);
                localStorage.setItem('company', JSON.stringify(company));
                localStorage.setItem('fullName', company.firstName + ' ' + company.lastName);
                localStorage.setItem('beId', company.identifyNumber.toString().padStart(8, `${company.identifyPrefix}000000`));
                navigate({
                    pathname: "app/dashboard",
                });
            }
        } catch (error) {
            setError('Wrong OTP.')
            console.log('Verify error', error);
        }
    };
    const resend = async () => {
        try {
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');
            if (email && password) {
                const payload = {
                    email, password
                };
                const response = await api.auth.login(payload);
                if (response && response.data.email) {
                    setMessage('OTP resent');
                    const btn = document.getElementById("resendBtn");
                    // @ts-ignore
                    btn.disabled = true;
                    setTimeout(()=> {
                        // @ts-ignore
                        btn.disabled = false;
                        console.log('Button Activated')}, 60000)
                }
            }
        } catch (error) {
            setError('Error resending OTP.')
        }
    };
    return (
        <LoginLayout title="Security  Confirmation">
            <div>
                {message && (
                    <Alert message={message} type="info" className="mb-8" />
                )}
                {error && (
                    <Alert message={error} type="info" className="mb-8" />
                )}
                <FormCustom form={form}>
                    <FormCustom.Input
                        name="otp"
                        color="red"
                        placeholder="Enter OTP PIN received by text"
                        type="text"
                        rules={[
                            {
                                required: true,
                                message: "Please enter OTP",
                            },
                        ]}
                        className={styles.field__confirm}
                    />
                    <Button active={true} type="white" className={styles.btn} onClick={verify}>
                        Confirm
                    </Button>
                    <div style={divStyle}>
                        <button id="resendBtn" style={sharedStyle} onClick={resend}>
                            Resend OTP
                        </button>
                    </div>
                </FormCustom>
            </div>
        </LoginLayout>
    );
}
