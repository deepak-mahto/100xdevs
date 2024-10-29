import "./App.css";
import { todosAtomFamily } from "./store/atoms/todos";
import { RecoilRoot, useRecoilValue } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo id={1} /> <hr />
        <Todo id={2} /> <hr />
        <Todo id={3} /> <hr />
        <Todo id={4} /> <hr />
        <Todo id={5} />
      </RecoilRoot>
    </div>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <div>
      <h2>{currentTodo.title}</h2>
      <h2>{currentTodo.description}</h2>
    </div>
  );
}

export default App;
