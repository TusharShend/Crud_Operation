import React, { useState } from 'react';

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      name,
      place,
      phone
    };
    addStudent(newStudent);
    setName('');
    setPlace('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;
