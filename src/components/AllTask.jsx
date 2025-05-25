import React, { useState, useEffect } from 'react';

const AllTask = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editTaskId, setEditTaskId] = useState(null);
  const [editedText, setEditedText] = useState('');
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditClick = (task) => {
    setEditTaskId(task.id);
    setEditedText(task.text);
  };

  const handleSave = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: editedText } : task
    ));
    setEditTaskId(null);
    setEditedText('');
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: Date.now(),
        text: newTask.trim(),
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const handleMoveToProgress = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
    const progressTasks = JSON.parse(localStorage.getItem('progressTasks')) || [];
    localStorage.setItem('progressTasks', JSON.stringify([...progressTasks, task]));
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    padding: '30px',
  };

  const cardStyle = {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '4px 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#a21a5b',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '10px',
  };

  const buttonStyle = {
    padding: '8px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    color: 'white',
    flexGrow: 1,
    margin: '4px',
  };

  const inputSectionStyle = {
    padding: '20px',
    paddingTop: '80px',
    textAlign: 'center',
  };

  return (
    <div>
      <div style={inputSectionStyle}>
        <h2>All Task</h2>
        <input
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ padding: '10px', width: '300px', marginRight: '10px', borderRadius: '5px' }}
        />
        <button
          onClick={handleAddTask}
          style={{ ...buttonStyle, backgroundColor: '#212529' }}
        >
          Add Task
        </button>
      </div>

      <div style={containerStyle}>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map(task => (
            <div key={task.id} style={cardStyle}>
              {editTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '5px' }}
                  />
                  <div style={buttonGroupStyle}>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#343a40' }}
                      onClick={() => handleSave(task.id)}
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p style={{ marginBottom: '15px' }}>{task.text}</p>
                  <div style={buttonGroupStyle}>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#6c757d' }}
                      onClick={() => handleEditClick(task)}
                    >
                      Edit
                    </button>
                    <button
                      style={{ ...buttonStyle, backgroundColor: '#343a40' }}
                      onClick={() => handleMoveToProgress(task)}
                    >
                      Move to In Progress
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTask;
