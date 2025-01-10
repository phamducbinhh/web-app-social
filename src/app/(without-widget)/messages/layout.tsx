import ConversationSidebarWrapper from "@/sections/messages/components/conversation-wrapper";
import { ReactNode } from "react";

export default function MessagesLayout({ children }: { children: ReactNode }) {
  return <ConversationSidebarWrapper>{children}</ConversationSidebarWrapper>;
}
