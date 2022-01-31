/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';

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
        <span>NOT A MEMBER</span>
      </th>
      <th>
        <button type="button">Join Mission</button>
      </th>
    </tr>
  );
};

export default Mission;
