import { IPost } from "@/interfaces/post";
import PostDetailView from "@/sections/post-detail/view/post-detail-view";
import postAction from "@/server/actions/post.action";

type Params = Promise<{ id: string }>;

async function fetchPostDetails<T>(id: string | number): Promise<T> {
  return (await postAction.getPostById({ post_id: id })) as Promise<T>;
}
export default async function PostDetail(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  const post = await fetchPostDetails<IPost>(id);

  return <PostDetailView post={post} />;
}
