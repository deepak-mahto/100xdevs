import "./App.css";
import { todosAtomFamily } from "./store/atoms/todos";
import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from "recoil";

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
  // const currentTodo = useRecoilValue(todosAtomFamily(id));
  const currentTodo = useRecoilValueLoadable(todosAtomFamily(id));
  if (currentTodo.state === "loading") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (currentTodo.state === "hasValue") {
    return (
      <div>
        <h2>{currentTodo.contents.id}</h2>
        <h2>{currentTodo.contents.title}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Unable to fetch the data from the backend</h2>
      </div>
    );
  }
}

export default App;
