import { makeAutoObservable, observable } from "mobx";

export interface BreadcrumbItemType {
  label: string;
  path?: string;
}

export class BreadcrumbStore {
  trail: BreadcrumbItemType[] = [];

  constructor(trail: BreadcrumbItemType[]) {
    makeAutoObservable(this, {
      trail: observable,
    });
  }
}
