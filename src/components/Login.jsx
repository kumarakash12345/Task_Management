import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  if (username.trim() && password.trim()) {
    setIsLoggedIn(true);
    alert('Login successful');
    navigate('/dashboard');
  } else {
    alert('Please enter both username and password.');
  }
};


  const styles = {
    wrapper: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffc0cb', // pink
      position: 'relative',       // for absolute title positioning
    },
    appTitle: {
      position: 'absolute',
      top: '40px',
      width: '100%',
      textAlign: 'center',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      width: '100%',
      maxWidth: '400px',
      padding: '30px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #bbb',
      borderRadius: '4px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      border: 'none',
      color: 'white',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.appTitle}>Task Management App</h1>
      <div style={styles.container}>
        <h2 style={styles.title}>Login</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;