
CREATE DATABASE college_db;
USE college_db;


CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),
    email VARCHAR(100) UNIQUE,
    city VARCHAR(50) DEFAULT 'Chennai',
    admission_date DATE
);


DESC students;



CREATE DATABASE company_db;
USE company_db;


CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10,2) CHECK (salary > 10000),
    department VARCHAR(50) DEFAULT 'IT',
    joining_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DESC employees;
