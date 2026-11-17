CREATE DATABASE training_institute;

USE training_institute;

CREATE TABLE student_course_1nf (
    student_id INT,
    student_name VARCHAR(100),
    course_name VARCHAR(100),
    trainer_name VARCHAR(100),
    trainer_phone VARCHAR(15),
    PRIMARY KEY (student_id, course_name)
);

INSERT INTO student_course_1nf
(student_id, student_name, course_name, trainer_name, trainer_phone)
VALUES
(1, 'Arun', 'HTML', 'Kumar', '9876543210'),
(1, 'Arun', 'CSS', 'Priya', '9876543211'),
(2, 'Bala', 'HTML', 'Kumar', '9876543210'),
(3, 'Divya', 'JavaScript', 'Ravi', '9876543212'),
(4, 'Karthik', 'Python', 'Mani', '9876543213');

SELECT * FROM student_course_1nf;

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100)
);

CREATE TABLE courses_2nf (
    course_name VARCHAR(100) PRIMARY KEY,
    trainer_name VARCHAR(100),
    trainer_phone VARCHAR(15)
);

CREATE TABLE student_courses_2nf (
    student_id INT,
    course_name VARCHAR(100),
    PRIMARY KEY (student_id, course_name),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_name) REFERENCES courses_2nf(course_name)
);

INSERT INTO students VALUES
(1, 'Arun'),
(2, 'Bala'),
(3, 'Divya'),
(4, 'Karthik');

INSERT INTO courses_2nf VALUES
('HTML', 'Kumar', '9876543210'),
('CSS', 'Priya', '9876543211'),
('JavaScript', 'Ravi', '9876543212'),
('Python', 'Mani', '9876543213');

INSERT INTO student_courses_2nf VALUES
(1, 'HTML'),
(1, 'CSS'),
(2, 'HTML'),
(3, 'JavaScript'),
(4, 'Python');