const VERSION_PREFIX = "/api/v1";

export const APP_API_ENDPOINT = Object.freeze({
  AUTH: {
    LOGIN: `${VERSION_PREFIX}/auth/login`,
    REGISTER: `${VERSION_PREFIX}/auth/register`,
    VERIFIED_USER_VALIDATOR: `${VERSION_PREFIX}/user/profile`,
    LOG_OUT: `${VERSION_PREFIX}/auth/logout`,
  },
  USER: {
    VERIFY_EMAIL: `${VERSION_PREFIX}/user/verify-email`,
    FORGOT_PASSWORD: `${VERSION_PREFIX}/user/forgot-password`,
    RESET_PASSWORD: `${VERSION_PREFIX}/user/reset-password`,
    GET_PROFILE: ({ user_id }: { user_id: string | number }) =>
      `${VERSION_PREFIX}/user/profile/${user_id}`,
    UPDATE_PROFILE: `${VERSION_PREFIX}/user/profile`,
  },
  MEDIA: {
    UPLOAD_MEDIA: `${VERSION_PREFIX}/media/upload`,
  },
  POST: {
    CREATE_POST: `${VERSION_PREFIX}/posts`,
    GET_POST_BY_ID: ({ post_id }: { post_id: string | number }) =>
      `${VERSION_PREFIX}/posts/${post_id}`,
    GET_ALL_POSTS: ({
      limit,
      page,
      type,
    }: {
      limit?: number;
      page?: number;
      type?: string;
    }) => `${VERSION_PREFIX}/posts?limit=${limit}&page=${page}&type=${type}`,
    GET_ALL_POSTS_BY_USER_ID: ({ user_id }: { user_id: string | number }) =>
      `${VERSION_PREFIX}/posts/user/${user_id}`,
    UPDATE_POST: ({ post_id }: { post_id: string | number }) =>
      `${VERSION_PREFIX}/posts/${post_id}`,
    DELETE_POST: ({ post_id }: { post_id: string | number }) =>
      `${VERSION_PREFIX}/post/${post_id}`,
  },
});
