import React, { useEffect, useState } from 'react';
import { getMentorStudents } from '../services/api';

const StudentList = ({ mentorId }) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await getMentorStudents(mentorId);
                setStudents(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchStudents();
    }, [mentorId]);

    return (
        <div>
            <h3>Students for Mentor {mentorId}</h3>
            <ul>
                {students.map(student => (
                    <li key={student._id}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
