import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <Light />
    </div>
  );
};

function Light() {
  const [isLightOn, setIsLightOn] = useState("false");
  return (
    <>
      <LightBulb isLightOn={isLightOn} />
      <LightSwitch setIsLightOn={setIsLightOn} isLightOn={isLightOn} />
    </>
  );
}

function LightBulb({ isLightOn }) {
  return <>{isLightOn ? "Bulb on" : "Bulb off"}</>;
}

function LightSwitch({ setIsLightOn, isLightOn }) {
  function toggle() {
    // setIsLightOn((currentState) => !currentState);
    setIsLightOn(!isLightOn);
  }
  return (
    <>
      <button onClick={toggle}>Toggle light</button>
    </>
  );
}

export default App;
