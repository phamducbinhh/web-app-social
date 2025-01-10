"use client";
export default function SplashScreen({
  className,
  ...other
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute right-0 bottom-0 w-full h-screen z-[9998] flex items-center justify-center bg-black/60 ${className}`}
      {...other}
    >
      <div className="relative">
        {/* Outer Circle */}
        <div className="w-[80px] h-[80px] absolute border border-surface opacity-25 rounded-full animate-pulse"></div>

        {/* Inner Circle with Color */}
        <div className="w-[60px] h-[60px] absolute border-[6px] border-t-secondary border-r-secondary border-b-transparent border-l-transparent opacity-90 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
