import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // CSS stilini import ettik

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { email, password, confirmPassword } = formData;
    
    // Şifre ve Şifre Doğrulaması eşleşiyor mu?
    if (password !== confirmPassword) {
      setError('Şifreler eşleşmiyor!');
      return;
    }
    
    // E-posta doğrulama
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Geçersiz e-posta adresi!');
      return;
    }

    try {
      const response = await axios.post('https://yourbackendurl.com/register', {
        email,
        password
      });

      if (response.data.success) {
        setSuccessMessage('Kayıt başarılı! Giriş yapabilirsiniz.');
        setError('');
      }
    } catch (error) {
      setError('Bir hata oluştu, lütfen tekrar deneyin.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="register-container">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        
        <div className="input-group">
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="confirmPassword">Şifreyi Doğrula:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Kayıt Ol</button>
      </form>
      
      <div className="login-link">
        <p>Zaten bir hesabınız var mı? <a href="/login">Giriş Yap</a></p>
      </div>
    </div>
  );
};

export default Register;
