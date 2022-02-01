import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missionsReducer';
import './mission.css';

const Mission = (mission) => {
  const {
    mission_id: missionId, mission_name: missionName, description,
  } = mission;

  const dispatch = useDispatch();

  return (
    <tr>
      <th>{missionName}</th>
      <th>{description}</th>
      <th>
        <span><span className="member">NOT A MEMBER</span></span>
      </th>
      <th>
        <button type="button" className="action" onClick={() => dispatch(joinMission(missionId))}>Join Mission</button>
      </th>
    </tr>
  );
};

export default Mission;
