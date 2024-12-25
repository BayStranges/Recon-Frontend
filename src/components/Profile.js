import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token'); // Token'ı localStorage'dan alıyoruz
      if (!token) {
        alert('Lütfen Giriş Yapın');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data); // Kullanıcı bilgilerini state'e kaydediyoruz
      } catch (error) {
        console.error("Error fetching profile:", error.response ? error.response.data : error.message);
        alert('Error fetching profile: ' + error.response.data.message);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Profil</h2>
          <p><strong>Kullanıcı Adı:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Profil Yükleniyor Lütfen Bekleyiniz...</p>
      )}
    </div>
  );
};

export default Profile;
