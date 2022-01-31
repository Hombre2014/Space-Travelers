import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import missionsFetch from '../../redux/missions/missionsFetch';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(missionsFetch()); }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {missions.map(
            (mission) => (
              <Mission
                key="mission_id"
                mission_name={mission.mission_name}
                description={mission.description}
              />
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
