import { useEffect, useState } from 'react';
import bookmarkEmpty from '/assets/icon-bookmark-empty.svg';
import bookmarkFull from '/assets/icon-bookmark-full.svg';
import { useUserContext } from '../../service/UserContext';
import { apiRemoveBookmark, apiSetBookmark } from '../../api/movies';

export const Bookmark = ({ movieId, bookmarks }) => {
  const user = useUserContext();
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    isBookmarked();
  }, []);

  const isBookmarked = () => {
    if (bookmarks && bookmarks.includes(user.user)) {
      setBookmarked(true);
      return;
    } else {
      setBookmarked(false);
      return;
    }
  };

  const handleBookmark = async () => {
    if (bookmarked) {
      // remove from bookmarks
      const res = await apiRemoveBookmark(user.user, movieId);
      setBookmarked(false);
    } else {
      // set bookmarks
      const res = await apiSetBookmark(user.user, movieId);
      setBookmarked(true);
    }
  };

  return (
    <div
      onClick={handleBookmark}
      className="absolute top-2 right-2 w-10 h-10 bg-lightBlue rounded-full flex items-center justify-center opacity-70 cursor-pointer"
    >
      <img
        src={`${bookmarked ? bookmarkFull : bookmarkEmpty}`}
        alt="bookmark"
      />
    </div>
  );
};
