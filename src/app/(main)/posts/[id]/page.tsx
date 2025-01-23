import { IComment } from "@/interfaces/comment";
import { IPost } from "@/interfaces/post";
import PostDetailView from "@/sections/post-detail/view/post-detail-view";
import commentAction from "@/server/actions/comment.action";
import postAction from "@/server/actions/post.action";

type Params = Promise<{ id: string }>;

async function fetchPostDetails<T>(id: string | number): Promise<T> {
  return (await postAction.getPostById({ post_id: id })) as Promise<T>;
}

async function fetchComments<T>(id: string | number): Promise<T[]> {
  return (await commentAction.getComments({ post_id: id })) as Promise<T[]>;
}

export default async function PostDetail(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  // Sử dụng Promise.all để thực hiện các lời gọi API song song
  const [post, comments] = await Promise.all([
    fetchPostDetails<IPost>(id),
    fetchComments(id),
  ]);

  return <PostDetailView post={post} comments={comments as IComment[]} />;
}
