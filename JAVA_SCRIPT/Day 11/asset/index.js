let numbers = [10, 20, 30, 40, 50];

let doubleNumbers = numbers.map((num) => {
    return num * 2;
});

console.log(doubleNumbers);


let numbers = [10, 15, 20, 25, 30, 35, 40];

let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNumbers);


let numbers = [10, 25, 35, 50, 60];

let result = numbers.find((num) => {
    return num > 30;
});

console.log(result);



let students = [
    { id: 1, name: "Arun", mark: 75 },
    { id: 2, name: "Priya", mark: 90 },
    { id: 3, name: "Kumar", mark: 65 }
];

let result = students.find((student) => {
    return student.id === 2;
});

console.log(result);


let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Priya", salary: 45000 },
    { name: "Kumar", salary: 30000 },
    { name: "Ravi", salary: 50000 }
];

let result = employees.filter((employee) => {
    return employee.salary >= 30000;
});

console.log(result);