import { ExploreIcon, MessageIcon, NotificationIcon } from "@/components/icons";
import Bookmark from "@/components/icons/bookmark";
import HomeIcon from "@/components/icons/home";
import Profile from "@/components/icons/profile";
import { JSX } from "react";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: "Home",
    update: { status: true, count: 1 },
    Icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "Notifications",
    update: { status: true, count: 12 },
    Icon: <NotificationIcon />,
    path: "/notifications",
  },
  {
    title: "Messages",
    Icon: <MessageIcon />,
    path: "/messages",
  },
  {
    title: "Bookmarks",
    Icon: <Bookmark width={24} height={24} />,
    path: "/bookmarks",
  },
  {
    title: "My Profile",
    Icon: <Profile />,
    path: "/profile",
  },
  {
    title: "Explore",
    Icon: <ExploreIcon />,
    path: "/explore",
  },
];

export type NavigationItem = {
  update?: { status: boolean; count: number };
  title: string;
  Icon: JSX.Element;
  path: string;
};
