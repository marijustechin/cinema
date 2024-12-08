import { Bookmark } from './shared/Bookmark';

export const RegularMovieCard = ({ movie }) => {
  return (
    <div>
      <div className="flex flex-col relative">
        <Bookmark movieId={movie.id} bookmarks={movie.bookmarks} />
        <img
          className="rounded-lg"
          src={movie.thumbnail.regular.small}
          alt={movie.title}
        />

        <ul className="font-thin text-sm flex gap-2 list-disc list-inside [&>*:first-child]:list-none">
          <li>{movie.year}</li>
          <li className="">{movie.category}</li>
          <li>{movie.rating}</li>
        </ul>

        <div className="heading-md">{movie.title}</div>
      </div>
    </div>
  );
};
