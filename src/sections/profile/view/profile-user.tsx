import ToggleGroup from "@/components/toggle-group/toggle-group";
import { IUserProfile, IUserSimple } from "@/interfaces/user";
import { Cover, ProfileHeader, UserInfo } from "../components";

interface ProfileUserViewProps {
  userInfo: IUserSimple | IUserProfile;
}

export default function ProfileUserView({ userInfo }: ProfileUserViewProps) {
  return (
    <section className="w-full relative flex flex-col items-center bg-surface min-h-svh pb-[5rem] md:pb-0 lg:mr-[21.25rem] xl:mr-[30rem] transition-all duration-[0.5s]">
      <ProfileHeader />
      {userInfo && <Cover user={userInfo as IUserSimple} />}
      {userInfo && <UserInfo user={userInfo as IUserProfile} />}
      <section className="w-full p-3 flex flex-col gap-3">
        <ToggleGroup
          items={[
            { key: "1", label: "Posts" },
            { key: "2", label: "Featured" },
            { key: "3", label: "Media" },
          ]}
        />

        {/* <Newfeed contentType="post" list={fakePosts} /> */}
      </section>
    </section>
  );
}
