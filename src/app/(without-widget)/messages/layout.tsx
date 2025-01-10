/* eslint-disable @typescript-eslint/no-explicit-any */
// app/messages/page.tsx
"use client";
import useBreakPoint from "@/hooks/use-breakpoint";
import { ConversationSidebar } from "@/sections/messages/components";
import { useRouter } from "next-nprogress-bar";
import React from "react";

export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { breakpoint } = useBreakPoint();
  const [showDetailOnly, setShowDetailOnly] = React.useState(false);
  const router = useRouter();

  const isMobile = breakpoint === "sm";

  const handleConversationClick = (id: any) => {
    console.log("id", id);
    if (isMobile) {
      setShowDetailOnly(true);
    }
    router.push(`/messages/${id}`);
  };

  return (
    <section className="w-full h-full flex flex-col justify-start transition-all duration-[0.5s] lg:flex-row lg:items-start">
      {!isMobile || !showDetailOnly ? (
        <ConversationSidebar onConversationClick={handleConversationClick} />
      ) : null}

      {children}
    </section>
  );
}
