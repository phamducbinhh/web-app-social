"use client";
import { _posts as fakePosts } from "@/_mocks/_posts";
import { SplashScreen } from "@/components/loading-screen";
import { Newfeed } from "@/components/newfeed";
import ToggleGroup from "@/components/toggle-group/toggle-group";
import { useVerifiedUserValidator } from "@/queries/useAuth";
import { Cover, ProfileHeader, UserInfo } from "../components";

//--------------------------------------------------------------------------------------------------------------------------------

export default function ProfileView() {
  const { data: user, isPending } = useVerifiedUserValidator();

  if (isPending) return <SplashScreen />;

  return (
    <section className="w-full relative flex flex-col items-center bg-surface min-h-svh pb-[5rem] md:pb-0 lg:mr-[21.25rem] xl:mr-[30rem] transition-all duration-[0.5s]">
      <ProfileHeader />
      {user && <Cover user={user} />}
      {user && <UserInfo user={user} />}
      <section className="w-full p-3 flex flex-col gap-3">
        <ToggleGroup
          items={[
            { key: "1", label: "Posts" },
            { key: "2", label: "Featured" },
            { key: "3", label: "Media" },
          ]}
        />

        <Newfeed contentType="post" list={fakePosts} />
      </section>
    </section>
  );
}
