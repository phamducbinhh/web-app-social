import HomeView from "@/sections/home/view/home-view";

//-------------------------------------------------------------------------
export const metadata = {
  title: "Home Page",
};

export default async function Home() {
  // Giả lập thời gian tải 2 giây
  return <HomeView />;
}
