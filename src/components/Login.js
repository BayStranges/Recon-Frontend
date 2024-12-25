import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate kullanarak yönlendirme

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook'u yönlendirme için kullanılır

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Burada backend'e login isteği atılacak
    // Eğer başarılı olursa, kullanıcıyı profile sayfasına yönlendiriyoruz
    navigate('/profile');
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifre"
        />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;
