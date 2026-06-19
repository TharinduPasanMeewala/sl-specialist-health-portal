-- Complete SQL schema with CREATE TABLE statements
CREATE TABLE Specialization (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    icon_url VARCHAR(255)
);

CREATE TABLE Doctor (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    specialization_id INT NOT NULL,
    registration_number VARCHAR(255) NOT NULL,
    bio TEXT,
    FOREIGN KEY (specialization_id) REFERENCES Specialization(id)
);

CREATE TABLE Appointment (
    id SERIAL PRIMARY KEY,
    doctor_id INT NOT NULL,
    patient_name VARCHAR(255) NOT NULL,
    appointment_date TIMESTAMP NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES Doctor(id)
);