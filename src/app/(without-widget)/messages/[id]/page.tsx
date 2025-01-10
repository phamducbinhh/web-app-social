import ConversationDetail from "@/sections/messages/view/messages-detail-view";

export default function MessagesDetail({ params }: { params: { id: string } }) {
  return <ConversationDetail id={params.id} />;
}
