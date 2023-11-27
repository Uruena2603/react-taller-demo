import React, { useState } from "react";

export const Ejercicio10 = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [editingStudentId, setEditingStudentId] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };

  const handleAddStudent = () => {
    if (editingStudentId) {
      // Modificar estudiante existente
      setStudents(
        students.map((student) =>
          student.id === editingStudentId ? newStudent : student
        )
      );
      setEditingStudentId(null);
    } else {
      // Agregar nuevo estudiante
      setStudents([...students, newStudent]);
    }
    setNewStudent({
      id: "",
      name: "",
      age: "",
      email: "",
    });
  };

  const handleEditStudent = (id) => {
    const studentToEdit = students.find((student) => student.id === id);
    setNewStudent(studentToEdit);
    setEditingStudentId(id);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    setEditingStudentId(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Administración de Estudiantes</h1>
      <h2>Agregar/Modificar Estudiante</h2>
      <form>
        <input
          type="text"
          placeholder="ID"
          name="id"
          value={newStudent.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={newStudent.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Edad"
          name="age"
          value={newStudent.age}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          name="email"
          value={newStudent.email}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddStudent}>
          {editingStudentId ? "Modificar Estudiante" : "Agregar Estudiante"}
        </button>
      </form>
      <h2>Buscar Estudiante</h2>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handleSearch}
      />
      <h2>Lista de Estudiantes</h2>
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            {student.name}, {student.age} años,{" "}
            <a href={`mailto:${student.email}`}>{student.email}</a>
            <button onClick={() => handleEditStudent(student.id)}>
              Editar
            </button>
            <button onClick={() => handleDeleteStudent(student.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
