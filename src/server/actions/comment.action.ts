import { HttpStatusCode } from "@/configs/HttpStatusCode";
import commentsApiRequest from "@/services/comments.services";
import { getTokenCookies } from "./GetCookiesServer";

class CommentsAction {
  async getComments({ post_id }: { post_id: string | number }) {
    try {
      const token = (await getTokenCookies()) as string;
      const response = await commentsApiRequest.getAllComments({
        post_id,
        token,
      });

      if (response.code === HttpStatusCode.SUCCESS) {
        return response.metadata || [];
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
const commentAction = new CommentsAction();
export default commentAction;
