import BookmarkItems from "@/sections/bookmark/view/bookmark-view-detail";
import { use } from "react";

type Params = Promise<{ id: string }>;
export default function BookmarkDetail(props: { params: Params }) {
  const params = use(props.params);
  const id = params.id;
  return <BookmarkItems id={id} />;
}
