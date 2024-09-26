import React, { useState } from 'react';
import { assignStudentsToMentor } from '../services/api';

const AssignMentorForm = () => {
   const [mentorId, setMentorId] = useState('');
   const [studentIds, setStudentIds] = useState([]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await assignStudentsToMentor(mentorId, studentIds);
         alert('Students assigned to mentor successfully!');
         setMentorId('');
         setStudentIds([]);
      } catch (err) {
         console.error(err);
         alert('Failed to assign students to mentor');
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <label>
            Mentor ID:
            <input 
               type="text" 
               value={mentorId} 
               onChange={(e) => setMentorId(e.target.value)} 
               required 
            />
         </label>

         <label>
            Student IDs (comma separated):
            <input 
               type="text" 
               value={studentIds} 
               onChange={(e) => setStudentIds(e.target.value.split(','))} 
               required 
            />
         </label>

         <button type="submit">Assign Students</button>
      </form>
   );
};

export default AssignMentorForm;
