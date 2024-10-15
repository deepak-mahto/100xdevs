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
      // logic used for mounting
      console.log("Count has change");

      return function () {
        // logic used for unmouting
        console.log("Clean up inside second effect");
      };
    },
    [props.count]
  ); // when array dependency is not empty then run the logic when it changes (when state variable changes)

  return (
    <div>
      <h1>{props.count}</h1>
    </div>
  );
};

export default Counter;
