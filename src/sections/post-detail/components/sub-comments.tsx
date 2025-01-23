// components/Comment/SubComments.tsx
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

// Component SubComments hiển thị danh sách các comment con
const SubComments = ({ data }: { data: IComment[] }) => {
  return (
    <>
      {data.map((childComment) => (
        <main
          key={childComment.id}
          className={`w-full p-3 flex flex-col gap-3 relative bg-neutral2-2 rounded-[1.25rem] border border-neutral2-10`}
        >
          <div className="flex justify-start items-start gap-5">
            <Image
              width={44}
              height={44}
              src={
                childComment.users?.avatar ||
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
                  {childComment.users?.firstName} {childComment.users?.lastName}
                </Typography>
                <Typography
                  level="captionr"
                  className="text-tertiary justify-self-start grow opacity-45"
                >
                  {formatLastChangedTime(childComment.created_at)}
                </Typography>

                <MoreIcon />
              </div>
              <Typography level="body2r" className="text-secondary opacity-80">
                {childComment.content}
              </Typography>
            </div>
          </div>

          <div className="flex justify-end items-center md:justify-start md:pl-[48px]">
            <ReactItem
              value={childComment.liked_count || 0}
              icon={<HeartIcon isActive={false} />}
              onClick={() => {}}
            />

            <ReactItem
              value={childComment.reply_count || 0}
              icon={<CommentIcon />}
            />

            <div className="flex items-center md:grow justify-end gap-4">
              <BookmarkIcon height={24} width={24} />
              <ShareIcon height={24} width={24} />
            </div>
          </div>
        </main>
      ))}
    </>
  );
};

export default SubComments;
