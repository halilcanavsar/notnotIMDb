import { useEffect, useContext } from 'react';
import ListItem from '../components/ListItem';
import FavoriteContext from '../contexts/favorite/favoriteContext';
import ShowsContext from '../contexts/shows/showsContext';






const ListPage = () => {

  const { setShows, shows } = useContext(ShowsContext);
  const { favorite, removeFavoriteList } = useContext(FavoriteContext);




  return (
    <div className="listpage">
      <div className="listpage-list">
        {favorite.map((item) => (
          <ListItem
          key={item.show.id}
          id={item.show.id}
          image={item.show.image ? item.show.image.medium : 'https://via.placeholder.com/210x295'}
          name={item.show.name}
          rating={item.show.rating.average ? item.show.rating.average : '-'}
          removeFavoriteList={removeFavoriteList}
          />
        ))}
    </div>
    </div>
   );
}

export default ListPage;