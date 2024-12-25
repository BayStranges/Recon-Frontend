import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Geri bildirim mesajı
  const [loading, setLoading] = useState(false); // Yükleniyor durumu

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // API çağrısı simülasyonu
    setTimeout(() => {
      if (email === 'test@example.com') {
        setMessage('Bu e-posta zaten kayıtlı. Lütfen farklı bir e-posta kullanın.');
      } else {
        setMessage('Kayıt başarılı! Hoş geldiniz!');
      }
      setLoading(false);
    }, 1500); // 1.5 saniye bekleyerek simüle ettik
  };

  return (
    <div className="register-container">
      <h2>Kayıt Ol</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Yükleniyor...' : 'Kayıt Ol'}
        </button>
      </form>
    </div>
  );
};

export default Register;
