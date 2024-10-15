import React from "react";
import Button from "../components/Button";

const App = () => {
  let buttonVisible = true;

  return (
    <div>
      {buttonVisible ? <Button /> : null}
      {buttonVisible && <Button />}
    </div>
  );
};

export default App;
