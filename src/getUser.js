export const getUser = async () => {
  // Pobranie danych użytkownika
    return fetch(`https://localhost:3000/users/me`,
      {
      method: "GET",
      credentials: "include", // Włączenie przesyłania ciasteczek sesji
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json()) // Konwersja odpowiedzi na obiekt JSON
      .then((response) => {
        return(response.user); // Zwrócenie danych użytkownika z odpowiedzi
      });
};

