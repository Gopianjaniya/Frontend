class employee {#
    emp_name;#
    emp_id;#
    emp_salary;

    empName(emp_name) {
        this.#emp_name = emp_name;
        return `Name -> ${this.#emp_name}`;
    }
    empId(emp_id) {
        this.#emp_id = emp_id;

        return `Id -> ${emp_id}`;
    }
    empSalary(emp_salary) {
        this.#emp_salary = emp_salary;

        return `Salary -> ${emp_salary}`;
    }
}
console.log("------Employee 1 --------");

const emp1 = new employee();
console.log(emp1.empName("gopi"));
console.log(emp1.empId(102));
console.log(emp1.empSalary(21300));

console.log("------Employee 2 -------");
const emp2 = new employee();
console.log(emp2.empName("ram"));
console.log(emp2.empId(106));
console.log(emp2.empSalary(2000));