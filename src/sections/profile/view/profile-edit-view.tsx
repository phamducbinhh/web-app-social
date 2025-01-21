"use client";
import AvatarUpdateDialog from "@/components/avatar/avatar-profile-dialog";
import { SplashScreen } from "@/components/loading-screen";
import { useVerifiedUserValidator } from "@/queries/useAuth";
import { useGlobalStore } from "@/stores/state";
import { Cover, ProfileHeader } from "../components";
import UserEditForm from "../components/edit-user-form";

export default function ProfileEditView() {
  const { data: user, isPending } = useVerifiedUserValidator();
  const { isOpenModal } = useGlobalStore();

  if (isPending) return <SplashScreen />;

  return (
    <section className="w-full relative flex flex-col items-center pb-[5rem] bg-surface min-h-svh md:pb-0 lg:mr-[21.25rem] xl:mr-[30rem] transition-all duration-[0.5s]">
      <ProfileHeader isEdit />
      {user && <Cover user={user} isEdit />}
      {user && <UserEditForm userInfo={user} />}
      {isOpenModal && <AvatarUpdateDialog userInfo={user} />}
    </section>
  );
}
