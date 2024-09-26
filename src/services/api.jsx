import axios from 'axios';

// Base URL of the API
const API_URL = 'http://localhost:3000/api';

// Create a new Mentor
export const createMentor = (mentorData) => {
   return axios.post(`${API_URL}/mentors/create`, mentorData);
};

// Create a new Student
export const createStudent = (studentData) => {
   return axios.post(`${API_URL}/students/create`, studentData);
};

// Assign multiple students to a mentor
export const assignStudentsToMentor = (mentorId, studentIds) => {
   return axios.post(`${API_URL}/mentors/${mentorId}/assign-students`, { studentIds });
};

// Get all students of a particular mentor
export const getMentorStudents = (mentorId) => {
   return axios.get(`${API_URL}/mentors/${mentorId}/students`);
};

// Assign or change mentor for a particular student
export const assignMentorToStudent = (studentId, mentorId) => {
   return axios.post(`${API_URL}/students/${studentId}/assign-mentor`, { mentorId });
};

// Get the mentor for a particular student
export const getStudentMentor = (studentId) => {
   return axios.get(`${API_URL}/students/${studentId}/mentor`);
};
