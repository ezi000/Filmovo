export const getUser = async () => {
    return fetch(`https://localhost:3000/users/me`,
      {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        return(response.user);
      });
};

