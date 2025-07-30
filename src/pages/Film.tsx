import { useEffect } from "react";
import { useBreadcrumbContext } from "@/hooks/useBreadcrumbContext";
import { runInAction } from "mobx";
import { useSetBreadcrumb } from "@/hooks/useSetBreadcrumb";

export default function Film() {
  useSetBreadcrumb([
    { label: "Home", path: "/" },
    { label: "Film", path: "/film" },
  ]);

  return <div>Welcome to the Film Page</div>;
}
