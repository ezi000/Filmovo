import { getUser } from '../getUser';
/* global global */
global.fetch = require('jest-fetch-mock');

describe('getUser', () => {
  const mockUser = { id: 1, name: 'Jan Kowalski' };

  beforeEach(() => {
    fetch.mockResponseOnce(JSON.stringify({ user: mockUser }));
  });

  it('fetches the user and returns correct data', async () => {
    const user = await getUser();
    expect(user).toEqual(mockUser);
  });

  it('makes a fetch call with correct parameters', async () => {
    await getUser();
    expect(fetch).toHaveBeenCalledWith('https://localhost:3000/users/me', {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
});