import { FormCustom } from "@/Components/DataEntry/FormCustom";
import LoginLayout from "@/Components/Display/LoginLayout/LoginLayout";
import Button from "@/Components/General/Button/Button";
import styles from "./SecurityConfimationPage.module.scss";
import api from "@/Api/api";
import {useForm} from "antd/lib/form/Form";
import {useNavigate} from "react-router-dom";
import CompanyData from "@/Api/endpoints/companyData.endpoint";
import {IUser} from "@/Interfaces/IUser";
import Alert from "antd/es/alert";
import { useState } from "react";

export default function SecurityConfimationPage() {
    const [form] = useForm<{ otp: string }>();
    const navigate = useNavigate();
    const [error, setError] = useState<any>(null);

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
                await localStorage.setItem('token', response.data.token);
                await localStorage.setItem('companyId', response.data.company);
                const company = await api.companyData.getCompany(response.data.company);
                // @ts-ignore
                // const admin = company.CompanyAdmins.find(admin => admin.email === email);
                await localStorage.setItem('company', JSON.stringify(company));
                await localStorage.setItem('fullName', company.firstName + ' ' + company.lastName);
                await localStorage.setItem('beId', company.identifyNumber.toString().padStart(8, `${company.identifyPrefix}000000`));
                navigate({
                    pathname: "app/dashboard",
                });
            }
        } catch (error) {
            setError('Wrong OTP.')
            console.log('Verify error', error);
        }
    };
    return (
        <LoginLayout title="Security  Confirmation">
            <div>
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
                </FormCustom>
            </div>
        </LoginLayout>
    );
}
