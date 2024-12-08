import { useNavigate } from 'react-router';
import { MoviesList } from '../components/MoviesList';
import { Search } from '../components/Search';
import { Navbar } from '../components/shared/Navbar';
import { useUserContext } from '../service/UserContext';
import { useEffect, useState } from 'react';
import { apiGetBookmarked } from '../api/movies';

export default function BookmarkedPage() {
  const user = useUserContext();
  const navitate = useNavigate();

  const [title, setTitle] = useState('Bookmarked Movies');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Jei user neprisijungęs,
  // nukreipiamas į pradžios puslapį
  useEffect(() => {
    if (!user.user) navitate('/');
    getBookmarked();
  }, [user]);

  const getBookmarked = async () => {
    const movies = await apiGetBookmarked(user.user);
    setMovies([...movies]);
    setFilteredMovies([...movies]);
  };

  return (
    <main className="h-screen flex gap-3 p-4">
      <Navbar />
      <div className="flex-1 ">
        <div className="w-full flex flex-col gap-4 body-md p-4">
          <Search onSearch={() => {}} />
          <h1 className="heading-lg">{title}</h1>
          <MoviesList movies={filteredMovies} />
        </div>
      </div>
    </main>
  );
}
