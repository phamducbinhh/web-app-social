/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComposerInput } from "@/components/composer-input";
import { Post as PostComponent } from "@/components/post";
import { IComment } from "@/interfaces/comment";
import type { IPost } from "@/interfaces/post";
import { Comment as CommentComponent, SubHeader } from "../components";

export default function PostDetailView({
  post,
  comments,
}: {
  post: IPost;
  comments: IComment[];
}) {
  return (
    <SubHeader>
      <div className="h-full flex flex-col gap-2 items-center w-full">
        {post ? <PostComponent post={post} /> : <p>Post not found</p>}
        <section className="w-full max-h-screen grow flex flex-col justify-between items-start gap-2 rounded-[1.25rem] mb-3">
          <div className="flex flex-col gap-2 w-full overflow-y-auto">
            {comments &&
              comments?.length > 0 &&
              comments.map((comment: IComment) => (
                <CommentComponent key={comment.id} comment={comment} />
              ))}
          </div>

          <ComposerInput usedBy="reply" />
        </section>
      </div>
    </SubHeader>
  );
}
