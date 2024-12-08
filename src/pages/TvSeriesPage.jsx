import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList';
import { Search } from '../components/Search';
import { Navbar } from '../components/shared/Navbar';
import { apiGetSeries } from '../api/movies';
import { useUserContext } from '../service/UserContext';
import { useNavigate } from 'react-router';

export default function TvSeriesPage() {
  const user = useUserContext();
  const navitate = useNavigate();

  const [title, setTitle] = useState('TV Series');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Jei user neprisijungęs,
  // nukreipiamas į pradžios puslapį
  useEffect(() => {
    if (!user.user) navitate('/');
    getMovies();
  }, [user]);

  const getMovies = async () => {
    const movies = await apiGetSeries();
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
