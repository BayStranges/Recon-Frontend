import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Burada backend'den profil bilgisi alınıp setUser ile ayarlanabilir
    setUser({
      name: 'BayStranges',
      email: 'baystranges@example.com',
    });
  }, []);

  return (
    <div>
      <h1>Profil Bilgileri</h1>
      {user ? (
        <>
          <p>Ad: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Profil yükleniyor...</p>
      )}
    </div>
  );
}

export default Profile;
