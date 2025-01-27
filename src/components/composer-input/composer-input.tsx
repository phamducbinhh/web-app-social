"use client";
import { Avatar } from "@/components/avatar";
import {
  Button,
  EmojiButton,
  GifButton,
  ImageButton,
  TagButton,
} from "@/components/button";
import { Typography } from "@/components/typography";
import { HttpStatusCode } from "@/configs/HttpStatusCode";
import { useVerifiedUserValidator } from "@/queries/useAuth";
import { createComment } from "@/server/mutation/comment.mutate";
import { useState } from "react";
import { toast } from "react-toastify";

//-------------------------------------------------------------------------
interface PostContentProps {
  usedBy: "post" | "reply";
  post_id?: string | number;
}

export default function ComposerInput({ usedBy, post_id }: PostContentProps) {
  const [isInputFocused, setInputFocused] = useState(false);
  const { data: profile, isPending } = useVerifiedUserValidator();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isValue, setIsValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValue || isValue.trim().length === 0) return;

    try {
      setIsSubmitting(true);

      if (usedBy === "reply") {
        const commentData = {
          post_id: Number(post_id),
          content: isValue,
        };
        const response = await createComment({ body: commentData });
        if (response.code === HttpStatusCode.CREATED) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      setIsValue("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full flex ${
        isInputFocused ? "flex-col bg-neutral3-70" : "flex-row bg-neutral2-2"
      } gap-3 items-center justify-between p-3 bottom-0  rounded-[1.25rem]`}
    >
      <div
        id="reply-content"
        className="w-full flex justify-between items-center gap-3 grow"
      >
        {!isPending && profile && (
          <Avatar
            avtClassName="rounded-full size-[44px]"
            src={profile?.avatar || "/img/avatar-1.png"}
          />
        )}

        <input
          type="text"
          placeholder={
            usedBy === "post" ? "Start a post..." : "Post your reply..."
          }
          id="input-reply"
          className="!bg-transparent text-tertiary placeholder:text-tertiary grow opacity-50 focus:outline-none focus:bg-transparent focus:opacity-100"
          onFocus={() => setInputFocused(true)}
          value={isValue}
          onChange={handleChange}
        />
      </div>

      <div
        id="post-action"
        className={`${
          isInputFocused ? "w-full" : "w-fit"
        }  flex items-center justify-between`}
      >
        {/* Chỉ hiển thị tool-reply khi input được focus */}
        {isInputFocused && (
          <div id="tool-reply" className="flex gap-1 items-center">
            <EmojiButton />
            <ImageButton />
            <GifButton />
            <TagButton />
          </div>
        )}

        <Button
          disabled={isInputFocused === false || isSubmitting}
          className={`px-[1.5rem] py-[0.75rem]`}
          type="submit"
          child={
            <Typography className="text-secondary" level="base2sm">
              {isSubmitting
                ? "Posting..."
                : usedBy === "post"
                ? "Post"
                : "Reply"}
            </Typography>
          }
        />
      </div>
    </form>
  );
}
