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
    GET_PROFILE: ({ name }: { name: string }) =>
      `${VERSION_PREFIX}/user/profile/${name}`,
  },
});
