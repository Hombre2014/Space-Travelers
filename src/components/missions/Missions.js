import { React } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Mission from './Mission';
import './missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <th className="head">Missions</th>
            <th className="head">Description</th>
            <th className="head">Status</th>
            <th className="head">Action</th>
          </tr>
          {missions.map(
            (mission) => (
              <Mission
                key={uuidv4()}
                mission_name={mission.mission_name}
                description={mission.description}
                mission_id={mission.mission_id}
                reserved={mission.reserved}
              />
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
