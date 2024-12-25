import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token); // Token'ı sakla
        alert('Giriş başarılı!');
        window.location.href = '/profile'; // Profil sayfasına yönlendir
      }
    } catch (error) {
      console.error('Giriş işlemi sırasında bir hata oluştu:', error);
      if (error.response) {
        setErrorMessage(error.response.data.error || 'Bir hata oluştu, lütfen tekrar deneyin.');
      } else {
        setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Giriş Yap</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Giriş Yap</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="register-link">Hesabınız yok mu? <a href="/register">Kayıt Ol</a></p>
      </div>
    </div>
  );
};

export default Login;
