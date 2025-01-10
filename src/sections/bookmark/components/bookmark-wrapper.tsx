/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useBreakPoint from "@/hooks/use-breakpoint";
import { useRouter } from "next-nprogress-bar";
import React from "react";
import { BookmarkFolder } from "../components";

//----------------------------------------------------------------------

export default function BookmarkWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { breakpoint } = useBreakPoint();
  const [showDetailOnly, setShowDetailOnly] = React.useState(false);
  const router = useRouter();
  const isMobile = breakpoint === "sm";

  const handleConversationClick = (id: any) => {
    if (isMobile) {
      setShowDetailOnly(true);
    }
    router.push(`/bookmarks/${id}`);
  };
  return (
    <section className="w-full min-h-screen flex flex-col justify-start transition-all duration-[0.5s] lg:flex-row lg:items-start">
      {!isMobile || !showDetailOnly ? (
        <BookmarkFolder onConversationClick={handleConversationClick} />
      ) : null}

      {children}
    </section>
  );
}
