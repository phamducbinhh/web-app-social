"use server";

import { HttpStatusCode } from "@/configs/HttpStatusCode";
import userApiRequest from "@/services/user.services";
import { getTokenCookies } from "../actions/GetCookiesServer";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function updateUserProfile({ body }: { body: any }) {
  try {
    const token = (await getTokenCookies()) as string;
    return await userApiRequest.updateUserProfile({ body, token });
  } catch (error) {
    return {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
      data: null,
    };
  }
}
