import React from 'react'
import { render, fireEvent, screen, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext } from '../userContext';
import Login from '../Login'

require('jest-fetch-mock').enableMocks()

test('login component with login form renders correctly', () => {
  render(
    <Router>
      <UserContext.Provider value={{ user: null }}>
        <Login />
      </UserContext.Provider>
    </Router>
  );

  expect(screen.getByPlaceholderText(/Login/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Log in/i })).toBeInTheDocument();
});

test('user can fill out the form', async () => {
  const login = 'testUser'
  const password = 'testPassword'

  render(
    <Router>
      <UserContext.Provider value={{ user: null }}>
        <Login />
      </UserContext.Provider>
    </Router>
  );
  await act(async () => {
    fireEvent.change(screen.getByPlaceholderText(/Login/i), {
      target: { value: login },
    })
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: password },
    })
  });

  expect(screen.getByPlaceholderText(/Login/i)).toHaveValue(login);
  expect(screen.getByPlaceholderText(/Password/i)).toHaveValue(password);
});


test('submits the form and user logs in', async () => {
  const login = 'testUser'
  const password = 'testPassword'

  fetch.mockResponseOnce(JSON.stringify({ user: { token: 'fake_user_token' } }))

  render(
    <Router>
      <UserContext.Provider value={{ user: null }}>
        <Login fetch={fetch} />
      </UserContext.Provider>
    </Router>
  );
  
  let loginInput = await screen.findByPlaceholderText(/Login/i);
  if (!loginInput) {
    loginInput = await screen.findByPlaceholderText(/Incorrect login or password/i);
  }
  const passwordInput = await screen.findByPlaceholderText(/Password/i);

  await act(async () => {
    fireEvent.change(loginInput, {
      target: { value: login },
    })
    fireEvent.change(passwordInput, {
      target: { value: password },
    })
  })

  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /Log in/i }))
  })
  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))
  expect(fetch).toHaveBeenCalledWith('https://localhost:3000/users/login', {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: login,
      password: password,
    }),
  })
});