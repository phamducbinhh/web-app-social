"use client";
import {
  BookmarkIcon,
  CommentIcon,
  HeartIcon,
  MoreIcon,
  ShareIcon,
} from "@/components/icons";
import { ReactItem } from "@/components/post/react-item";
import { Typography } from "@/components/typography";
import { formatLastChangedTime } from "@/helpers";
import { IComment } from "@/interfaces/comment";
import Image from "next/image";
import React from "react";
import SubComments from "./sub-comments";

export default function Comment({ comment }: { comment: IComment }) {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full p-3 flex flex-col gap-3 relative bg-neutral2-2 rounded-[1.25rem]">
      <div className="flex justify-start items-start gap-5">
        <Image
          width={44}
          height={44}
          src={
            comment.users?.avatar ||
            "https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg"
          }
          alt="avatar-user"
          className="rounded-full min-w-[2.75rem] size-[2.75rem] object-cover"
        />
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-items-auto items-center">
            <Typography
              level="base2m"
              className="text-primary justify-self-start opacity-80 mr-4"
            >
              {comment.users?.firstName} {comment.users?.lastName}
            </Typography>
            <Typography
              level="captionr"
              className="text-tertiary justify-self-start grow opacity-45"
            >
              {formatLastChangedTime(comment.created_at)}
            </Typography>

            <MoreIcon />
          </div>
          <Typography level="body2r" className="text-secondary opacity-80">
            {comment.content}
          </Typography>
        </div>
      </div>

      <div className="flex justify-end items-center md:justify-start md:pl-[48px]">
        <ReactItem
          value={comment.liked_count || 0}
          icon={<HeartIcon isActive={isLiked} />}
          onClick={handleLikeClick}
        />

        <ReactItem value={comment.reply_count || 0} icon={<CommentIcon />} />

        <div className="flex items-center md:grow justify-end gap-4">
          <BookmarkIcon height={24} width={24} />
          <ShareIcon height={24} width={24} />
        </div>
      </div>

      {comment.children && comment.children.length > 0 && (
        <SubComments data={comment.children as IComment[]} />
      )}
    </div>
  );
}
