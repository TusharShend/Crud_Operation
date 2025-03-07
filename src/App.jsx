import React, { useState } from 'react';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map(student => (student.id === updatedStudent.id ? updatedStudent : student))
    );
  };

  return (
    <div className="App">
      <h1>Student Management</h1>
      <AddStudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} updateStudent={updateStudent} />
    </div>
  );
}

export default App;
