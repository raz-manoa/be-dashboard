import { AxiosResponse } from "axios";
import apiInstance from "../apiInstance";

export interface ISignInArgs {
  email: string;
  password: string;
}

export interface VerifyArgs {
  otp: string;
  email: string;
  role: string;
}

interface ISignInResponse {
  email: string;
}

interface IVerifyResponse {
  company: string;
  token: string;
}

const authEndpoint = {
  login: (args: ISignInArgs): Promise<AxiosResponse<ISignInResponse>> => {
    const response = apiInstance.post("api/admin/auth/companies/login", {
      ...args,
    });

    return response;
  },
  verify: (args: VerifyArgs): Promise<AxiosResponse<IVerifyResponse>> => {
    const response = apiInstance.post("api/admin/auth/companies/otp/verify", {
      ...args,
    });

    return response;
  },
};

export default authEndpoint;
