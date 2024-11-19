interface Employee {
  name: string;
  startDate: number;
}

interface Manager {
  name: string;
  department: string;
}

type TeachLead = Employee & Manager;

const t: TeachLead = {
  name: "deepak",
  startDate: 20,
  department: "Fullstack",
};
