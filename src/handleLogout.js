// Funkcja obsługująca wylogowywanie użytkownika
const handleLogout = async () => {
  try {
    // Wywołanie w celu wykonania wylogowania
    const response = await fetch('https://localhost:3000/users/logout', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    // Sprawdzenie czy odpowiedź zakończyła się sukcesem
    if (response.ok) {
      localStorage.clear(); // Wyczyszczenie lokalnego magazynu
      // window.location.reload();
    } else {
      throw new Error('Logout failed');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

export default handleLogout;
