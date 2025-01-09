import { AuthProvider } from "@/context/auth-context";
import React from "react";
import QueryProvider from "./query-provider";

//-------------------------------------------------------------------------------------------

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  );
}
