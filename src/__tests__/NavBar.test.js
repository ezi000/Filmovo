// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserContext } from '../userContext';
import NavBar from '../NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';


describe('NavBar', () => {
  it('does not display LogoutButton when user is not logged in', () => {
    render(
      <Router>
        <UserContext.Provider value={{ user: null }}>
          <NavBar />
        </UserContext.Provider>
      </Router>
    );

    expect(screen.queryByTestId('logout-button')).not.toBeInTheDocument();
  });

  it('display LogoutButton when user is logged in', () => {
    render(
      <Router>
        <UserContext.Provider value={{ user: { isAdmin: false } }}>
          <NavBar />
        </UserContext.Provider>
      </Router>
    );

    expect(screen.queryByTestId('logout-button')).toBeInTheDocument();
  })
});