import { useEffect } from "react";
import { useBreadcrumbContext } from "@/hooks/useBreadcrumbContext";
import { runInAction } from "mobx";
import { useSetBreadcrumb } from "@/hooks/useSetBreadcrumb";
import { ROUTES } from "@/types/routes";

export default function Film() {
  useSetBreadcrumb([
    { label: "Home", path: ROUTES.HOME },
    { label: "Film", path: ROUTES.FILM },
  ]);

  return <div>Welcome to the Film Page</div>;
}
