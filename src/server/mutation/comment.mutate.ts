"use server";
import { HttpStatusCode } from "@/configs/HttpStatusCode";
import commentsApiRequest from "@/services/comments.services";
import { getTokenCookies } from "../actions/GetCookiesServer";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function createComment({ body }: { body: any }) {
  try {
    const token = (await getTokenCookies()) as string;
    const response = await commentsApiRequest.createComment({ body, token });

    if (response.code === HttpStatusCode.CREATED) {
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
