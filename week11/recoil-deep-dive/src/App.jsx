import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import { notifications, totalNotificationCountSelector } from "./atoms";

function App() {
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  );
}

function MainApp() {
  const notificationCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <button>Home</button>
        <button>
          My network (
          {notificationCount.myNetwork >= 100
            ? "99+"
            : notificationCount.myNetwork}
          )
        </button>
        <button>Jobs ({notificationCount.jobs})</button>
        <button>Messaging ({notificationCount.messaging})</button>
        <button>Notifications ({notificationCount.notification})</button>
        <button>Me ({totalNotificationCount})</button>
        <br />
      </div>
    </div>
  );
}

export default App;
