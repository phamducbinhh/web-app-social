import { HttpStatusCode } from "@/configs/HttpStatusCode";
import userApiRequest from "@/services/user.services";
import { getTokenCookies } from "./GetCookiesServer";

class UserAction {
  async getUserProfile({ user_id }: { user_id: string | number }) {
    try {
      const token = (await getTokenCookies()) as string;
      const response = await userApiRequest.getUserProfile({
        user_id,
        token,
      });

      if (response.code === HttpStatusCode.SUCCESS) {
        return response.metadata;
      }
    } catch (error) {
      return {
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
        data: null,
      };
    }
  }
}
const userAction = new UserAction();
export default userAction;
