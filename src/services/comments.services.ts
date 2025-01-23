/* eslint-disable @typescript-eslint/no-explicit-any */

import { APP_API_ENDPOINT } from "@/configs/api";
import { METHOD_TYPE } from "@/configs/method";
import { apiBaseServiceInstance } from "@/lib/api";

class CommentsApiRequest {
  public getAllComments({
    post_id,
    token,
  }: {
    post_id: string | number;
    token?: string;
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.COMMENTS.GET_ALL_COMMENT_BY_POST_ID({ post_id }),
      config: {
        method: METHOD_TYPE.GET,
        token,
        next: {
          tags: [`comments-${post_id}`],
        },
      },
    });
  }

  public createComment({
    body,
    token,
  }: {
    body: any;
    token?: string;
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.COMMENTS.CREATE_COMMENT,
      config: { method: METHOD_TYPE.POST, body, token },
    });
  }
}

const commentsApiRequest = new CommentsApiRequest();

export default commentsApiRequest;
