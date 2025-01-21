/* eslint-disable react/no-children-prop */
"use client";
import { Button, CircleButton } from "@/components/button";
import {
  CommentIcon,
  EditIcon,
  LinkIcon,
  ProfileIcon,
  ShareIcon,
} from "@/components/icons";
import { Typography } from "@/components/typography";
import { IUserProfile } from "@/interfaces/user";
import { useVerifiedUserValidator } from "@/queries/useAuth";
import Link from "next/link";

//-------------------------------------------------------------------------

interface UserInfoProps {
  user: IUserProfile;
}

export default function UserInfo({ user }: UserInfoProps) {
  const { data: account } = useVerifiedUserValidator();

  return (
    <section className="w-full flex flex-col gap-[1.25rem] p-6 mt-6 ">
      <div
        id="profile-info-header"
        className="flex items-center gap-[0.4375rem]"
      >
        <div className="grow opacity-80">
          <Typography level="title" className="text-primary">
            {user.first_name} {user.last_name}
          </Typography>
          <Typography level="base2r" className="text-tertiary">
            {(account?.id === user?.id && `@${account.username}`) ||
              `${user.first_name} ${user.last_name}`}
          </Typography>
        </div>

        <CircleButton
          children={<ShareIcon width={24} height={24} />}
          className="p-2.5"
        />

        {account?.id !== user?.id && (
          <Button
            child={
              <Typography level="base2r" className="text-tertiary">
                Follow
              </Typography>
            }
            className="p-2.5"
          />
        )}

        {account?.id === user.id && (
          <Link href={`/profile/${user.id}/edit`}>
            <CircleButton children={<EditIcon />} className="p-2.5 md:hidden" />
            <CircleButton
              children={
                <Typography level="base2sm" className="text-secondary">
                  Edit profile
                </Typography>
              }
              className="hidden md:block px-5 py-2"
            />
          </Link>
        )}
      </div>
      <Typography level="body2r" className="text-tertiary opacity-80">
        {user.bio}
      </Typography>

      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-sm base opacity-80 cursor-pointer rounded-button px-3 py-2 hover:bg-neutral2-5">
            <CommentIcon />

            <Typography
              level="base2r"
              className="text-primary flex items-center gap-2"
            >
              {user.post_count || 0}
              <Typography level="base2r" className="text-tertiary">
                posts
              </Typography>
            </Typography>
          </div>

          <div className="flex items-center gap-2 text-sm base opacity-80 cursor-pointer rounded-button px-3 py-2 hover:bg-neutral2-5">
            <ProfileIcon />
            <Typography
              level="base2r"
              className="text-primary flex items-center gap-2"
            >
              {user.follow_count || 0}
              <Link href={`/profile/${user.id}/followers`}>
                <Typography level="base2r" className="text-tertiary">
                  followers
                </Typography>
              </Link>
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm base opacity-80 cursor-pointer rounded-button px-3 py-2 hover:bg-neutral2-5">
          <LinkIcon />
          <a href={user.website_url}>
            <Typography
              level="base2r"
              className="text-primary flex items-center gap-2"
            >
              {user.website_url}
            </Typography>
          </a>
        </div>
      </div>
    </section>
  );
}
