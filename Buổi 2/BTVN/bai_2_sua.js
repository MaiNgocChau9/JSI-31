const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

// HR
console.group("HR Department");
const hrDep = employees.filter((employee) => employee.department === "HR");
console.log("HR staff list:", hrDep);
// Tính tổng salary
const hrSalary = hrDep.reduce((sum, employee) => sum + employee.salary, 0);
// Tính mức lương trung bình
const hrAvgSalary = hrSalary / hrDep.length;
console.log("Average salary:", hrAvgSalary);
console.groupEnd();

// IT
console.group("IT Department");
const itDep = employees.filter((employee) => employee.department === "IT");
console.log("IT staff list:", itDep);
// Tính tổng salary
const itSalary = itDep.reduce((sum, employee) => sum + employee.salary, 0);
// Tính mức lương trung bình
const itAvgSalary = itSalary / itDep.length;
console.log("Average salary:", itAvgSalary);
console.groupEnd();

// Tìm phòng ban có mức lương trung bình lớn hơn 65.000
const overAvg = [hrAvgSalary, itAvgSalary].filter((avg) => avg > 65000);
console.log("Departments have average salary over 65.000:", overAvg);