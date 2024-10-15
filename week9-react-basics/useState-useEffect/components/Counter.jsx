import { useEffect } from "react";

const Counter = (props) => {
  useEffect(function () {
    // at the time of mounting and ignored during re-rendering
    console.log("mount");

    return function () {
      // called at the time of unmounting
      console.log("unmount");
    };
  }, []); // when array dependency is empty run the logic once

  useEffect(
    function () {
      console.log("Count has change");
    },
    [props.count]
  ); // when array dependency is not empty then run the logic it changes (when state variable changes)

  return (
    <div>
      <h1>{props.count}</h1>
    </div>
  );
};

export default Counter;
