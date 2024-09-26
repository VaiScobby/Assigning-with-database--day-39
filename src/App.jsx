import React from 'react';
import MentorForm from './components/MentorForm';
import StudentForm from './components/StudentForm';
import AssignMentorForm from './components/AssignMentorForm';
import StudentList from './components/StudentList';

function App() {
   return (
      <div>
         <h1>Mentor-Student Assignment</h1>
         <MentorForm />
         <StudentForm />
         <AssignMentorForm />
         <StudentList mentorId="1234567890abcdef" /> {/* Replace with actual mentorId */}
      </div>
   );
}

export default App;
