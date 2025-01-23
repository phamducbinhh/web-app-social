/* eslint-disable react/no-children-prop */
"use client";
import { CircleButton } from "@/components/button";
import { ArrowBackIcon, ExplandIcon } from "@/components/icons";
import { useRouter } from "next-nprogress-bar";

//----------------------------------------------------------------------------
type Props = {
  children: React.ReactNode;
};

export default function SubHeader({ children }: Props) {
  const router = useRouter();
  return (
    <section className="w-full min-h-screen bg-surface p-3 pb-[5rem] md:pb-0 transition-all duration-[0.5s]">
      <section className="mb-3 flex justify-between items-center">
        <CircleButton
          children={<ArrowBackIcon />}
          disabled={false}
          className="cursor-pointer md:bg-button rounded-full p-[0.625rem]"
          onClick={() => router.back()}
        />

        <CircleButton
          children={<ExplandIcon />}
          disabled={false}
          className="cursor-pointer md:bg-button rounded-full p-[0.625rem]"
        />
      </section>
      <section className="w-full flex flex-col gap-2 items-center">
        {children}
      </section>
    </section>
  );
}
