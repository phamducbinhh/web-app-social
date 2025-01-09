import SidebarRight from "@/layouts/components/sidebar-right";
import MainAppLayout from "@/layouts/main-layout";
import SidebySideLayout from "@/layouts/sbs-layout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainAppLayout>
      <SidebySideLayout sideComponent={<SidebarRight />}>
        {children}
      </SidebySideLayout>
    </MainAppLayout>
  );
}
