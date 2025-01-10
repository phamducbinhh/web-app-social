/* eslint-disable react/no-children-prop */
import { _media as fakeMedia } from "@/_mocks/_media";
import { _posts as fakePosts } from "@/_mocks/_posts";
import { CircleButton } from "@/components/button";
import { ArrowBackIcon, MoreIcon } from "@/components/icons";
import { SearchBar } from "@/components/search";
import ToggleGroup from "@/components/toggle-group/toggle-group";
import React from "react";
import ListItem from "./list-items";

//--------------------------------------------------------------------------------------------------------

const _nav = [
  { key: "1", label: "Post" },
  { key: "2", label: "Media" },
];

export default function BookmarkItems() {
  const [selectedTab, setSelectedTab] = React.useState("1");

  const filteredPosts = fakePosts.filter((post) => post.cateId === '1');
  const filteredMedia = fakeMedia.filter((media) => media.cateId === '1');

  return (
    <section className="block md:hidden w-full h-full md:h-screen flex-col p-3 md:pb-0 bg-surface lg:flex">
      <div className="flex items-center gap-2 pb-3">
        <CircleButton
          className="md:hidden p-2.5"
          children={<ArrowBackIcon />}
        />
        <ToggleGroup
          className="flex-[3]"
          items={_nav}
          onChange={(key) => setSelectedTab(key)}
        />
        <SearchBar
          className="hidden md:flex flex-[4]"
          placeholder="Search bookmarks..."
        />
        <CircleButton className="p-2.5" children={<MoreIcon />} />
      </div>

      <div className="max-h-screen pb-[8rem] md:pb-0 overflow-y-auto">
        {selectedTab === "1" ? (
          <ListItem contentType="post" list={filteredPosts} />
        ) : (
          <ListItem contentType="media" list={filteredMedia} />
        )}
      </div>
    </section>
  );
}
