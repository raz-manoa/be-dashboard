import { AxiosResponse } from "axios";
import apiInstance from "../apiInstance";

export interface ISignInArgs {
  username: string;
  password: string;
}

interface ISignInResponse {
  token: string;
}
const authEndpoint = {
  signIn: (args: ISignInArgs): Promise<AxiosResponse<ISignInResponse>> => {
    const response = apiInstance.post("/signIn", {
      ...args,
    });

    return response;
  },
};

export default authEndpoint;
