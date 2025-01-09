import Sidebar from "@/layouts/components/sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="" className="h-fit block md:flex">
      <Sidebar />
      <main className="flex-1 flex-grow w-full min-h-fit overflow-hidden">
        {children}
      </main>
    </div>
  );
}

