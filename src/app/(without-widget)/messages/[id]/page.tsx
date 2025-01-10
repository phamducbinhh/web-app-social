import ConversationDetail from "@/sections/messages/view/messages-detail-view";
import { use } from "react";

type Params = Promise<{ id: string }>;
export default function MessagesDetail(props: { params: Params }) {
  const params = use(props.params);
  const id = params.id;
  return <ConversationDetail id={id} />;
}
