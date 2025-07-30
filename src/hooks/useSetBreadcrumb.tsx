import { useEffect } from "react";
import { runInAction } from "mobx";
import { useBreadcrumbContext } from "./useBreadcrumbContext";

export const useSetBreadcrumb = (trail: { label: string; path?: string }[]) => {
  const breadcrumbStore = useBreadcrumbContext();

  useEffect(() => {
    runInAction(() => {
      breadcrumbStore.trail = trail;
    });
  }, [JSON.stringify(trail)]);
};
