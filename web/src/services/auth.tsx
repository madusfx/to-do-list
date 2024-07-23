const isClient = typeof window !== 'undefined';

export const TOKEN_KEY = 'token';
export const ID_KEY = 'id';

export const isAuthenticated = () =>
  isClient && localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () =>
  isClient ? localStorage.getItem(TOKEN_KEY) : null;
export const getId = () => (isClient ? localStorage.getItem(ID_KEY) : null);
export const login = (token: string, id: string) => {
  if (isClient) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ID_KEY, id);
  }
};
export const logout = () => {
  if (isClient) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ID_KEY);
  }
};
