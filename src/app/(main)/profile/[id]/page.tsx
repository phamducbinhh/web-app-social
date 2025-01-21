import { IUserProfile } from "@/interfaces/user";
import ProfileUserView from "@/sections/profile/view/profile-user";
import userAction from "@/server/actions/user.action";

async function fetchProfile<T>(id: string | number): Promise<T | null> {
  return (await userAction.getUserProfile({ user_id: id })) as Promise<T>;
}
export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const userInfo = await fetchProfile<IUserProfile>(id);

  if (!userInfo) return <></>;

  return <ProfileUserView userInfo={userInfo as IUserProfile} />;
}
