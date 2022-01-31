import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';

function App() {
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
