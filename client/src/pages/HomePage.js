import { useContext } from 'react';
import ShowsContext from '../contexts/shows/showsContext';

//Components
import Searchbar from '../components/Searchbar';
import ListItem from '../components/ListItem';


const HomePage = () => {
  const showsContext = useContext(ShowsContext);
  const { shows, loading } = showsContext;
  return (
    <div className="homepage">
      <Searchbar />
      {loading ? <p className="loading">Loading...</p> : <p className="loading">{shows.length} shows found</p>}
      <div className="homepage-list">
        {shows.map((item) => (
          <ListItem
          key={item.show.id}
          id={item.show.id}
          image={item.show.image ? item.show.image.medium : 'https://via.placeholder.com/210x295'}
          name={item.show.name}
          rating={item.show.rating.average ? item.show.rating.average : '-'}

          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
