import React, { useState } from 'react';
import './Register.css';  // Yeni CSS dosyasını import ediyoruz

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kayıt işlemi yapılacak
  }

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Üye Ol</h2>
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
          <button type="submit" className="btn">Kayıt Ol</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
