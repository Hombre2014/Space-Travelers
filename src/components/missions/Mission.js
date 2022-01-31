/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import './mission.css';

const Mission = (mission) => {
  const {
    mission_id, mission_name, description,
  } = mission;

  const dispatch = useDispatch();

  return (
    <tr>
      <th>{mission_name}</th>
      <th>{description}</th>
      <th>
        <span><span className="member">NOT A MEMBER</span></span>
      </th>
      <th>
        <button type="button" className="action">Join Mission</button>
      </th>
    </tr>
  );
};

export default Mission;
