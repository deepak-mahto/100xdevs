import { atom, constSelector, selector } from "recoil";

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

export const totalNotificationCountSelector = selector({
  key: "totalNotificationCountSelector",
  get: ({ get }) => {
    const myNetwork = get(myNetworkAtom);
    const jobs = get(jobsAtom);
    const messaging = get(messagingAtom);
    const notification = get(notificationAtom);
    return myNetwork + jobs + messaging + notification;
  },
});
