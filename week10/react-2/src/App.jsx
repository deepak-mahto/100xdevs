import React, { createContext, useContext, useState } from "react";

// create a context
const BulbContext = createContext();

function BulbProvider({ children }) {
  const [isLightOn, setIsLightOn] = useState("false");
  return (
    <BulbContext.Provider
      value={{ isLightOn: isLightOn, setIsLightOn: setIsLightOn }}
    >
      {children}
    </BulbContext.Provider>
  );
}

// provide value to the components
const App = () => {
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  );
};

function Light() {
  return (
    <>
      <LightBulb />
      <LightSwitch />
    </>
  );
}

function LightBulb() {
  const { isLightOn } = useContext(BulbContext);
  return <>{isLightOn ? "Bulb on" : "Bulb off"}</>;
}

function LightSwitch() {
  const { isLightOn, setIsLightOn } = useContext(BulbContext);
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
