import React, { useState } from "react";

const Ejercicio9 =( ) =>{
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

  // Función para manejar la entrada de texto del formulario
    const handleInputChange = (e) => {
    setNewTask(e.target.value);
    };

  // Función para agregar una nueva tarea a la lista
    const handleAddTask = () => {
    if (newTask !== "") {
        setTasks([...tasks, newTask]);
        setNewTask("");
    }
};

  // Función para marcar una tarea como completada
    const handleTaskComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = `✅ ${tasks[index]}`;
        setTasks(updatedTasks);
    };

  // Función para eliminar una tarea de la lista
    const handleTaskDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };
    return(
        <>
            <div>
                <div><h1>Ejercicio 9</h1></div>
                <div>
                    <h1>Lista de Tareas Pendientes</h1>
                    <input
                        type="text"
                        value={newTask}
                        onChange={handleInputChange}
                        placeholder="Añadir tarea"
                    />
                    <button onClick={handleAddTask}>Añadir</button>
                    <ul>
                        {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={() => handleTaskComplete(index)}>
                            Completada
                            </button>
                            <button onClick={() => handleTaskDelete(index)}>Eliminar</button>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Ejercicio9;