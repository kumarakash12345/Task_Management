import React, { useEffect, useState } from 'react';

const Done = () => {
  const [doneTasks, setDoneTasks] = useState(() => {
    const saved = localStorage.getItem('doneTasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
  }, [doneTasks]);

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
    backgroundColor: '#006400', // light green
  };

  return (
    <div>
      <h2 style={{ paddingTop: '80px', paddingLeft: '20px' }}>Done Tasks</h2>
      <div style={containerStyle}>
        {doneTasks.length === 0 ? (
          <p>No tasks completed</p>
        ) : (
          doneTasks.map(task => (
            <div key={task.id} style={cardStyle}>
              <p>{task.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Done;
