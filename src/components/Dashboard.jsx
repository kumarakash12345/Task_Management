// src/components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const navStyle = {
    width: '100%',
    display: 'flex',
    gap: '20px',
    backgroundColor: '#007bff',
    padding: '15px 30px',
    color: 'white',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const contentStyle = {
    paddingTop: '80px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div>
      <nav style={navStyle}>
        <Link to="/all-task" style={linkStyle}>All Task</Link>
        <Link to="/Progress" style={linkStyle}> In Progress</Link>
        <Link to="/done" style={linkStyle}>Done</Link>
      </nav>
      <div style={contentStyle}>
        Welcome to My Personal Tracker
      </div>
    </div>
  );
};

export default Dashboard;
