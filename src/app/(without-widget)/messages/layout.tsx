import ConversationSidebarWrapper from "@/sections/messages/components/conversation-wrapper";
import { ReactNode } from "react";

export default function MessagesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-full flex flex-col justify-start transition-all duration-[0.5s] lg:flex-row lg:items-start">
      <ConversationSidebarWrapper>{children}</ConversationSidebarWrapper>
    </section>
  );
}
