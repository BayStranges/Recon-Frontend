import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        alert('Kayıt başarılı!');
      }
    } catch (error) {
      console.error('Kayıt işlemi sırasında bir hata oluştu:', error);
      if (error.response) {
        setErrorMessage(error.response.data.error || 'Bir hata oluştu, lütfen tekrar deneyin.');
      } else {
        setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Kayıt Ol</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Kayıt Ol</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="login-link">Zaten bir hesabınız var mı? <a href="/login">Giriş Yap</a></p>
      </div>
    </div>
  );
};

export default Register;
