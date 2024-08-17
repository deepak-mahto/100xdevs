# js-interview-questions

- document.write() --> don't use it after the document is loaded
- window.print() --> To print the page

- You can also declare multiple variables in single line:

```bash
let person = "John Doe", carName = "Volvo", price = 200;

```

- A variable declared without a value will have the value undefined. - let carName;

- let: have Block Scope, must be Declared before use, cannot be Redeclared in the same scope
- Always use const for new Array, Object, Function, RegEx

- **String compares alphabetically:**

```bash

- let x = "5" + 2 + 3; # 523
- let x = 2 + 3 + "5"; # 55

console.log("2", 2)
console.log("2"+ 2)

let text1 = "A";
let text2 = "B";
let result = text1 < text2; # returns true

let text1 = "20";
let text2 = "5";
let result = text1 < text2; # returns true

```

- **typeof vs instanceof:**

```bash
# Use instanceof for custom types:
var ClassFirst = function () {};
var instance = new ClassFirst();
instance instanceof ClassFirst; // true
# Use instanceof for complex built in types:
/regularexpression/ instanceof RegExp; // true

# Use typeof for simple built in types:
typeof true == 'boolean'; // true
typeof 99.99 == 'number'; // true
typeof "John";            // Returns "string"
typeof 3.14;              // Returns "number"
typeof (3);               // Returns "number"
typeof (3 + 4);           // Returns "number"

```

- Logical AND operator, Logical OR operator, Nullish coalescing operator

  - && => If the first value is true, the second value is assigned.
  - || => If the first value is false, the second value is assigned.
  - ?? => If the first value is undefined or null, the second value is assigned.

- 8 Datatypes: String,Number, Bigint, Boolean, Undefined, Null, Symbol, Object

  - The object data type can contain both built-in objects, and user defined objects:
  - objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, maths, functions,.. are build-in objects (All JavaScript values, except primitives, are objects.)
