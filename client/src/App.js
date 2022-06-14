import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from './contexts/auth/authContext';
//Components
import Navbar from './components/Navbar';

//Pages
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import SingleShowPage from './pages/SingleShowPage';
import Register from './pages/Register';
import Login from './pages/Login';

import ShowsState from './contexts/shows/ShowsState';
import WatchedState from './contexts/watched/WatchedState';
import FavoriteState from './contexts/favorite/FavoriteState';

const App = () => {
  const { user } = useContext(authContext);
  return (
    <ShowsState>
      <WatchedState>
        <FavoriteState>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />}/>


                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/lists" element={<ListPage />} />
                <Route path="/shows/:id" element={<SingleShowPage />} />


          </Routes>
        </div>
      </Router>
      </FavoriteState>
      </WatchedState>
    </ShowsState>
  );
};

export default App;
