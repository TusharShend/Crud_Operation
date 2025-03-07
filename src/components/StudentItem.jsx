import React, { useState } from 'react';

function StudentItem({ student, index, deleteStudent, updateStudent }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(student.name);
  const [updatedPlace, setUpdatedPlace] = useState(student.place);
  const [updatedPhone, setUpdatedPhone] = useState(student.phone);

  const handleUpdate = () => {
    const updatedStudent = { ...student, name: updatedName, place: updatedPlace, phone: updatedPhone };
    updateStudent(updatedStudent);
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{isEditing ? <input value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} /> : student.name}</td>
      <td>{isEditing ? <input value={updatedPlace} onChange={(e) => setUpdatedPlace(e.target.value)} /> : student.place}</td>
      <td>{isEditing ? <input value={updatedPhone} onChange={(e) => setUpdatedPhone(e.target.value)} /> : student.phone}</td>
      <td>
  {isEditing ? (
    <button className="save" onClick={handleUpdate}>Save</button>
  ) : (
    <>
      <button className="view" onClick={() => alert(`Viewing ${student.name}`)}>View</button>
      <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
      <button className="delete" onClick={() => deleteStudent(student.id)}>Delete</button>
    </>
  )}
</td>
    </tr>
  );
}

export default StudentItem;
