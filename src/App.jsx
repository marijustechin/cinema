import { BrowserRouter, Route, Routes } from 'react-router';
import { useState } from 'react';
import { UserContext } from './service/UserContext';

// Layouts
import { MainLayout } from './layouts/MainLayout';

// Pages
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TvSeriesPage from './pages/TvSeriesPage';
import BookmarkedPage from './pages/BookmarkedPage';

const initUser = '';

const isAuthenticated = () => {
  const user = localStorage.getItem('moviesUser');
  return user ? user : initUser;
};

function App() {
  const [user, setUser] = useState(isAuthenticated);

  const setLoggedIn = (userId) => {
    localStorage.setItem('moviesUser', userId);
    setUser(userId);
  };

  const setLoggedOut = () => {
    localStorage.removeItem('moviesUser');
    setUser('');
  };

  return (
    <UserContext.Provider value={{ user, setLoggedIn, setLoggedOut }}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="tv-series" element={<TvSeriesPage />} />
            <Route path="bookmarked" element={<BookmarkedPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
