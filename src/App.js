import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Rockets from './components/rockets/Rockets';
import getRockets from './redux/rockets/rocketThunk';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';
import missionsFetch from './redux/missions/missionsFetch';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getRockets()); }, [dispatch]);
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
};

export default App;
