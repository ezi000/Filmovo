const handleLogout = async () => {
  try {
    const response = await fetch('http://localhost:3000/users/logout', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      localStorage.clear();
      window.location.reload();
    } else {
      throw new Error('Logout failed');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export default handleLogout;

