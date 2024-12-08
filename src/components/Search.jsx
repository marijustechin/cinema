import { useLocation } from 'react-router';
import search from '/assets/icon-search.svg';

export const Search = ({ onSearch }) => {
  const location = useLocation();

  const renderPlaceholder = () => {
    switch (location.pathname) {
      case '/':
        return 'Search for movies or TV series';
      case '/movies':
        return 'Search for movies';
      case '/tv-series':
        return 'Search for TV series';
      case '/bookmarked':
        return 'Search for bookmarked shows';
      default:
        return 'Search';
    }
  };

  const placeholder = renderPlaceholder();

  return (
    <div className="flex items-center gap-3 border-b border-b-lightBlue">
      <img src={search} alt="search icon" />
      <input
        className="p-2 bg-dark w-full focus:outline-none heading-md"
        id="search"
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
      />
    </div>
  );
};
