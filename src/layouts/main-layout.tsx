import Sidebar from "./components/sidebar";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="" className="h-fit block md:flex">
      <Sidebar />
      <main className="flex-1 flex-grow w-full min-h-fit overflow-hidden">
        {children}
      </main>
    </div>
  );
}
