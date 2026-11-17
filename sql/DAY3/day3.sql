create database day_three;
use day_three;

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),
    email VARCHAR(100) UNIQUE,
    course VARCHAR(100) NOT NULL,
    fees DECIMAL(10,2) DEFAULT 0.00,
    admission_date DATE
);


RENAME TABLE students TO student_details;


ALTER TABLE student_details
ADD mobile_number VARCHAR(15);


DESC student_details;







CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2),
    department VARCHAR(50),
    joining_date DATE,
    city VARCHAR(50)
);


ALTER TABLE employees
RENAME COLUMN name TO employee_name;


ALTER TABLE employees
MODIFY salary DECIMAL(12,2);


ALTER TABLE employees
ADD email VARCHAR(100) UNIQUE;


DESC employees;