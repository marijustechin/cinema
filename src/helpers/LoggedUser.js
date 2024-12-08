export const setUserLoggedIn = (userId) => {
  localStorage.setItem('moviesUser', JSON.stringify(userId));
};

export const setUserLoggedOut = () => {
  localStorage.removeItem('moviesUser');
};

export const isAuthenticated = (userId) => {
  return localStorage.getItem('moviesUser');
};
