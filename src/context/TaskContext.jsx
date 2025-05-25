import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Develop login UI', status: 'progress' },
    { id: 2, text: 'Integrate backend API', status: 'progress' },
    { id: 3, text: 'Fix bugs', status: 'done' },
  ]);

  const updateTaskStatus = (id, newStatus) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTaskStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
