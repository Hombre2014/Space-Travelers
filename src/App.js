import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Menu from './components/Menu/Menu';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';
import missionsFetch from './redux/missions/missionsFetch';

function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(missionsFetch()); }, []);
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>

  );
}

export default App;
