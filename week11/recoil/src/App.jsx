import "./App.css";
import {
  isRecoilValue,
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </div>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
      <IsEven />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 2)}>Increase</button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);
  return <h1>{isEven ? "Even" : "odd"}</h1>;
}

export default App;
