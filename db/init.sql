-- TABELAS PRINCIPAIS

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE title (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE professor (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT NOT NULL,
    title_id INT NOT NULL,
    CONSTRAINT fk_professor_department FOREIGN KEY (department_id) REFERENCES department(id),
    CONSTRAINT fk_professor_title FOREIGN KEY (title_id) REFERENCES title(id)
);

CREATE TABLE building (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE room (
    id SERIAL PRIMARY KEY,
    building_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    CONSTRAINT fk_room_building FOREIGN KEY (building_id) REFERENCES building(id)
);

CREATE TABLE subject (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    professor_id INT NOT NULL,
    CONSTRAINT fk_subject_professor FOREIGN KEY (professor_id) REFERENCES professor(id)
);

CREATE TABLE subject_prerequisite (
    id SERIAL PRIMARY KEY,
    subject_id INT NOT NULL,
    prerequisite_id INT NOT NULL,
    CONSTRAINT fk_subject FOREIGN KEY (subject_id) REFERENCES subject(id),
    CONSTRAINT fk_prerequisite FOREIGN KEY (prerequisite_id) REFERENCES subject(id)
);

CREATE TABLE class (
    id SERIAL PRIMARY KEY,
    subject_id INT NOT NULL,
    year INT NOT NULL,
    semester INT NOT NULL,
    code VARCHAR(50) NOT NULL,
    CONSTRAINT fk_class_subject FOREIGN KEY (subject_id) REFERENCES subject(id)
);

CREATE TABLE class_schedule (
    id SERIAL PRIMARY KEY,
    class_id INT NOT NULL,
    room_id INT NOT NULL,
    day_of_week INT NOT NULL, -- 1=Domingo ... 7=Sábado
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    CONSTRAINT fk_schedule_class FOREIGN KEY (class_id) REFERENCES class(id),
    CONSTRAINT fk_schedule_room FOREIGN KEY (room_id) REFERENCES room(id)
);

-- SEEDS

-- Departments
INSERT INTO department (name) VALUES ('Matemática'), ('História'), ('Computação');

-- Titles
INSERT INTO title (name) VALUES ('Mestre'), ('Doutor');

-- Professores
INSERT INTO professor (name, department_id, title_id)
VALUES 
('Professor Girafales', 1, 2),
('Professor Linguiça', 2, 1);

-- Buildings
INSERT INTO building (name) VALUES ('Bloco A'), ('Bloco B');

-- Rooms
INSERT INTO room (building_id, name)
VALUES (1, 'Sala 101'), (1, 'Sala 102'), (2, 'Sala 201');

-- Subjects
INSERT INTO subject (code, name, professor_id)
VALUES 
('MAT101', 'Matemática Básica', 1),
('HIS201', 'História Geral', 2),
('COMP301', 'Introdução à Programação', 1);

-- Subject prerequisites
INSERT INTO subject_prerequisite (subject_id, prerequisite_id)
VALUES (3, 1); -- COMP301 tem pré-requisito Matemática

-- Classes
INSERT INTO class (subject_id, year, semester, code)
VALUES 
(1, 2025, 1, 'A'),
(2, 2025, 1, 'B'),
(3, 2025, 1, 'C');

-- Class Schedules
INSERT INTO class_schedule (class_id, room_id, day_of_week, start_time, end_time)
VALUES
(1, 1, 1, '08:00', '10:00'),
(2, 2, 3, '10:00', '12:00'),
(3, 3, 5, '14:00', '16:00');

