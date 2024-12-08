export const API_MOVIES_URL = 'http://localhost:7777/movies';
export const API_USERS_URL = 'http://localhost:7777/users';

import avatar from '/assets/image-avatar.png';
import logo from '/assets/logo.svg';
import navHome from '/assets/icon-nav-home.svg';
import navMovies from '/assets/icon-nav-movies.svg';
import navSeries from '/assets/icon-nav-tv-series.svg';
import navBookmark from '/assets/icon-nav-bookmark.svg';

export const navLinks = [
  { title: 'Home', href: '/', icon: navHome },
  { title: 'Movies', href: '/movies', icon: navMovies },
  { title: 'TV Series', href: '/tv-series', icon: navSeries },
  { title: 'Bookmarked movies', href: '/bookmarked', icon: navBookmark },
];
