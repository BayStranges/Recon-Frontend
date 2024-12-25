const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Kullanıcıyı login sayfasına yönlendir
  };
  