import React from 'react';
import { render, act } from '@testing-library/react';
import {useGetMovies} from '../useGetMovies';
import '@testing-library/jest-dom';

/* global global */
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ movies: mockMovies }),
  })
);

const mockMovies = [
  { _id: '1', title: 'Movie 1', poster: 'poster1', rating: 5, who_added: 'Antonio Bonito' },
  { _id: '2', title: 'Movie 2', poster: 'poster2', rating: 4, who_added: 'Anna Lewandowska' },
];

const Component = () => {
  const { movies, loading } = useGetMovies('refreshKey');
  if (loading) return <div>Loading...</div>;
  return <div>{movies && movies.length > 0 ? movies[0].title : 'No movies found'}</div>;
};

describe('useGetMovies', () => {
  it('fetches movies and updates the state', async () => {
    const { getByText } = render(<Component />);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(getByText('Movie 1')).toBeInTheDocument();
  });

  it('calls fetch with correct parameters', async () => {
    render(<Component />);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(fetch).toHaveBeenCalledWith('https://localhost:3000/movies/getMoviesList');
  });

  it('renders correctly when there are no movies', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ movies: [] }),
      })
    );

    const { queryByText } = render(<Component />);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(queryByText('Movie 1')).not.toBeInTheDocument();
  });



});