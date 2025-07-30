import { makeAutoObservable, runInAction } from "mobx";

class IntroStore {
  currentIndex = 0;
  interval: number | null = null;

  constructor() {
    makeAutoObservable(this);
    this.startRotation();
  }

  startRotation() {
    this.interval = window.setInterval(() => {
      runInAction(() => {
        this.currentIndex = (this.currentIndex + 1) % 4;
      });
    }, 6000);
  }

  stopRotation() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

export const introStore = new IntroStore();
