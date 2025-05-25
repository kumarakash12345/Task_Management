import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AllTask from './components/AllTask';
import Progress from './components/Progress';
import Done from './components/Done';
import TaskProvider from './context/TaskContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // change to false to test login

  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/all-task" element={isLoggedIn ? <AllTask /> : <Navigate to="/" />} />
          <Route path="/progress" element={isLoggedIn ? <Progress /> : <Navigate to="/" />} />
          <Route path="/done" element={isLoggedIn ? <Done /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
