// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render,fireEvent, screen, act} from '@testing-library/react';
import { UserContext } from '../userContext';
import MovieDetails from '../MovieDetails';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import axios from 'axios';
jest.mock('axios');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  useNavigate: () => jest.fn(),
}));

test('fetches movie details and displays them', async () => {
  axios.request.mockResolvedValue({
    data: {
      results: {
        primaryImage: { url: 'https://example.com/image.jpg' },
        titleText: { text: 'Movie Title' },
        releaseYear: { year: 2021 },
      },
    },
    status: 200,
  });

  render(
    <Router>
      <UserContext.Provider value={{ user: { isAdmin: false } }}>
        <MovieDetails />
      </UserContext.Provider>
    </Router>
  );

  const title = await screen.findByText('Movie Title');
  const releaseYear = await screen.findByText('Release Year: 2021');
  const image = await screen.findByAltText('Movie Title poster');

  expect(title).toBeInTheDocument();
  expect(releaseYear).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

  

it('does not allow not logged in user to add a movie to the database', async () => {
  axios.request.mockResolvedValue({
    data: {
      results: {
        primaryImage: { url: 'https://example.com/image.jpg' },
        titleText: { text: 'Movie Title' },
        releaseYear: { year: 2021 },
      },
    },
    status: 200,
  });
  /* global global */
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ status: 200 }),
    })
  );

  render(
    <Router>
      <UserContext.Provider value={{ user: null }}>
        <MovieDetails />
      </UserContext.Provider>
    </Router>
  );

  
  const button = await screen.findByTestId('add-movie-button');
  act(() => {
    fireEvent.click(button);
  });
  
  expect(global.fetch).not.toHaveBeenCalled();
});




it('logged in user can add a movie to the database', async () => {
  axios.request.mockResolvedValue({
    data: {
      results: {
        primaryImage: { url: 'https://example.com/image.jpg' },
        titleText: { text: 'Movie Title' },
        releaseYear: { year: 2021 },
      },
    },
    status: 200,
  });
  
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ status: 200 }),
    })
  );

  await act(async () => {
  render(
    <Router>
      <UserContext.Provider value={{ user: { isAdmin: false } }}>
        <MovieDetails />
      </UserContext.Provider>
    </Router>
  );
  });
  
  const button = await screen.findByTestId('add-movie-button');
  act(() => {
    fireEvent.click(button);
  });

  expect(global.fetch).toHaveBeenCalled();
});