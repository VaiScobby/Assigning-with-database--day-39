import React, { useState } from 'react';
import { createStudent } from '../services/api';

const StudentForm = () => {
   const [studentName, setStudentName] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await createStudent({ name: studentName });
         alert('Student created successfully!');
         setStudentName('');
      } catch (err) {
         console.error(err);
         alert('Failed to create student');
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <label>
            Student Name:
            <input 
               type="text" 
               value={studentName} 
               onChange={(e) => setStudentName(e.target.value)} 
               required 
            />
         </label>
         <button type="submit">Create Student</button>
      </form>
   );
};

export default StudentForm;
