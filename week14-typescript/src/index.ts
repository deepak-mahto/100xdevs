type Employee = {
  name: string;
  startDate: string;
};

type Manager = {
  name: string;
  department: string;
};

type TechLead = Employee & Manager;

let e: Employee = {
  name: "Deepak",
  startDate: "20-11-2024",
};

let m: Manager = {
  name: "Albert",
  department: "full-stack",
};

let t: TechLead = {
  name: "Shoun",
  startDate: "21-11-2014",
  department: " ml",
};
