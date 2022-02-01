import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsReducer';
import './mission.css';

const Mission = (mission) => {
  const {
    reserved, mission_id: missionId, mission_name: missionName, description,
  } = mission;

  const dispatch = useDispatch();

  return (
    <tr>
      <th>{missionName}</th>
      <th>{description}</th>

      {reserved
        ? (
          <>
            <th>
              <span><span className="active-member">ACTIVE MEMBER</span></span>
            </th>
            <th>
              <button type="button" className="leave" onClick={() => dispatch(leaveMission(missionId))}>Leave Mission</button>
            </th>
          </>
        )
        : (
          <>
            <th>
              <span><span className="not-member">NOT A MEMBER</span></span>
            </th>
            <th>
              <button type="button" className="action" onClick={() => dispatch(joinMission(missionId))}>Join Mission</button>
            </th>
          </>
        )}
    </tr>
  );
};

export default Mission;
