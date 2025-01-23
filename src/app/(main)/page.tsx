import { IPost } from "@/interfaces/post";
import HomeView from "@/sections/home/view/home-view";
import postAction from "@/server/actions/post.action";

//-------------------------------------------------------------------------
export const metadata = {
  title: "Home Page",
};

type SearchParams = Promise<{
  limit?: number;
  page?: number;
  type?: string;
}>;

async function fetchPost<T>({
  limit,
  page,
  type,
}: {
  limit?: number;
  page?: number;
  type?: string;
}): Promise<T[]> {
  return (await postAction.getPosts({ limit, page, type })) as Promise<T[]>;
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { limit, page, type } = await searchParams;

  const posts = await fetchPost<IPost>({
    limit: limit || 10,
    page: page || 1,
    type: (type as string) || "",
  });

  return <HomeView posts={posts} />;
}
