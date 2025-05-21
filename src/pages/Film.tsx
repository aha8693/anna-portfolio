import { useEffect } from "react";
import { useBreadcrumbContext } from "@/hooks/useBreadcrumbContext";

export default function Film() {
  const breadcrumbStore = useBreadcrumbContext();

  useEffect(() => {
    breadcrumbStore.trail = [
      { label: "Home", path: "/" },
      { label: "Film", path: "/film" },
    ];
  }, []);

  return <div>Welcome to the Film Page</div>;
}
