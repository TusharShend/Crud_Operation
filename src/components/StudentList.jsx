import React from 'react';
import StudentItem from './StudentItem';

function StudentList({ students, deleteStudent, updateStudent }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Place</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentItem
            key={student.id}
            student={student}
            index={index}
            deleteStudent={deleteStudent}
            updateStudent={updateStudent}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
