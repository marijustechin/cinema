import { RegularMovieCard } from './RegularMovieCard';

export const MoviesList = ({ movies, title }) => {
  return (
    <>
      <h1 className="heading-lg">{title}</h1>
      <div className="grid grid-cols-4 gap-3">
        {movies.map((movie) => (
          <div key={movie.title}>
            <RegularMovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};
