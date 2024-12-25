import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile'; // Profile bileşenini import ettik
import { SpeedInsights } from "@vercel/speed-insights/react"

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
      <SpeedInsights/>
    </div>
  );
}

export default App;
