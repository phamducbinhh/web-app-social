import ProfileUserView from "@/sections/profile/view/profile-user";
import { use } from "react";

type Params = Promise<{ id: string }>;
export default function ProfilePage(props: { params: Params }) {
  const params = use(props.params);
  const id = params.id;
  return <ProfileUserView userId={id} />;
}
