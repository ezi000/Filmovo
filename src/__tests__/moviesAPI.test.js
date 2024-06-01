import axios from 'axios';
import getMovieList from '../moviesAPI';

jest.mock('axios');

describe('getMovieList', () => {
  const data = {
    results: [
      {
        id: 1,
        primaryImage: {
          url: 'https://example.com/image.jpg',
        },
        titleText: {
          text: 'Movie Title',
        },
        releaseYear: {
          year: 2020,
        },
      }
    ],
  };

  beforeEach(() => {
    axios.request.mockImplementationOnce(() => Promise.resolve({ data }));
  });

  it('fetches successfully data from an API', async () => {
    await expect(getMovieList('testTitle')).resolves.toEqual(data.results);
  });

  it('calls axios with correct parameters', async () => {
    await getMovieList('testTitle');

    expect(axios.request).toHaveBeenCalledWith({
      method: "GET",
      url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/testTitle`,
      params: {
        exact: "false",
        titleType: "movie",
        limit: "5",
      },
      headers: {
        "X-RapidAPI-Key": "b1a45e8a00mshbd6942a92cb4229p1cbeecjsn4081074d23ae",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    });
  });
});