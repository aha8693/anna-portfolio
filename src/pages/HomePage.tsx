import { useEffect } from "react";
import { useBreadcrumbContext } from "@/hooks/useBreadcrumbContext";

export default function HomePage() {
  const breadcrumbStore = useBreadcrumbContext();

  useEffect(() => {
    breadcrumbStore.trail = [{ label: "Home", path: "/" }];
  }, []);

  return <div>Welcome to the Home Page</div>;
}
