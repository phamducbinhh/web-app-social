"use client";

import useBreakPoint from "@/hooks/use-breakpoint";
import React, { useEffect, useState } from "react";

type SBSLProps = {
  sideComponent: React.ReactNode;
  children?: React.ReactNode;
};

const SidebySideLayout = ({ sideComponent, children }: SBSLProps) => {
  const { breakpoint } = useBreakPoint();
  const [isLargeScreen, setIsLargeScreen] = useState(true); // Mặc định hiển thị sidebar trên SSR

  useEffect(() => {
    // Cập nhật trạng thái khi client xác định breakpoint
    setIsLargeScreen(
      breakpoint === "lg" ||
        breakpoint === "xl" ||
        breakpoint === "2xl" ||
        breakpoint === "3xl"
    );
  }, [breakpoint]);

  return (
    <div className="h-full flex">
      <div className="flex-1 h-full overflow-auto no-scrollbar bg-surface">
        {children}
      </div>
      {isLargeScreen && (
        <SideWidget
          className={`h-full w-85 transition-all duration-300 ${
            isLargeScreen ? "w-85 2xl:w-120" : ""
          }`}
        >
          {sideComponent}
        </SideWidget>
      )}
    </div>
  );
};

type SideWidgetProps = {
  className?: string;
  children?: React.ReactNode;
};

function SideWidget({ className, children }: SideWidgetProps) {
  return <aside className={className}>{children}</aside>;
}

export default SidebySideLayout;
