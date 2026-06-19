-- Sample seed data INSERT statements
INSERT INTO Specialization (name, icon_url) VALUES ('Cardiology', 'http://example.com/cardiology.png'), ('Neurology', 'http://example.com/neurology.png');

INSERT INTO Doctor (full_name, specialization_id, registration_number, bio) VALUES ('Dr. John Doe', 1, 'REG12345', 'Experienced cardiologist with over 10 years of practice.'), ('Dr. Jane Smith', 2, 'REG67890', 'Specialist in neurology with a focus on epilepsy treatment.');

INSERT INTO Appointment (doctor_id, patient_name, appointment_date, status) VALUES (1, 'Alice Johnson', '2023-10-15 10:30:00', 'Scheduled'), (2, 'Bob Brown', '2023-10-16 14:00:00', 'Completed');