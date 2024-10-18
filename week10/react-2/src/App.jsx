import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to={"/"}>Allen</Link> |<Link to={"/"}>Class 11</Link> |
        <Link to={"/"}>Class 12</Link>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path={"/class-11-program"} element={<Class11Program />} />
          <Route path={"/class-12-program"} element={<Class12Program />} />
        </Routes>
        <h2>Allen footer | Contact us</h2>
      </BrowserRouter>
    </>
  );
};

export default App;

function Landing() {
  return (
    <>
      <h1>Welcome to Allen</h1>
    </>
  );
}
function Class11Program() {
  const navigate = useNavigate();

  function navigateToHomePage() {
    navigate("/");
  }

  return (
    <>
      <h1>class 11the program</h1>
      <button onClick={navigateToHomePage}>Back to home page</button>
    </>
  );
}

function Class12Program() {
  return (
    <>
      <h1>class 12th program</h1>
    </>
  );
}
