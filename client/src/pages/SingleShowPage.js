import { useEffect, useContext }  from 'react';
import { useParams } from 'react-router-dom';
import ShowsContext from '../contexts/shows/showsContext';


const SinglePage = () => {

  const { setSingleShow, singleShow, loading } = useContext(ShowsContext);
  const { id } = useParams();
  useEffect(() => {
    setSingleShow(id);
  }, [id]);


  return (
    <>
      {loading ? <p className="loading">Loading...</p> :
      <div className="single-show">
        <div className="single-show-image">
          <img src={singleShow.image ? singleShow.image.medium : 'https://via.placeholder.com/210x295'} alt={singleShow.name} />
        </div>
        <div className="single-show-info">
          <h3 className="single-show-name">{singleShow.name}</h3>

        </div>
      </div>
        }

    </>
   );
}

export default SinglePage;