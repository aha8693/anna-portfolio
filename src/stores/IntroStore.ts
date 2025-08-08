import { makeAutoObservable, runInAction } from "mobx";

class IntroStore {
  currentIndex = 0;
  interval: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  startRotation() {
    this.stopRotation(); // avoid multiple timers
    this.interval = window.setInterval(() => {
      runInAction(() => {
        this.currentIndex = (this.currentIndex + 1) % 4;
      });
    }, 15000);
  }

  stopRotation() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % 4;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + 4) % 4;
  }
}

export const introStore = new IntroStore();
