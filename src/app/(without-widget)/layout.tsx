import MainAppLayout from "@/layouts/main-layout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainAppLayout>{children}</MainAppLayout>;
}
