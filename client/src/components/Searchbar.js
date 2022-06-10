import { useState, useContext } from 'react';
import showsContext from '../contexts/shows/showsContext'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchShows } = useContext(showsContext);

  const handleChange = (e) => {
    e.preventDefault();

    searchShows(searchTerm)

  }

  return (
    <div className="searchbar">
     <form className="searchbar-form">
     <input
        type="text"
        placeholder="Search for a show"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn" type="submit" onClick={handleChange}>Search</button>
     </form>

    </div>
   );
}

export default Searchbar;