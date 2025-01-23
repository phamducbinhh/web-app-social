/* eslint-disable @typescript-eslint/no-explicit-any */

import { APP_API_ENDPOINT } from "@/configs/api";
import { METHOD_TYPE } from "@/configs/method";
import { apiBaseServiceInstance } from "@/lib/api";

class PostApiRequest {
  public getAllPosts({
    limit,
    page,
    type,
    token,
  }: {
    limit?: number;
    page?: number;
    type?: string;
    token?: string;
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.POST.GET_ALL_POSTS({
        limit,
        page,
        type,
      }),
      config: { method: METHOD_TYPE.GET, token },
    });
  }

  public getPostsById({
    post_id,
    token,
  }: {
    post_id: string | number;
    token?: string;
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.POST.GET_POST_BY_ID({ post_id }),
      config: {
        method: METHOD_TYPE.GET,
        token,
        next: { tags: ["post-details"] }, // Tag cho post
      },
    });
  }
}

const postApiRequest = new PostApiRequest();

export default postApiRequest;
