import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Hoş Geldiniz!</h1>
        <p className="hero-description">Uygulamanızın sunduğu harika özellikleri keşfedin. Hemen başlayın ve hayatınızı kolaylaştırın.</p>
        <button className="cta-btn">Başlayın</button>
      </div>

      <div className="features-section">
        <h2 className="section-title">Özellikler</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Kolay Erişim</h3>
            <p>Uygulamayı her yerden kolayca erişebilir ve kullanabilirsiniz.</p>
          </div>
          <div className="feature-card">
            <h3>Gelişmiş Güvenlik</h3>
            <p>Verilerinizin güvenliği bizim için öncelikli. Güçlü güvenlik önlemleri ile korunur.</p>
          </div>
          <div className="feature-card">
            <h3>Hızlı ve Verimli</h3>
            <p>İşlerinizi hızlı bir şekilde halledebilir, zaman kazanabilirsiniz.</p>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <p className="footer-text">2024 © Recon. Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
}

export default Home;
