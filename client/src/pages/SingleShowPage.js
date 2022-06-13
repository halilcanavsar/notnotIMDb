import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ShowsContext from '../contexts/shows/showsContext';

const SinglePage = () => {
  const { setSingleShow, singleShow } = useContext(ShowsContext);
  const { id } = useParams();

  useEffect(() => {
    setSingleShow(id);
  }, []);

  const removeTags = (text) => {
    if (text === null || text === '') {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/<[^>]*>/g, '');
  };



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
            <h3 className="single-show-name">{singleShow.name}</h3>
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
