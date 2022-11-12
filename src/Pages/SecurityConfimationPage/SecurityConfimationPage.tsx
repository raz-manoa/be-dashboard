import { FormCustom } from "@/Components/DataEntry/FormCustom";
import LoginLayout from "@/Components/Display/LoginLayout/LoginLayout";
import Button from "@/Components/General/Button/Button";
import styles from "./SecurityConfimationPage.module.scss";
import api from "@/Api/api";
import {useForm} from "antd/lib/form/Form";
import {useNavigate} from "react-router-dom";
import CompanyData from "@/Api/endpoints/companyData.endpoint";
import {IUser} from "@/Interfaces/IUser";

export default function SecurityConfimationPage() {
    const [form] = useForm<{ otp: string }>();
    const navigate = useNavigate();

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
                await localStorage.setItem('companyId', response.data.company);
                await localStorage.setItem('token', response.data.token);
                const company = await api.companyData.getCompany(response.data.company);
                await localStorage.setItem('company', JSON.stringify(company));
                await localStorage.setItem('fullName', company.firstName + ' ' + company.lastName);
                navigate({
                    pathname: "app/dashboard",
                });
            }
        } catch (error) {
            console.log('Verify error', error);
        }
    };
    return (
        <LoginLayout title="Security  Confirmation">
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
                <Button type="white" className={styles.btn} onClick={verify}>
                    Confirm
                </Button>
            </FormCustom>
        </LoginLayout>
    );
}
