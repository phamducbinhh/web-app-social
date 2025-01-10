/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useBreakPoint from "@/hooks/use-breakpoint";
import React from "react";
import { BookmarkFolder } from "../components";

//----------------------------------------------------------------------

export default function BookmarkView() {
  const { breakpoint } = useBreakPoint();
  const [showDetailOnly, setShowDetailOnly] = React.useState(false);

  const isMobile = breakpoint === "sm";

  const handleConversationClick = (id: any) => {
    console.log("🚀 ~ handleConversationClick ~ id:", id);
    if (isMobile) {
      setShowDetailOnly(true);
    }
  };
  return (
    <section className="w-full min-h-screen flex flex-col justify-start transition-all duration-[0.5s] lg:flex-row lg:items-start">
      {!isMobile || !showDetailOnly ? (
        <BookmarkFolder onConversationClick={handleConversationClick} />
      ) : null}
    </section>
  );
}
