import './mission.css';

const Mission = (mission) => {
  const {
    mission_name: missionName, description,
  } = mission;

  return (
    <tr>
      <th>{missionName}</th>
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
