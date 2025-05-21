// useBreadcrumbContext.tsx
import { createContext, ReactNode, useContext } from "react";
import { BreadcrumbStore } from "@/stores/breadcrumbStore";

const breadcrumbContext = createContext<BreadcrumbStore | null>(null);

export const useBreadcrumbContext = () => {
  const ctx = useContext(breadcrumbContext);
  if (!ctx) throw new Error("Breadcrumb context is missing");
  return ctx;
};

interface BreadcrumbProviderProps {
  children: ReactNode;
  data: BreadcrumbStore;
}

export const BreadcrumbProvider = ({
  children,
  data,
}: BreadcrumbProviderProps) => {
  return (
    <breadcrumbContext.Provider value={data}>
      {children}
    </breadcrumbContext.Provider>
  );
};
