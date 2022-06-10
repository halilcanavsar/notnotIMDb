
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';

//Pages
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import SingleShowPage from './pages/SingleShowPage';

import ShowsState from './contexts/shows/ShowsState';

const App = () => {
  return (
    <ShowsState>
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lists" element={<ListPage />} />
          <Route path="/shows/:id" element={<SingleShowPage />} />
        </Routes>
      </div>
    </Router>
    </ShowsState>
  );
}

export default App;

