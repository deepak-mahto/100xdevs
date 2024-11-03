import "./App.css";

function App() {
  return (
    <>
      <Todo
        title="go to gym"
        description="workout at least 2 hrs"
        completed={false}
      />
    </>
  );
}

interface TodoInterface {
  title: string;
  description: string;
  completed: boolean;
}

function Todo(props: TodoInterface) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
      <h1>{props.completed}</h1>
    </div>
  );
}

export default App;
