import React, { useState } from 'react';
import './Login.css';  // Yeni CSS dosyasını import ediyoruz

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Login işlemi yapılacak
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              required
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Şifre" 
              required
            />
          </div>
          <button type="submit" className="btn">Giriş Yap</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
