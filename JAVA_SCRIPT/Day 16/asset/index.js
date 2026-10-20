
let employees = JSON.parse(localStorage.getItem("employees")) || [];

let form = document.getElementById("employeeForm");
let employeeTable = document.getElementById("employeeTable");
let message = document.getElementById("message");

// Display saved employees when the page loads
displayEmployees();

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

    // Create employee object with unique ID
    let employee = {
        id: Date.now(),
        name: name,
        age: Number(age),
        department: department,
        salary: Number(salary)
    };

    // Add employee to array
    employees.push(employee);

    // Save array in localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Display updated records
    displayEmployees();

    // Clear form
    form.reset();

    message.textContent = "Employee registered successfully!";
});

function displayEmployees() {

    employeeTable.innerHTML = "";

    employees.forEach((emp) => {

        employeeTable.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>
                    <button type="button" class="deleteBtn"
                        data-id="${emp.id}">
                        Delete
                    </button>
                </td>
            </tr>
        `;

    });
}

// Handle Delete button clicks
employeeTable.addEventListener("click", (event) => {

    if (event.target.classList.contains("deleteBtn")) {

        let id = Number(event.target.dataset.id);

        // Remove employee from array
        employees = employees.filter((emp) => emp.id !== id);

        // Update localStorage
        localStorage.setItem("employees", JSON.stringify(employees));

        // Refresh table
        displayEmployees();

        message.textContent = "Employee deleted successfully!";
    }

});
