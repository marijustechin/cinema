import { useUserContext } from '../service/UserContext';
import { Navbar } from '../components/shared/Navbar';
import { Search } from '../components/Search';
import { MoviesList } from '../components/MoviesList';
import { apiGetAllMovies } from '../api/movies';
import { useEffect, useState } from 'react';
import { SignUpLogin } from '../components/SignUpLogin/SignUpLogin';

export default function HomePage() {
  const user = useUserContext();
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [title, setTitle] = useState('Recommended for you');

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const movies = await apiGetAllMovies();
    setAllMovies([...movies]);
    setFilteredMovies([...movies]);
  };

  const handleSearch = (filterString) => {
    setFilteredMovies([
      ...allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(filterString.toLowerCase())
      ),
    ]);

    if (filterString) {
      setTitle(`Found results for '${filterString}'`);
    } else {
      setTitle('Recommended for you');
    }
  };

  console.log(user.user);

  return (
    <main className="h-screen flex gap-3 p-4">
      {user.user ? (
        <>
          <Navbar />
          <div className="flex-1 ">
            <div className="w-full flex flex-col gap-4 body-md p-4">
              <Search onSearch={(searchString) => handleSearch(searchString)} />
              <h1 className="heading-lg">{title}</h1>
              <MoviesList movies={filteredMovies} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-md mx-auto">
            <SignUpLogin />
          </div>
        </>
      )}
    </main>
  );
}
