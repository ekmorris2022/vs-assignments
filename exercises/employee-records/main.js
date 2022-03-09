const employees = []

function Employee(name, title, salary, status="Full Time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;

    this.printEmployeeForm = () => console.log(`Name: ${name}, Job Title: ${title}, Salary: ${salary}, Status: ${status}`);
}

let ed = new Employee("Ed", "Web Developer", 100000);
let ken = new Employee("Ken", "Jr. Web Developer", 65000)
let aidan = new Employee("Aidan", "Jr. Web Developer", 50000, "Part time")

ed.printEmployeeForm()
ken.printEmployeeForm()
aidan.printEmployeeForm()

employees.push(ed)
employees.push(ken)
employees.push(aidan)

console.log(employees)
