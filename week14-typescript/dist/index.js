"use strict";
const delayedCall = (fn) => {
    setTimeout(fn, 1000);
};
console.log(delayedCall(() => {
    console.log("hi there");
}));