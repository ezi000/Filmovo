// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { UserContext } from '../userContext';
import RatedMovies from '../RatedMovies';
import { useGetMovies } from '../useGetMovies';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('../useGetMovies');

describe('RatedMovies', () => {
  it('displays movies when available', async () => {
    useGetMovies.mockReturnValue({
      movies: [{ id: 1, title: 'Test Movie' }],
      loading: false,
    });

    render(
      <Router>
        <UserContext.Provider value={{ user: { isAdmin: true } }}>
          <RatedMovies />
        </UserContext.Provider>
      </Router>
    );

    await waitFor(() => expect(screen.getByText('Test Movie')).toBeInTheDocument());
  });

  it('displays loading when fetching movies', () => {
    useGetMovies.mockReturnValue({
      movies: [],
      loading: true,
    });

    render(
      <Router>
        <UserContext.Provider value={{ user: { isAdmin: true } }}>
          <RatedMovies />
        </UserContext.Provider>
      </Router>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('does not display button to delete movie from db when user is not an admin', async () => {
    useGetMovies.mockReturnValue({
      movies: [{ id: 1, title: 'Test Movie' }],
      loading: false,
    });
  
    render(
      <Router>
        <UserContext.Provider value={{ user: { isAdmin: false } }}>
          <RatedMovies />
        </UserContext.Provider>
      </Router>
    );
    await waitFor(() => expect(screen.queryByTestId('delete-button')).not.toBeInTheDocument());
  });


});