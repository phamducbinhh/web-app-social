"use client";
import { Typography } from "@/components/typography";
import useBreakPoint from "@/hooks/use-breakpoint";
import Image from "next/image";

export default function BookmarkView() {
  const { breakpoint } = useBreakPoint();

  const hideConsolidation = breakpoint === "sm" || breakpoint === "md";

  return (
    <>
      {!hideConsolidation ? (
        <section className="bg-surface h-screen w-full grow flex flex-col justify-center items-center gap-3 py-[1.75rem]">
          <Image
            width={100}
            height={100}
            src="/svg/ai_data_consolidation.svg"
            alt="no-followers"
            className="w-fit object-contain mb-[1.75rem]"
          />
          <Typography level="title" className="text-primary opacity-60">
            Select Folder
          </Typography>
          <Typography level="base2r" className="text-secondary opacity-50">
            To start viewing bookmarks
          </Typography>
        </section>
      ) : null}
    </>
  );
}
