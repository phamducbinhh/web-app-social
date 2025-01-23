/* eslint-disable react/no-children-prop */
"use client";
import { Avatar } from "@/components/avatar";
import { CircleButton } from "@/components/button";
import { ComposerInput } from "@/components/composer-input";
import { AddIcon, Logo, SearchIcon } from "@/components/icons";
import NewPostModal from "@/components/new-post";
import { Post } from "@/components/post";
import { SearchBar } from "@/components/search";
import MobileSidebarTrigger from "@/components/sidebar-trigger/mobile-sidebar-trigger";
import ToggleGroup from "@/components/toggle-group/toggle-group";
import { IPost } from "@/interfaces/post";
import { useVerifiedUserValidator } from "@/queries/useAuth";
import React from "react";

//--------------------------------------------------------------------------------------------------------

export default function HomeView({ posts }: { posts: IPost[] }) {
  const [isPostShow, setIsPostShow] = React.useState(false);
  const [isSidebarShow, setIsSidebarShow] = React.useState(false);
  const { data: profile } = useVerifiedUserValidator();

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isPostShow) {
        setIsPostShow(false);
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isPostShow]);

  const toggleCreatePost = () => {
    setIsPostShow(!isPostShow);
  };

  const toggleSidebar = () => {
    setIsSidebarShow(!isSidebarShow);
  };

  if (!posts) return <></>;

  return (
    <>
      <div className="grow w-full flex flex-col gap-2 items-center py-2 px-3 pb-[6rem] md:pb-0">
        <div className="md:hidden w-full h-[2.75rem] flex justify-between">
          <Logo />
          <div className="flex items-center gap-2">
            <CircleButton
              onClick={toggleCreatePost}
              className="size-[2.75rem]"
              children={<AddIcon />}
            />
            <CircleButton
              className="size-[2.75rem]"
              children={<SearchIcon />}
            />

            <MobileSidebarTrigger onClick={toggleSidebar}>
              <Avatar
                src={"/img/avatar-7.png"}
                alt={"kohaku"}
                isOnline={true}
              />
            </MobileSidebarTrigger>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 mb-3">
          <ToggleGroup
            className="flex-[2]"
            items={[
              { key: "1", label: "For you" },
              { key: "2", label: "Following" },
            ]}
          />

          <SearchBar className="hidden md:flex-[2] md:flex grow bg-neutral3-60" />

          <CircleButton
            className="hidden md:block size-[44px] cursor-pointer"
            children={<AddIcon />}
            onClick={toggleCreatePost}
          />
        </div>

        <ComposerInput usedBy="post" />

        {posts.map((post: IPost) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      {isPostShow && (
        <NewPostModal onBack={toggleCreatePost} profile={profile} />
      )}
    </>
  );
}
