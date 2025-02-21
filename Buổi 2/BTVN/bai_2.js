const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

let list_department = [];
for (let i = 0; i < employees.length; i++) {
  if (!list_department.includes(employees[i].department)) {
    list_department.push(employees[i].department);
  }
}

let list_avarage_salary = [];

for (let i = 0; i < list_department.length; i++){
    let now_department = list_department[i];
    let sum_salary = 0;
    let count = 0;
    for (let j = 0; j < employees.length; j++){
        if (employees[j].department === now_department){
            sum_salary += employees[j].salary;
            count++;
        }
    }
    console.log(`Phòng ban ${now_department} có ${count} nhân viên và mức lương trung bình là ${sum_salary/count}`);
    if (sum_salary/count > 65000){
        list_avarage_salary.push(now_department);
    }
}

console.log(`Các phòng ban có mức lương trung bình lớn hơn 65.000 là: ${list_avarage_salary}`);