
let employees = [];

let form = document.getElementById("employeeForm");
let employeeTable = document.getElementById("employeeTable");
let message = document.getElementById("message");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let name = document.getElementById("empName").value.trim();
    let age = document.getElementById("empAge").value;
    let department = document.getElementById("department").value.trim();
    let salary = document.getElementById("salary").value;

    // Validate empty fields
    if (
        name === "" ||
        age === "" ||
        department === "" ||
        salary === ""
    ) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    // Validate positive age and salary
    if (
        !Number.isFinite(Number(age)) ||
        Number(age) <= 0 ||
        !Number.isFinite(Number(salary)) ||
        Number(salary) <= 0
    ) {
        message.textContent =
            "Age and salary must be positive numbers.";
        return;
    }

    // Create employee object
    let employee = {
        name: name,
        age: Number(age),
        department: department,
        salary: Number(salary)
    };

    // Store object in array
    employees.push(employee);

    // Clear old table rows
    employeeTable.innerHTML = "";

    // Display all employee records
    employees.forEach((emp) => {
        employeeTable.innerHTML += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
            </tr>
        `;
    });

    message.textContent = "Employee registered successfully!";

    // Clear form
    form.reset();

});
