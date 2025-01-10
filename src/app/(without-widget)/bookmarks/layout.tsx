import BookmarkWrapper from "@/sections/bookmark/components/bookmark-wrapper";
import { ReactNode } from "react";

export default function BookmarksLayout({ children }: { children: ReactNode }) {
  return <BookmarkWrapper>{children}</BookmarkWrapper>;
}
