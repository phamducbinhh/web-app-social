/* eslint-disable react/no-children-prop */
"use client";
import { CircleButton } from "@/components/button";
import { ArrowBackIcon, MoreIcon } from "@/components/icons";

//-------------------------------------------------------------------------

export default function Head() {
  const handleBack = () => {
    console.log("Back");
  };

  return (
    <section className="w-full absolute flex justify-between items-center gap-2 p-3 z-10">
      <CircleButton
        onClick={handleBack}
        className="p-2"
        children={<ArrowBackIcon />}
      />

      <CircleButton className="p-2" children={<MoreIcon />} />
    </section>
  );
}
