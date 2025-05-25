import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Progress = () => {
  const [progressTasks, setProgressTasks] = useState(() => {
    const saved = localStorage.getItem('progressTasks');
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('progressTasks', JSON.stringify(progressTasks));
  }, [progressTasks]);

  const handleMarkAsDone = (task) => {
    // Remove from progressTasks
    const updatedProgress = progressTasks.filter(t => t.id !== task.id);
    setProgressTasks(updatedProgress);

    // Add to doneTasks
    const doneTasks = JSON.parse(localStorage.getItem('doneTasks')) || [];
    localStorage.setItem('doneTasks', JSON.stringify([...doneTasks, task]));

    // Redirect to Done page
    navigate('/done');
  };

  const containerStyle = {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '30px',
    paddingTop: '80px',
  };

  const cardStyle = {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '4px 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f0e68c',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const buttonStyle = {
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    color: 'white',
    backgroundColor: '#28a745', // green for "Mark as Done"
    marginTop: '10px'
  };

  return (
    <div>
      <h2 style={{ paddingTop: '80px', paddingLeft: '20px' }}>In Progress Tasks</h2>
      <div style={containerStyle}>
        {progressTasks.length === 0 ? (
          <p>No tasks in progress</p>
        ) : (
          progressTasks.map(task => (
            <div key={task.id} style={cardStyle}>
              <p>{task.text}</p>
              <button style={buttonStyle} onClick={() => handleMarkAsDone(task)}>
                Mark as Done
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Progress;
