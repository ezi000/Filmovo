export const getLoggedUser = async () => {
  try {
    const response = await fetch("http://localhost:3000/users/me", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',});

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching logged-in user:', error);
    throw error;
  }
}