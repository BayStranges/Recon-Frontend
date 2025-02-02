import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile'; // Profile bileşenini import ettik
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Ana sayfa

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      {/* Routes bileşeni ile yolları tanımlıyoruz */}
      <Routes>
        {/* Login sayfası */}
        <Route path="/login" element={<Login />} />
        {/* Profil sayfası */}
        <Route path="/profile" element={<Profile />} />
        {/* Login sayfası */}
        <Route path="/register" element={<Register />} />
        {/* Ana sayfa */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
