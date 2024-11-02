import { atom, selector } from "recoil";

export const notifications = atom({
  key: "notifications",
  default: {
    myNetwork: 100,
    jobs: 45,
    messaging: 23,
    notification: 20,
  },
});

export const totalNotificationCountSelector = selector({
  key: "totalNotificationCountSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.myNetwork +
      allNotifications.jobs +
      allNotifications.messaging +
      allNotifications.notification
    );
  },
});
