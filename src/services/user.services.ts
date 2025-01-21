/* eslint-disable @typescript-eslint/no-explicit-any */
import { APP_API_ENDPOINT } from "@/configs/api";
import { METHOD_TYPE } from "@/configs/method";
import { apiBaseServiceInstance } from "@/lib/api";

class UserApiRequest {
  public getUserProfile({
    user_id,
    token,
  }: {
    user_id: string | number;
    token?: string;
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.GET_PROFILE({ user_id }),
      config: { method: METHOD_TYPE.GET, token },
    });
  }

  public updateUserProfile({
    body,
    token,
  }: {
    body: any;
    token?: string;
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.UPDATE_PROFILE,
      config: { method: METHOD_TYPE.PATCH, body, token },
    });
  }
}

const userApiRequest = new UserApiRequest();

export default userApiRequest;
