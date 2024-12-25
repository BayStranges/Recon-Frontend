import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile'; // Profile bileşenini import ettik

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <h1>Recona Hoş Geldiniz</h1>
      {!token ? (
        <>
          <Register />
          <Login />
        </>
      ) : (
        <Profile />
      )}
    </div>
  );
}

export default App;
