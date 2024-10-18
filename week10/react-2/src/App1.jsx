import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path={"/class-11-program"} element={<Class11Program />} />
            <Route path={"/class-12-program"} element={<Class12Program />} />
            <Route path={"*"} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <Link to={"/"}>Allen</Link> |
      <Link to={"/class-11-program"}>Class 11</Link> |
      <Link to={"/class-12-program"}>Class 12</Link>
    </>
  );
}

function Footer() {
  return (
    <>
      <h2>Allen footer | Contact us</h2>
    </>
  );
}

function NotFound() {
  return (
    <>
      <h1>Content not available</h1>
    </>
  );
}

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
