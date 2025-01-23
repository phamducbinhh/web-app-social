import { HttpStatusCode } from "@/configs/HttpStatusCode";
import postApiRequest from "@/services/post.services";
import { getTokenCookies } from "./GetCookiesServer";

class PostAction {
  async getPosts({
    limit,
    page,
    type,
  }: {
    limit?: number;
    page?: number;
    type?: string;
  }) {
    try {
      const token = (await getTokenCookies()) as string;
      const response = await postApiRequest.getAllPosts({
        limit,
        page,
        type,
        token,
      });

      if (response.code === HttpStatusCode.SUCCESS) {
        return response.metadata.items || [];
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

  async getPostById({ post_id }: { post_id: string | number }) {
    try {
      const token = (await getTokenCookies()) as string;
      const response = await postApiRequest.getPostsById({
        post_id,
        token,
      });

      if (response && response.code === HttpStatusCode.SUCCESS) {
        return response.metadata || {};
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
const postAction = new PostAction();
export default postAction;
