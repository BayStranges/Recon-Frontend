import React from 'react';
import { Link } from 'react-router-dom'; // Yönlendirme için Link kullanılır

function Home() {
  return (
    <div>
      <h1>Ana Sayfaya Hoşgeldiniz!</h1>
      <p>Uygulamanıza başlamak için giriş yapabilirsiniz.</p>
      <Link to="/login">Giriş Yap</Link> {/* Login sayfasına yönlendiren link */}
    </div>
  );
}

export default Home;
