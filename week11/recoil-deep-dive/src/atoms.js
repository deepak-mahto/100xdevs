import { atom } from "recoil";

export const myNetworkAtom = atom({
  key: "myNetworkAtom",
  default: 105,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 100,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 3,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 24,
});
