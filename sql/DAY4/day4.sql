CREATE DATABASE companyy_db;

USE companyy_db;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100),
    salary DECIMAL(10,2),
    department VARCHAR(50),
    city VARCHAR(50),
    joining_date DATE
);

INSERT INTO employees
(emp_name, salary, department, city, joining_date)
VALUES
('Arun', 45000, 'IT', 'Chennai', '2024-01-10'),
('maya', 28000, 'HR', 'Madurai', '2024-02-15'),
('Kumar', 55000, 'IT', 'Chennai', '2023-05-20'),
('Ravi', 35000, 'Sales', 'Madurai', '2024-03-12'),
('Priya', 60000, 'HR', 'Chennai', '2023-06-18'),
('Divya', 42000, 'IT', 'Madurai', '2024-04-22'),
('Mani', 25000, 'Sales', 'Chennai', '2024-07-01'),
('Karthik', 48000, 'Finance', 'Madurai', '2023-08-15');



CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100),
    age INT,
    city VARCHAR(50),
    course VARCHAR(50)
);

INSERT INTO students
(student_name, age, city, course)
VALUES
('Arun', 20, 'Chennai', 'BCA'),
('Bala', 22, 'Madurai', 'BSc'),
('Priya', 19, 'Chennai', 'BCA'),
('Divya', 24, 'Madurai', 'BCom'),
('Kumar', 26, 'Chennai', 'BBA'),
('Ravi', 17, 'Madurai', 'BCA'),
('Mani', 23, 'Coimbatore', 'BSc');

CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    category VARCHAR(50),
    stock INT,
    price DECIMAL(10,2)
);

INSERT INTO products
(product_name, category, stock, price)
VALUES
('Laptop', 'Electronics', 10, 50000),
('Mobile', 'Electronics', 20, 15000),
('Headphones', 'Electronics', 30, 2000),
('Shirt', 'Clothing', 50, 800),
('Jeans', 'Clothing', 25, 1200),
('Shoes', 'Footwear', 15, 2500),
('Sandals', 'Footwear', 40, 700);

SELECT * FROM employees WHERE department = 'IT' AND salary > 30000;

SELECT *FROM students WHERE age BETWEEN 18 AND 25 AND city IN ('Chennai', 'Madurai');

SELECT department, COUNT(*) AS total_employees FROM employees GROUP BY department;

SELECT category,SUM(stock) AS total_stock,AVG(price) AS average_price FROM products GROUP BY category;

SELECT department,AVG(salary) AS average_salary FROM employees WHERE salary > 25000 GROUP BY department HAVING AVG(salary) > 40000;