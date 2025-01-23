/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Avatar } from "@/components/avatar";
import {
  BookmarkIcon,
  CommentIcon,
  HeartIcon,
  MoreIcon,
  ShareIcon,
} from "@/components/icons";
import { MoreOptions } from "@/components/more-options";
import { Typography } from "@/components/typography";
import { formatLastChangedTime } from "@/helpers";
import { IPost } from "@/interfaces/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactItem } from "./react-item";

//--------------------------------------------------------------------------------------------------------

export default function Post({ post }: { post: IPost }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isMoreOptions, setIsMoreOptions] = React.useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleMoreOptions = () => {
    setIsMoreOptions(!isMoreOptions);
  };

  return (
    <div className="relative w-full flex flex-col rounded-[1.25rem] p-3 bg-neutral2-2 gap-3 cursor-pointer">
      <div className="flex items-start gap-5">
        <Avatar
          alt="avatar"
          src={
            post.author?.avatar ||
            "https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg"
          }
          avtClassName="rounded-full min-w-[2.75rem] size-[2.75rem] object-cover"
        />
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-items-auto items-center">
            <Typography
              level="base2m"
              className="text-primary justify-self-start opacity-80 mr-4"
            >
              {post.author?.firstName} {post.author?.lastName}
            </Typography>
            <Typography
              level="captionr"
              className="text-tertiary justify-self-start grow opacity-45"
            >
              {formatLastChangedTime(post.updated_at)}
            </Typography>

            <MoreIcon onClick={handleMoreOptions} />

            {isMoreOptions && <MoreOptions />}
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: post.content }}
            level="body2r"
            className="text-secondary opacity-80"
          />

          {post?.image && (
            <Link href={`/posts/${post.id}`}>
              <Image
                src={post.image}
                width={900}
                height={900}
                alt="post-image"
                loading="lazy"
                className="max-h-[20rem] md:max-h-[22.5rem] w-full rounded-[1.5rem] object-cover"
              />
            </Link>
          )}
        </div>
      </div>

      <div className="flex justify-end items-center md:justify-start md:pl-[48px]">
        <ReactItem
          value={post?.liked_count || 0}
          icon={<HeartIcon isActive={isLiked} />}
          onClick={handleLikeClick}
        />

        <ReactItem value={post?.comment_count || 0} icon={<CommentIcon />} />

        <div className="flex items-center md:grow justify-end gap-4">
          <BookmarkIcon height={24} width={24} />
          <ShareIcon height={24} width={24} />
        </div>
      </div>
    </div>
  );
}
