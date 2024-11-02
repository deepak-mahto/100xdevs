import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  myNetworkAtom,
  notificationAtom,
  totalNotificationCountSelector,
} from "./atoms";

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
  const myNetwork = useRecoilValue(myNetworkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const messaging = useRecoilValue(messagingAtom);
  const notifications = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <button>Home</button>
        <button>My network ({myNetwork >= 100 ? "99+" : myNetwork})</button>
        <button>Jobs ({jobs})</button>
        <button>Messaging ({messaging})</button>
        <button>Notifications ({notifications})</button>
        <button>Me ({totalNotificationCount})</button>
        <br />
        <IncreseNotification />
      </div>
    </div>
  );
}

function IncreseNotification() {
  const setNotification = useSetRecoilState(notificationAtom);

  return (
    <div>
      <button onClick={() => setNotification((n) => n + 1)}>
        Increase Notifcation
      </button>
    </div>
  );
}

export default App;
