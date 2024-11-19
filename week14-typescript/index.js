"use strict";
const isLegal = (a) => {
    return a > 18 ? "legal" : "not legal";
};
const result = isLegal(17);
console.log(result);
