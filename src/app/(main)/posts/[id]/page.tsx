import PostDetailView from "@/sections/post-detail/view/post-detail-view";
import { use } from "react";

type Params = Promise<{ id: string }>;
export default function PostDetail(props: { params: Params }) {
  const params = use(props.params);
  const id = params.id;
  return <PostDetailView id={id} />;
}
