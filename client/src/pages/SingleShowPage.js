import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ShowsContext from '../contexts/shows/showsContext';
import WatchedContext from '../contexts/watched/watchedContext';
import FavoriteContext from '../contexts/favorite/favoriteContext';

const SinglePage = (props) => {
  const { setSingleShow, singleShow } = useContext(ShowsContext);
  const { addWatchedList, removeWatchedList, watched } =
    useContext(WatchedContext);
  const { addFavoriteList, removeFavoriteList, favorite } =
    useContext(FavoriteContext);

  const { id } = useParams();

  useEffect(() => {
    setSingleShow(id);
  }, [id]);

  const removeTags = (text) => {
    if (text === null || text === '') {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/<[^>]*>/g, '');
  };

  const handleClick = (id) => {
    addWatchedList(id);
  };

  const handleClick2 = (id) => {
    addFavoriteList(id);
  }

  return (
    <>
      {singleShow && (
        <div className="single-show">
          <div className="single-show-image">
            <img
              src={
                singleShow.image
                  ? singleShow.image.medium
                  : 'https://via.placeholder.com/210x295'
              }
              alt={singleShow.name}
            />
          </div>
          <div className="single-show-info">
            <h3 className="single-show-name">{singleShow.name}

            {favorite.includes(singleShow.id) ? (
                        <p >
                          <button className="favorite" onClick={() => removeFavoriteList(singleShow.id)}>
                            Remove
                          </button>
                        </p>
                      ) : (
                        <p >
                          <button className="favorite" onClick={() => handleClick2(singleShow.id)}>
                            Favorite
                          </button>
                        </p>
                      )}


            </h3>
            {singleShow.genres &&
              singleShow.genres.map((genres) => (
                <p key={genres} className="single-show-genre">
                  {genres}
                </p>
              ))}

            <p>
              <strong>Status: </strong> {singleShow.status && singleShow.status}
            </p>

            <p>
              <strong>Rating: </strong>{' '}
              {singleShow.rating ? singleShow.rating.average : '-'}
            </p>

            <p>
              <strong>Official Site: </strong>{' '}
              {singleShow.officialSite ? (
                <a
                  href={singleShow.officialSite}
                  target="_blank"
                  rel="noreferrer"
                  className="single-show-link"
                >
                  {singleShow.officialSite}
                </a>
              ) : (
                '-'
              )}
            </p>

            <p>
              <strong>Summary: </strong>{' '}
              {singleShow.summary && removeTags(singleShow.summary)}
            </p>
            <div single-show-episode>
              {singleShow._embedded.episodes &&
                singleShow._embedded.episodes.map((episode) => (
                  <div key={episode.id} className="single-show-episode">
                    <div className="single-show-episode-image">
                      <img
                        src={
                          episode.image
                            ? episode.image.medium
                            : 'https://via.placeholder.com/210x295'
                        }
                        alt={episode.name}
                      />
                    </div>
                    <div className="single-show-episode-info">
                      <div className="single-show-episode-title">
                        {episode.name}: {removeTags(episode.summary)}
                      </div>

                      <div className="single-show-episode-rating">
                        Rating: {episode.rating ? episode.rating.average : '-'}
                      </div>

                      <p className="single-show-episode-season-episode">
                        Season: {episode.season} Episode: {episode.number}
                      </p>

                      {watched.includes(episode.id) ? (
                        <p className="remove-button">
                          <button onClick={() => removeWatchedList(episode.id)}>
                            Remove
                          </button>
                        </p>
                      ) : (
                        <p className="watched-button">
                          <button onClick={() => handleClick(episode.id)}>
                            Watched
                          </button>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePage;
