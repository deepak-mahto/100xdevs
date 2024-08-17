# js-interview-prep

```bash
#exponential notation
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123
```

```bash
# Create an empty Objects
const person = {}; # 1st way
const person = new Object(); # 2nd way

# fullName is a method (same as function)
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  # // this refers to person object (if properties of person changes then the value of this also changes)
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
};

# accessing the objects
person.lastName;
person["lastName"];
let x = "lastName";
person[x];

# updating the objects
person.lastname = "Meo";

# Add new properties
person.nationality = "English";

# deleting a properties
delete person.lastname; // (or) delete person["age"];

# accessing nested objects
myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];
myObj["myCars"].car2;

# accessing object method
name = person.fullName();
```
