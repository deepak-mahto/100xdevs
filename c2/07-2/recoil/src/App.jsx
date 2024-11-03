import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

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
      <Count />
      <Button />
    </div>
  );
}

function Count() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <div>{count}</div>
      <EvenCountRenderer />
    </div>
  );
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? <div>even</div> : null}</div>;
}

function Button() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

export default App;
